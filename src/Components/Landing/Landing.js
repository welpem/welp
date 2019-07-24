import React, {Component} from "react";
import PreviewWOS from "../WOS/PreviewWOS";
import anime from 'animejs'
// import PreviewReviews from "../Reviews/PreviewReviews";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getUser, logout, login} from '../../Redux/reducer';

//Styled-Components//
import {grey, black, white, aqua, purple} from '../../styles/Theme/Colors'
<<<<<<< Updated upstream
import {LandingPage, LoginBox} from '../../styles/Styled-Components/Layout/Box'
import {Wrapper, wrap, LoginWrapper} from '../../styles/Styled-Components/Layout/Container'
import {W1, W2, W3, W4, W5, W6} from '../../styles/Theme/Typography'
import {Input, Label} from '../../styles/Styled-Components/Inputs/Text-Fields'
import { SubmitButton, ATag } from "../../styles/Styled-Components/Inputs/Buttons";
import {Path} from '../../styles/Animations/Animations'
=======
import {Page, LoginBox} from '../../styles/Styled-Components/Layout/Box'
import {Wrapper, LoginWrapper} from '../../styles/Styled-Components/Layout/Container'
import {Title} from '../../styles/Theme/Typography'
import {Input} from '../../styles/Styled-Components/Inputs/Text-Fields'
import { SubmitButton } from "../../styles/Styled-Components/Inputs/Buttons";
>>>>>>> Stashed changes






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
    this.emailFocus = this.emailFocus.bind(this);
    this.passwordFocus = this.passwordFocus.bind(this);
    this.submitFocus = this.submitFocus.bind(this);
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

emailFocus(e) {

    var current = null;
    if (current) current.pause();
    current = anime({
        targets: 'path',
        strokeDashoffset: {
            value: 0,
            duration: 700,
            easing: 'easeOutQuart'
        },
        strokeDasharray: {
            value: '250 1053',
            duration: 700,
            easing: 'easeOutQuart'
        }
    })
}
passwordFocus(e) {
    var current = null;
    if (current) current.pause();
    current = anime({
        targets: 'path',
        strokeDashoffset: {
            value: -331,
            duration: 700,
            easing: 'easeOutQuart'
        },
        strokeDasharray: {
            value: '250 1053',
            duration: 700,
            easing: 'easeOutQuart'
        }
    })
}
submitFocus(e) {
    var current = null;
    if (current) current.pause();
    current = anime({
        targets: 'path',
        strokeDashoffset: {
            value: -815,
            duration: 700,
            easing: 'easeOutQuart'
        },
        strokeDasharray: {
            value: '582 1053',
            duration: 700,
            easing: 'easeOutQuart'
        }
    })
}

  render() {

    let {email, password} = this.state;
    return (
<<<<<<< Updated upstream
    <Wrapper marginTop='80px' className='Wrapper'>

      <LandingPage className='LandingPage'>
        <W1>W</W1>
        <br></br>
        <W5 className="intro" fontColor={grey[50]} width='306px' marginBottom='20px'>
=======
    <Wrapper>
      <div className="landing">
        Landing Component
        <h1 className="title"> Welp </h1>
        <p className="intro" >
>>>>>>> Stashed changes
          Welp is a platform for hard-working people to review the customers
          that they love and hate. The worst of the worst can be placed on the
          Wall of Shame to warn others.
        </W5>
        {this.props.state.user.email ? (
            <section className='logged-in'>
              <Link id='userLink' to='/home'></Link> 
            </section>
          ) : (
<<<<<<< Updated upstream
            <LoginBox className='LoginBox' height='350px'>
              <svg width="286.05" height="125.177" viewBox="0 0 286.05 125.177">
  <path id="Path_293" data-name="Path 293" d="M0-66.05H250S266.5-69,266.5-34,250,0,250,0H0S-16.55,3.495-16.55,27.5,0,56,0,56H250s16.5-1.092,16.5-17.55-16.5-17-16.5-17H166s-17.5,1.05-17,17S163.45,56,163.45,56H254" transform="translate(18.05 67.677)" fill="none" stroke={aqua[500]} stroke-linecap="round" stroke-width="4"/>
</svg>

              <W1 fontSize ='36px' fontColor={white[500]} marginBottom='20px' LetterSpacing='-1px' Padding="20px">Login</W1>
            <section className='logged-out'>
              <LoginWrapper className='LoginWrapper' PaddingLeft = '25px' JustifyContent='center'>
              <Label for='email'>Email</Label>
              <Input data-cy="emailInput" id='email' name='email' value={email} onChange={this.handleChange} onFocus={this.emailFocus} InputMarginTop='5px' marginBottom='10px'/>
              <Label for='password' >Password</Label>
              <Input data-cy="passwordInput" name='password' type='password'value={password} onChange={this.handleChange} onFocus={this.passwordFocus}InputMarginTop='5px' id='password'/>

              <ATag className='ATag'to='/home' A="flex-end" MarginRight="0px" MarginLeft='51%' MarginTop="20px">
                
                <SubmitButton data-cy="submit" onClick={this.login} onFocus={this.submitFocus}Padding=''>SUBMIT</SubmitButton>
              
              </ATag>
=======
            <LoginBox>
              <Title fontSize ='36px' fontColor={white[500]} marginBottom='20px' LetterSpacing='-2px'>Login</Title>
            <section className='logged-out'>
              <LoginWrapper PaddingLeft = '20px'>
              <Input name='email' placeholder='email' value={email} onChange={this.handleChange} />
              <Input name='password' placeholder='password' value={password} onChange={this.handleChange} InputMarginTop='40px'/>
              <Link to='/home'>
                
                <SubmitButton onClick={this.login} marginLeft=''>SUBMIT</SubmitButton>
              
              </Link>
>>>>>>> Stashed changes
              </LoginWrapper>
              <br></br>
              
              <Link id='RegisterLink' to='/register'> 
              
              <W5 fontColor={white[500]}>don't have an account? -</W5> 
              <W5 fontColor={purple[500]} textDecor='underline'>SIGN UP</W5>
              
              </Link>
              <Link id='GuestLink' to='/home'>
              <W4 fontStyle='italic' fontColor={aqua[500]} LetterSpacing='0.2em'>
                CONTINUE AS A GUEST
                </W4>

              </Link>
            </section>
            </LoginBox>
          )}
        {/* <PreviewReviews /> */}
      </LandingPage>
      
        <PreviewWOS />
<<<<<<< Updated upstream
=======
      </div>
>>>>>>> Stashed changes
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