import React from 'react';
import './WOS.css';
import EditWOSModule from './EditWOSModule'


export default function WOSCard(props) {
    return (
        <div className = 'wos-container'>
  

{/* delete button */}
         {props.user.email ? (
              <button
                onClick={() => props.deleteWOSFunction(props.welp_wos.wos_id)}>
                Delete
              </button>
              ) : null}
 
  
{/* edit button */}
          {props.user.email ? (
            <EditWOSModule 
                getWOS={props.getWOS} 
                welp_wos={props.welp_wos}
                user={props.user}
            />
          ) : null}

{/* wos username*/}

            <p>{props.users_first_name}</p>

{/* wos businessname*/}

            <p>{props.businesses_name}</p>
            

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