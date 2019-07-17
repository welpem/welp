import React, {Component} from "react";
import "./Landing.css";
import PreviewWOS from "../WOS/PreviewWOS";
// import PreviewReviews form "../Reviews/PreviewReviews";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getUser, logout, login} from '../../Redux/reducer';
class Landing extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      email: "",
      password: ""
    };
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount(){
    console.log('mounted')
    this.props.getUser()
  }
  login(){
    let {email, password} = this.state;
    console.log(this.state.user)
    this.props.login(email, password)
  }
  logout(){
    this.props.logout();
    this.setState({user: {}, email: '', password: ''})
  }
  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
  }


  render() {

    let {email, password} = this.state;
    return (
      <div className="landing">
        Landing Component
        <h1 className="title"> Welp </h1>
        <p className="intro">
          Welp is a platform for hard-working people to review the customers
          that they love and hate. The worst of the worst can be placed on the
          Wall of Shame to warn others.
        </p>
        {this.props.state.user.email ? (
            <section className='logged-in'>
              <Link to='/'><button onClick={this.logout}>Log Out</button></Link>
            </section>
          ) : (
            <section className='logged-out'>
              <input name='email' placeholder='email' value={email} onChange={this.handleChange}/>
              <input name='password' placeholder='password' value={password} onChange={this.handleChange}/>
              <Link to='/home'><button onClick={this.login}>Log In</button></Link>
              <br></br>
              <Link to='/register'> register now</Link><a> or</a>
              <Link to='/home'> continue as a guest</Link>
            </section>
          )}
        {/* <PreviewReviews /> */}
        <PreviewWOS />
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return{
    state
  }
}
export default connect(mapStateToProps, {getUser, logout, login})(Landing)