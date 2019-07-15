import React from 'react';
import {Link} from 'react-router-dom';
import './Reviews.css';
import EditReviewModule from './EditReviewModule'


// ------------ SAVE BELOW FOR LATER ------------

import IconButton from '@material-ui/core/IconButton';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
// ------------ SAVE ABOVE FOR LATER ------------


export default function ReviewCard(props) {
    console.log(props)
    return (
        <div className = 'reviews-container'>
  

{/* OLD delete button */}
 
              {/* <button 
                onClick={() => props.deleteReviewFn(props.welp_reviews.reviews_id)}> 
                Delete
              </button> */}

{/* NEW delete button */}    

        <Link to='/reviews' onClick={() => props.deleteReviewFb(props.welp_reviews.reviews_id)}>
            <IconButton  aria-label="Delete" >
                <DeleteOutlinedIcon />
            </IconButton>
        </Link>
   
  
{/* edit button */}
            <EditReviewModule 
                getReviews={props.getReviews} 
                welp_reviews={props.welp_reviews}
            />
  
    

{/* review title */}
            <h4>{props.welp_reviews.reviews_title}</h4>


{/* review picture */}
           
              <img className = 'reviews-image'
                src={props.welp_reviews.reviews_img} />
    

{/* review description */}
            <p>{props.welp_reviews.reviews_description}</p>

{/* review score */}
            <p>{props.welp_reviews.reviews_score} stars</p>
          
      </div>
    );
  }