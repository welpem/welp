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
    // console.log(props.welp_reviews.users_id)
    // console.log(props.user.id)
    return (
        <div className = 'reviews-big-container'>
    
        <div className = 'rewiews-sub-container'>

        <div className = 'reviews-user-and-button-area'>



        <div className = 'reviews-user'>
            <div className = 'reviews-user-info'>{props.welp_reviews.users_first_name} from </div>  
            <div className = 'reviews-company-info'>{props.welp_reviews.businesses_name}</div>
        </div>





        {props.user.id == props.welp_reviews.users_id

        ?

        <div className='reviews-buttons'>
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
                user={props.user}
            />
        </div>

    :
    <div className='reviews-buttons'>
    </div>

    }


        </div>



{/* review title */}
            <h4>{props.welp_reviews.reviews_title}</h4>

{/* review picture */}
              <img className = 'reviews-image'
                alt='user'
                src={props.welp_reviews.reviews_img} />

{/* review description */}
            <p>{props.welp_reviews.reviews_description}</p>

{/* review score */}
            <p className = 'review-stars'>{props.welp_reviews.reviews_score} stars</p>
          

            </div>


        <div className = 'comments-container'>
            <Comments
            key={props.welp_reviews.reviews_id}
            welp_reviews={props.welp_reviews}
            user={props.user}
            />
        </div>



      </div>
    );
  }