import React from 'react';
import {Link} from 'react-router-dom';
import './WOS.css';


export default function WOSCard(props) {

    return (
        <div>
  

{/* delete button */}
          <Link to='/wos' onClick={() => props.deleteWOS(props.wos_id)}>
              <button  aria-label="Delete" >
                Delete
              </button>
          </Link>
   
  
{/* edit button */}
            {/* <EditFormModule getWOS={props.getWOS} welp_wos={props.welp_wos}/> */}
  


{/* see stuff */}
            <h1>{props.wos_title}</h1>
            <img src={props.wos_img} alt="Offender's mugshot" />
            <p>{props.wos_description}</p>

      </div>
    );
  }