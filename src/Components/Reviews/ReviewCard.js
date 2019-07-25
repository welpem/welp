import React from 'react';
// import {Link} from 'react-router-dom';
import './Reviews.css';
import EditReviewModule from './EditReviewModule'
import Comments from './Comments'
import StarRating from 'react-star-rating'
import {RCard, ReviewIMG} from '../../styles/Styled-Components/Surfaces/Cards'
import {W1, W2, W3, W4, W5, W6} from '../../styles/Theme/Typography'
import {white, black, grey, aqua, purple, red} from '../../styles/Theme/Colors'
import {Input} from '../../styles/Styled-Components/Inputs/Text-Fields'
import {SubmitButton} from '../../styles/Styled-Components/Inputs/Buttons'
import {WOSWrapper} from '../../styles/Styled-Components/Layout/Container'
// ------------ SAVE BELOW FOR LATER ------------

// import IconButton from '@material-ui/core/IconButton';
// import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
// ------------ SAVE ABOVE FOR LATER ------------


export default function ReviewCard(props) {
    // console.log(props)
    // console.log(props.welp_reviews.users_id)
    // console.log(props.user.id)

    return (
        <RCard backgroundColor={grey[500]} className = 'reviews-big-container'>
    
    

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
            <W3 fontColor={purple[500]} position='absolute'  top='35px' right='35px' width ='150px'>{props.welp_reviews.reviews_title}</W3>

{/* review picture */}
              <ReviewIMG className = 'reviews-image' top='15px' left='15px'
                alt='user'
                src={props.welp_reviews.reviews_img} />

{/* review description */}
            <W4 fontColor={grey[50]} width='300px'position='absolute' bottom='50px' left='15px' height='100px'>{props.welp_reviews.reviews_description}</W4>

{/* review score */}
            {/* <p className = 'review-stars'>rate: {props.welp_reviews.reviews_score} 
            stars</p> */}
            

            


        {/* <WOSWrapper className = 'comments-container' position='absolute' zindex='3' top='50px'>
            <Comments
            key={props.welp_reviews.reviews_id}
            welp_reviews={props.welp_reviews}
            user={props.user}
            />
        </WOSWrapper> */}



      </RCard>
    );
  }