import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios'


export default function EditFormModule(props) {
  const [open, setOpen] = React.useState(false);
  // const [id, setId] = React.useState();
  const [title, setTitle] = React.useState();
  const [image_url, setImage] = React.useState();
  const [description, setDescription] = React.useState();



  function handleClickOpen() {
    setOpen(true);
  }

  function handleCancel() {
    setOpen(false);
  }

  function handleEditSave(){

    axios
        .put('/api/reviews', { reviews_id:props.welp_reviews.reviews_id,
                               reviews_title:props.welp_reviews.reviews_title, 
                               reviews_img:props.welp_reviews.reviews_img, 
                               reviews_description:props.welp_reviews.reviews_description, 
                             })
        .then (response => {
            // console.log(response)
            props.getProducts()
        })
        .then(response => {
            setOpen(false)
        })
        .catch(error => console.log(`edit on editreviewmodule axios handleeditsave: ${error}`))

  }


  return (
    <div>

{/* EDIT button      */}
          <IconButton aria-label="Info"
          onClick={() => props.editReviewFn(props.reviews.reviews_id)}
          onClick={handleClickOpen}
          >
            <MoreVertIcon />
          </IconButton>
  
{/* Pop up EDIT modal */}

      <Dialog open={open} onClose={handleCancel} aria-labelledby="form-dialog-title" >
          
        <DialogTitle id="form-dialog-title">Edit your review</DialogTitle>

        <DialogContent style={{ paddingLeft: "4vw", paddingRight: "4vw"}}>
          <DialogContentText>
            Please edit the areas needed about your review:
          </DialogContentText>


{/* title */}
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title for ad - 200 character limit"
            type="title"
            fullWidth
            onChange = {(e) => setTitle(e.target.value)}
            defaultValue = {props.welp_reviews.reviews_title}
          />
{/* image url */}
        <TextField
            autoFocus
            margin="dense"
            id="image_url"
            label="Image URL - links to pictures only"
            type="image_url"
            fullWidth
            onChange = {(e) => setImage(e.target.value)}
            defaultValue = {props.welp_reviews.reviews_img}
          />
      

{/* description */}
        <TextField
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



        <DialogActions>

{/* Cancel button */}
          <Button
            onClick={handleCancel} color="primary"
          >
            Cancel
          </Button>

{/* Submit button */}
          <Button 
            onClick={handleEditSave} color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}