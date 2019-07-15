import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {getUser, logout} from '../../Redux/reducer';
import './Nav.css';

class Nav extends Component {
  constructor(){
    super()
    this.state={
      user: {}
    }
  }

  componentDidMount(){
    this.props.getUser()
  }

  render(){
    return (
      <main className="nav">
          <h1>Nav Component</h1>
          {this.state.user.email ? (
            <section className='logged-in'>
              <Link to='/'><button>Log Out</button></Link>
            </section>
          ) : (
            <section className='logged-out'>
              <Link to='/register'><button>Log In</button></Link>
            </section>
          )}
      </main>
    );
  }
}

const mapStateToProps = state =>{
  return{
    state
  }
}
export default connect(mapStateToProps, {getUser, logout})(Nav)