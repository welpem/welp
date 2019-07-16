import React from 'react';
import axios from 'axios'


export default function EditFormModule(props) {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState();
  const [img, setImage] = React.useState();
  const [description, setDescription] = React.useState();
  const [score, setScore] = React.useState();



  function handleAddSubmit(){

    axios
        .post('/api/comments', {
                              description:description, 
                              score:score })
        .then (response => {
            props.getComments()
        })
        .then(response => {
            setOpen(false)
        })
        .catch(error => console.log(`handleAddComment error in AddComments.js : ${error}`))

  }


  return (
    <div>

{/* ---------- Regular Add Button ---------- */}
 
      <div className = 'add-comment-container'> 

      <form className = 'add-comment-form'>
        <br/>
        <input
                    onChange = {(e) => setDescription(e.target.value)}
                    placeholder = 'Add comment here'
        />
      </form>



      <button onClick={handleAddSubmit} color="primary">
        Save
      </button>


      </div>


    </div>
  );
}