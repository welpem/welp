import React from 'react';
// import {Link} from 'react-router-dom';
import './Reviews.css';
import EditReviewModule from './EditReviewModule'
import Comments from './Comments'


// ------------ SAVE BELOW FOR LATER ------------

// import IconButton from '@material-ui/core/IconButton';
// import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
// ------------ SAVE ABOVE FOR LATER ------------


export default function ReviewCard(props) {
    // console.log(props)
    return (
        <div className = 'reviews-big-container'>
        
        <div className = 'rewiews-sub-container'>

{/* REGULAR delete button */}
            <button 
                onClick={() => props.deleteReviewFn(props.welp_reviews.reviews_id)}> 
                Delete
            </button>

{/* MATERIAL UI delete button */}    
        {/* <Link to='/reviews' onClick={() => props.deleteReviewFb(props.welp_reviews.reviews_id)}>
            <IconButton  aria-label="Delete" >
                <DeleteOutlinedIcon />
            </IconButton>
        </Link> */}

{/* edit button */}
            <EditReviewModule 
                getReviews={props.getReviews} 
                welp_reviews={props.welp_reviews}
            />


{/* review id */}
            <h4>{props.welp_reviews.reviews_id}</h4>

{/* review title */}
            <h4>{props.welp_reviews.reviews_title}</h4>

{/* review picture */}
              <img className = 'reviews-image'
                alt='user'
                src={props.welp_reviews.reviews_img} />

{/* review description */}
            <p>{props.welp_reviews.reviews_description}</p>

{/* review score */}
            <p>{props.welp_reviews.reviews_score} stars</p>
          

            </div>


        <div className = 'comments-container'>
            <Comments
            welp_reviews={props.welp_reviews}
            />
        </div>



      </div>
    );
  }