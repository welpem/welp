import React from 'react';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import IconButton from '@material-ui/core/IconButton';
import axios from 'axios'


export default function EditFormModule(props) {
  const [open, setOpen] = React.useState(false);
//   const [id, setId] = React.useState();
  const [title, setTitle] = React.useState();
  const [img, setImage] = React.useState();
  const [description, setDescription] = React.useState();
  const [score, setScore] = React.useState();


  function handleClickOpen() {
    setOpen(true);
  }

  function handleCancel() {
    setOpen(false);
  }

  function handleAddSubmit(){

    axios
        .post('/api/reviews', { title:title, 
                              img:img, 
                              description:description, 
                              score:score })
        .then (response => {
            props.getReviews()
        })
        .then(response => {
            setOpen(false)
        })
        .catch(error => console.log(`handleAddSubmit error in AddReview.js : ${error}`))

  }


  return (
    <div>

{/* MaterialUI   EDIT button      */}
          {/* <IconButton aria-label="Info"
          onClick={() => props.editReviewFn(props.reviews.reviews_id)}
          onClick={handleClickOpen}
          >
            <MoreVertIcon />
          </IconButton> */}



{/* Regular EDIT button */}

          <button aria-label="Info"
          onClick={() => props.editReviewFn(props.reviews.reviews_id)}
          onClick={handleClickOpen}
          >
            Add Review
          </button>



  
{/*  ---------- MaterialUI Pop Up Modal ---------- */}

      {/* <Dialog open={open} onClose={handleCancel} aria-labelledby="form-dialog-title" >
          
        <DialogTitle id="form-dialog-title">Edit your review</DialogTitle>

        <DialogContent style={{ paddingLeft: "4vw", paddingRight: "4vw"}}>
          <DialogContentText>
            Please edit the areas needed about your review:
          </DialogContentText> */}

{/* title */}
          {/* <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title for ad - 200 character limit"
            type="title"
            fullWidth
            onChange = {(e) => setTitle(e.target.value)}
            defaultValue = {props.welp_reviews.reviews_title}
          /> */}
{/* image url */}
        {/* <TextField
            autoFocus
            margin="dense"
            id="image_url"
            label="Image URL - links to pictures only"
            type="image_url"
            fullWidth
            onChange = {(e) => setImage(e.target.value)}
            defaultValue = {props.welp_reviews.reviews_img}
          /> */}
      

{/* description */}
        {/* <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Brief Description"
            type="description"
            fullWidth
            onChange = {(e) => setDescription(e.target.value)}
            defaultValue = {props.welp_reviews.reviews_description}
          />

        </DialogContent>



        <DialogActions> */}

{/* Cancel button */}
          {/* <Button
            onClick={handleCancel} color="primary"
          >
            Cancel
          </Button> */}

{/* Submit button */}
          {/* <Button 
            onClick={handleEditSave} color="primary"
          >
            Save
          </Button>
     
        </DialogActions>
      </Dialog> */}
{/*  ---------- MaterialUI Pop Up Modal ---------- */}







{/* ---------- Regular Pop Up Modal ---------- */}
    <dialog open={open} onClose={handleCancel} aria-labelledby="form-dialog-title" >


        <h2>
          Edit your review
        </h2>

      <form className = 'reviews-edit-form'>

        <label>Title: </label>
        <textarea rows="3" cols="27"
                    onChange = {(e) => setTitle(e.target.value)}
                    defaultValue = 'Add Title here.'
        />

        <br/>
        <label>Image: </label>
        <textarea rows="3" cols="27"
                    onChange = {(e) => setImage(e.target.value)}
                    defaultValue = 'Add image URL here'
        />

        <br/>
        <label>Description: </label>
        <textarea rows="10" cols="27"
                    onChange = {(e) => setDescription(e.target.value)}
                    defaultValue = 'Add description here'
        />
        <label>Stars: (1-5) </label>
        <select id = 'stars'
                    onChange = {(e) => setScore(e.target.value)}
                  
        >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
        </select>


      </form>



{/* Cancel button */}
          <button
            onClick={handleCancel} color="primary"
          >
            Cancel
          </button>

{/* Submit button */}
          <button 
            onClick={handleAddSubmit} color="primary"
          >
            Save
          </button>



    </dialog>
{/* ---------- Regular Pop Up Modal ---------- */}
















    </div>
  );
}