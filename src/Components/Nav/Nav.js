import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {getUser, logout, login} from '../../Redux/reducer';
import './Nav.css';

class Nav extends Component {
  constructor(){
    super()
    this.state={
      user: {},
      email: '',
      password: ''
    }
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    this.props.getUser()
    console.log(this.user)
  }
  login(){
    let {email, password} = this.state;
    console.log(this.state.user)
    this.props.login(email, password)
    // .then(user=>{
    //   this.setState({user: user.value.data});
    // })
    // .catch(()=>{
    //   this.setState({email: '', password: ''});
    // })
    this.props.getUser()
}
handleChange(e){
  this.setState({[e.target.name]: e.target.value})
}

  render(){
    let {email, password} = this.state;
    return (
      <main className="nav">
          <h1>Nav Component</h1>
          {this.state.user.email ? (
            <section className='logged-in'>
              <Link to='/'><button>Log Out</button></Link>
            </section>
          ) : (
            <section className='logged-out'>
              <input name='email' placeholder='email' value={email} onChange={this.handleChange}/>
              <input name='password' placeholder='password' value={password} onChange={this.handleChange}/>
              <Link to='/home'><button onClick={this.login}>Log In</button></Link>
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
export default connect(mapStateToProps, {getUser, logout, login})(Nav)