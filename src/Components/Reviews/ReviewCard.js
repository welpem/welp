import React from 'react';
import {Link} from 'react-router-dom';
import './Reviews.css';


// ------------ SAVE BELOW FOR LATER ------------
// import EditFormModule from './EditFormModule'
// import IconButton from '@material-ui/core/IconButton';
// import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
// ------------ SAVE ABOVE FOR LATER ------------


export default function ReviewCard(props) {

    return (
        <div>
  

{/* delete button */}
          {/* <Link to='/review' onClick={() => props.deleteOneFn(props.shop_id)}>
              <IconButton  aria-label="Delete" >
                  <DeleteOutlinedIcon />
              </IconButton>
          </Link> */}
   
  
{/* edit button */}
            {/* <EditFormModule getReviews={props.getReviews} welp_reviews={props.welp_reviews}/> */}
  


{/* see stuff */}
            <h1>{props.reviews_title}</h1>
            <img src={props.reviews_img} />
            <p>{props.reviews_description}</p>
            <p>{props.props.reviews_score}</p>

      </div>
    );
  }