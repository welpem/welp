import React from 'react';
import axios from 'axios'

import {IMG, SubmitButton} from '../../styles/Styled-Components/Inputs/Buttons'
import {W1, W2, W3, W4, W5, W6} from '../../styles/Theme/Typography'
import {white, black, grey, aqua, purple, red} from '../../styles/Theme/Colors'
import Add from '../../styles/Display/Images/Add.svg'

export default function EditFormModule(props) {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState();
  const [img, setImage] = React.useState();
  const [description, setDescription] = React.useState();

  function handleClickOpen() {
    setOpen(true);
  }

  function handleCancel() {
    setOpen(false);
  }



  function handleAddSubmit(){

    axios
        .post('/api/wos', { title:title, 
                              img:img, 
                              description:description,
                              uid: props.user.id,
                              bid: props.user.businesses_id
                             })
        .then (response => {
            props.getWOS()
        })
        .then(response => {
            setOpen(false)
        })
        .catch(error => console.log(`handleAddSubmit error in AddWOS.js : ${error}`))

  }


  return (
    <div>



{/* Regular ADD button */}

          <IMG id="addWOSButton" aria-label="Info" src={Add}
          onClick={() => props.editWOSFunction(props.wos.wos_id)}
          onClick={handleClickOpen}
          />







{/* ---------- Regular Pop Up Modal ---------- */}
    <dialog open={open} onClose={handleCancel} aria-labelledby="form-dialog-title" >


        <h2>
          Submit an offender
        </h2>

      <form className = 'wos-edit-form'>

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