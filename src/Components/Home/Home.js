import React from 'react';
import {Link} from 'react-router-dom';

import './Home.css';
import Reviews from '../Reviews/Reviews';
import WOS from '../WOS/WOS';

function Home() {
  return (
    <main className="Home">
        <section className='home-about'>
          <h3>{"let it out, we don't judge... well, maybe just a little".toUpperCase()}</h3>
          <button>learn more about welp</button>
        </section>
        <section className='home-reviews'>
          <h2>Welp Em</h2>
          <Reviews />
          <Link to='/reviews'><button> > </button></Link>
        </section>
        <section className='home-wos'>
          <h2>Wall of Shame</h2>
          <WOS />
          <Link to='/wos'><button> > </button></Link>
        </section>
    </main>
  );
}

export default Home;