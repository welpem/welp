import React from 'react';
import './WOS.css';
import EditWOSModule from './EditWOSModule'


export default function WOSCard(props) {
    return (
        <div className = 'wos-container'>
  

{/* delete button */}
         
              <button
                onClick={() => props.deleteWOSFunction(props.welp_wos.wos_id)}>
                Delete
              </button>
 
   
  
{/* edit button */}
            <EditWOSModule 
                getWOS={props.getWOS} 
                welp_wos={props.welp_wos}
            />

{/* wos title*/}
            <h1>{props.wos_title}</h1>

{/* wos picture */}
            <img className = 'wos-image'
                src={props.wos_img} alt="Offender's mugshot" />

{/* wos description */}
            <p>{props.wos_description}</p>

      </div>
    );
  }