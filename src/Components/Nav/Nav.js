import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {getUser, logout, login} from '../../Redux/reducer';
import './Nav.css';
import Axios from 'axios';
import account from '../../styles/Display/Icons/account.svg'
import about from '../../styles/Display/Icons/about.svg'
import prisoner from '../../styles/Display/Icons/prisoner.svg'
import review from '../../styles/Display/Icons/review.svg'
import {A, MenuToggle } from '../../styles/Styled-Components/Navigation/Menu';
import {Dropdown, DropdownContent} from '../../styles/Styled-Components/Navigation/Drawers'
import {W2,W5} from '../../styles/Theme/Typography'
import {grey} from '../../styles/Theme/Colors'

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

  
  
  render(){
    console.log(this.props.state.user)
    let {email, password} = this.state;

    return (

      <nav role='navigation'>
        <MenuToggle id='menuToggle' >
          <input type='checkbox' />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <Dropdown className='dropdown'>
              <A href='javascript:void(0)' className='dropbtn'>account.</A><img src={account}/>
              <DropdownContent className='dropdown-content'>
                <a href='#profile'>Preferences</a>
                  {this.props.state.user.email ? (
                    <section className='logged-in'>
                      <a href='#home' name='logout' onClick={this.logout}>Logout.</a>
                    </section>
                  ) : (
                    <a href='#'>Login</a>
                  )}
              </DropdownContent>
            </Dropdown>
            <li><A href='#home'>home.</A></li>
            <li><A href='#reviews'>welps.</A><img src={review}/></li>
            <li><A href='#WOS'>wall of shame.</A><img src={prisoner} /></li>
            <li><A href='#about'>about.</A><img src={about}/></li>
          </ul>
        </MenuToggle>
      </nav>
          
        
      
    );
  }
}

const mapStateToProps = state =>{
  return{
    state
  }
}
export default connect(mapStateToProps, {getUser, logout, login})(Nav)