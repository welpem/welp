import React from 'react';
import {Link} from 'react-router-dom';

import './Home.css';
// import PreviewReviews from '../Reviews/PreviewReviews';
import PreviewWOS from '../WOS/PreviewWOS';

import next from '../../styles/Display/Icons/right.svg'
import {Grid} from '../../styles/Styled-Components/Layout/Grid'
import {LearnButton} from '../../styles/Styled-Components/Inputs/Buttons'
import {W1, W2, W3, W4, W5, W6} from '../../styles/Theme/Typography'
import {grey, black, white, aqua, purple} from '../../styles/Theme/Colors'
import {IMG, ATag} from '../../styles/Styled-Components/Inputs/Buttons'

function Home() {
  return (
    <main className="Home">
        <section className='home-about'>
          <W3 fontColor={purple[500]}>{"let it out, we don't judge...".toUpperCase()}</W3>
          <W3 fontColor={grey[50]}>{"welp".toUpperCase()}</W3>
          <W3 fontColor={purple[500]}>{"maybe just a little".toUpperCase()}</W3>
          <br></br>
          <LearnButton>learn more about welp</LearnButton>
        </section>
        <section className='home-reviews'>
        {/* <W3 fontColor={grey[50]} LetterSpacing='-1px' fontStyle='black' fontWeight='900' marginTop='90px;' textAlign='left' marginLeft='20px'>welps.</W3> */}
          {/* <PreviewReviews /> */}
          {/* <ATag to='/reviews'><IMG src={next}/></ATag> */}
        </section>
        <section className='home-wos'>
          <PreviewWOS />
          {/* <ATag to='/wos'><IMG src={next}/></ATag> */}
        </section>
    </main>
  );
}

export default Home;