import React, {Component} from "react";
import PreviewWOS from "../WOS/PreviewWOS";
// import PreviewReviews form "../Reviews/PreviewReviews";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getUser, logout, login} from '../../Redux/reducer';

//Styled-Components//
import {grey, black, white, aqua, purple} from '../../styles/Theme/Colors'
import {Page, LoginBox} from '../../styles/Styled-Components/Layout/Box'
import {Wrapper, LoginWrapper} from '../../styles/Styled-Components/Layout/Container'
import {Title} from '../../styles/Theme/Typography'
import {Input} from '../../styles/Styled-Components/Inputs/Text-Fields'
import { SubmitButton } from "../../styles/Styled-Components/Inputs/Buttons";






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
    <Wrapper>
      <div className="landing">
        Landing Component
        <h1 className="title"> Welp </h1>
        <p className="intro" >
          Welp is a platform for hard-working people to review the customers
          that they love and hate. The worst of the worst can be placed on the
          Wall of Shame to warn others.
        </p>
        {this.props.state.user.email ? (
            <section className='logged-in'>
              <Link to='/'><button onClick={this.logout}>Log Out</button></Link>
            </section>
          ) : (
            <LoginBox>
              <Title fontSize ='36px' fontColor={white[500]} marginBottom='20px' LetterSpacing='-2px'>Login</Title>
            <section className='logged-out'>
              <LoginWrapper PaddingLeft = '20px'>
              <Input name='email' placeholder='email' value={email} onChange={this.handleChange} />
              <Input name='password' placeholder='password' value={password} onChange={this.handleChange} InputMarginTop='40px'/>
              <Link to='/home'>
                
                <SubmitButton onClick={this.login} marginLeft=''>SUBMIT</SubmitButton>
              
              </Link>
              </LoginWrapper>
              <br></br>
              <Link to='/register'> register now</Link><a> or</a>
              <Link to='/home'> continue as a guest</Link>
            </section>
            </LoginBox>
          )}
        {/* <PreviewReviews /> */}
        <PreviewWOS />
      </div>
      </Wrapper>
    
    );
  }
}

const mapStateToProps = state =>{
  return{
    state
  }
}
export default connect(mapStateToProps, {getUser, logout, login})(Landing)