import React from 'react';
// import {Link} from 'react-router-dom';
import './Reviews.css';
import axios from 'axios'
// import EditCommentModule from './EditCommentModule'



export default function CommentCard(props) {
const [open, setOpen] = React.useState(false);
const [userEdit, setUserEdit] = React.useState()

  function handleEditOpen() {
    setOpen(true);
    }
  function handleEditClose() {
    setOpen(false);
    }
  function handleEditSave(){
    axios
        .put('/api/comments', { comments_id:props.welp_comments.comments_id,
                                userEdit:userEdit, 
                                })
        .then (response => {
            // console.log(response)
            props.getComments()
        })
        .then(response => {
            setOpen(false)
        })
        .catch(error => console.log(`Mark - handleEditSave err on CommentsCard: ${error}`))

    }

    // console.log(props)
    // console.log(props.welp_comments.comments_id)
    // console.log({open})
    // console.log(userEdit)

    return (
        <div className = 'comments-big-container'>
        
        <div className = 'comments-sub-container'>


{/* if there is a comment THEN */}
            { 
                +props.welp_reviews.reviews_id === +props.welp_comments.reviews_id
            ?   
            <div className = 'no-reason-for-this'>


                { open === false
                ?
                <div className = 'comments-card-container'>
                <div className = 'comments-see-and-edit-container'>
{/* ability to see comments                     */}
                  <p>{props.welp_comments.comment_description}</p>

                  </div>
                  <div className = 'comment-button-container'>
{/* edit button */}
               <button 
               onClick={handleEditOpen} 
  
                >
                Edit 
                </button>
{/* delete button */}
                <button 
                   className = 'delete-button'
                   onClick={() => props.deleteCommentFn(props.welp_comments.comments_id)}
                 > 
                   Delete
                </button>
                </div>
              </div>



                :

// edit functionality                
                <div className = 'comments-card-container'>
                <div className = 'comments-see-and-edit-container'>


                    <textarea 
                    // rows='2' cols='75'
                    onChange = {(e) => setUserEdit(e.target.value)}
                    defaultValue = {props.welp_comments.comment_description}

                    />
                
                </div>
                
                <div className = 'comment-button-container'>

{/* cancel edit button */}


                    <button
                     onClick={handleEditClose}
                      >
                          Cancel
                    </button>
{/* save edit button */}
                    <button
                     onClick={handleEditSave}
                    >
                        Save
                    </button>



                </div>
                </div>
                } 







            </div>

            :
            "No Comments Yet"    
            }
            </div>
      </div>
    );
  }