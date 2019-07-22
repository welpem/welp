import React from 'react';
import './WOS.css';
import EditWOSModule from './EditWOSModule'

import {W1, W2, W3, W4, W5, W6} from '../../styles/Theme/Typography'
import {white, black, grey, aqua, purple, red} from '../../styles/Theme/Colors'
import {WCard, WOSImg} from '../../styles/Styled-Components/Surfaces/Cards'
export default function WOSCard(props) {
    return (
        <WCard backgroundColor={grey[300]}>
  

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
    <div className='flip-card'>
      <div className='flip-card-inner'>
        <div className='flip-card-front'>
            <p>{props.users_first_name}</p>
            <p>{props.businesses_name}</p>
            <WOSImg 
                src={props.wos_img} alt="Offender's mugshot" />
            <W2 fontColor={red[500]} LetterSpacing='-2px;' fontStyle='black' fontWeight='800'>{props.wos_title}</W2>
        </div>
        <div className='flip-card-back'>
            <W3 fontColor={red[500]} letterSpacing='-2px;' marginTop='40%'>{props.wos_description}</W3>

        </div>


      </div>
    </div>

{/* wos businessname*/}

            

{/* wos title*/}

{/* wos picture */}

{/* wos description */}

      </WCard>
    );
}