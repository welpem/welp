import React from 'react';
// import {Link} from 'react-router-dom';
import './Reviews.css';
// import EditCommentModule from './EditCommentModule'



export default function CommentCard(props) {
    console.log(props)
    

    return (
        <div className = 'comments-big-container'>
        
        <div className = 'comments-sub-container'>

{/* REGULAR delete button */}
            {/* <button 
                onClick={() => props.deleteCommentFn(props.welp_review_comments.comments_id)}> 
                Delete
            </button> */}



{/* edit button */}
            {/* <EditCommentModule 
                getComments={props.getComments} 
                welp_review_comments={props.welp_review_comments}
            /> */}


{/* review description */}
            { 
                props.welp_reviews.reviews_id == props.welp_comments.reviews_id
            ?   
            <p>{props.welp_comments.comment_description}</p>
            :
            "No Comments Yet"    
            }
            </div>
      </div>
    );
  }