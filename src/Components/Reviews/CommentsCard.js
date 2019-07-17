import React from 'react';
// import {Link} from 'react-router-dom';
import './Reviews.css';
import EditCommentModule from './EditCommentModule'



export default function CommentCard(props) {
const [open, setOpen] = React.useState(false);

  function handleEditOpen() {
    setOpen(true);
    }
  function handleEditClose() {
    setOpen(false);
    }


    // console.log(props)
    console.log(props.welp_comments)

    return (
        <div className = 'comments-big-container'>
        
        <div className = 'comments-sub-container'>


{/* review description */}
            { 
                +props.welp_reviews.reviews_id === +props.welp_comments.reviews_id
            ?   
            <div className = 'comments-card-container'>
              <div className = 'comment-container'>


                {/* { open = false
                ? */}
                <p>{props.welp_comments.comment_description}</p>
                {/* :
                <div>
                    edit edit me 
                </div>
                } */}

              </div>


              <div className = 'button-container'>
{/* edit button */}
               <button 
               onClick={handleEditOpen} 
                // getComments={props.getComments} 
                // welp_review_comments={props.welp_review_comments}
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
            "No Comments Yet"    
            }
            </div>
      </div>
    );
  }