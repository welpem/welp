import React from 'react';
import {Link} from 'react-router-dom';

import './Home.css';
// import PreviewReviews from '../Reviews/PreviewReviews';
import PreviewWOS from '../WOS/PreviewWOS';

function Home() {
  return (
    <main className="Home">
        <section className='home-about'>
          <h3>{"let it out, we don't judge... well, maybe just a little".toUpperCase()}</h3>
          <button>learn more about welp</button>
        </section>
        <section className='home-reviews'>
          <h2>Welp Em</h2>
          {/* <PreviewReviews /> */}
          <Link to='/reviews'><button> > </button></Link>
        </section>
        <section className='home-wos'>
          <PreviewWOS />
          <Link to='/wos'><button> > </button></Link>
        </section>
    </main>
  );
}

export default Home;