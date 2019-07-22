import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import {connect} from 'react-redux';

import {setName, getUser, login} from '../../Redux/reducer'

//styled components//
import {LoginBox, LandingPage} from '../../styles/Styled-Components/Layout/Box'
import {LoginWrapper} from '../../styles/Styled-Components/Layout/Container'
import {W1} from '../../styles/Theme/Typography'
import {Input, Label, Select} from '../../styles/Styled-Components/Inputs/Text-Fields'
import {SubmitButton, ATag} from '../../styles/Styled-Components/Inputs/Buttons'
import {white, grey, black, aqua, purple} from '../../styles/Theme/Colors'

class Register extends Component{
    constructor(){
        super()
        this.state={
            user: {},
            first_name: '',
            last_name: '',
            new_password: '',
            new_email: '',
            image: '',
            business: '',
            businesses_name: '',
            businesses_image: '',
            businesses_notes: '',
            businesses_address_line1: '',
            businesses_address_line2: '',
            businesses_city: '',
            businesses_state: '',
            businesses_zip: '',
            businesses_country: '',
            businesses: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.register = this.register.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    componentDidMount(){
        // console.log('Register')
        Axios.get('/auth/businesses')
            .then(response=>{
                // console.log(response)
                this.setState({businesses: response.data})
            })
            .catch(()=> console.log('error at componentDidMount'))
        this.props.getUser()
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    updateUser(user){
        this.setState({
            user,
        })
    }
    register(){
        // console.log(this.state)
        let {first_name, last_name, image, new_password, business, new_email, businesses_name, businesses_image, businesses_notes, businesses_address_line1, businesses_address_line2, businesses_city, businesses_state, businesses_zip, businesses_country} = this.state;

        Axios.post('/auth/register', {first_name, last_name, image, new_password, business, new_email, businesses_name, businesses_image, businesses_notes, businesses_address_line1, businesses_address_line2, businesses_city, businesses_state, businesses_zip, businesses_country})
            .then(user=>{
                // console.log('David: ', user.data === businesses_name)
                if(user.data === businesses_name){
                    // console.log('David: business hit')
                    this.setState({businesses: [...this.state.businesses, {businesses_name: user.data}]})
                    // console.log('David: ', this.state)
                }
                if(user.data !== businesses_name){
                    // console.log('David: user hit')
                    this.props.login(new_email, new_password)
                }
                this.setState({
                    first_name: '',
                    last_name: '',
                    new_password: '',
                    new_email: '',
                    image: '',
                    business: '',
                    businesses_name: '',
                    businesses_image: '',
                    businesses_notes: '',
                    businesses_address_line1: '',
                    businesses_address_line2: '',
                    businesses_city: '',
                    businesses_state: '',
                    businesses_zip: '',
                    businesses_country: ''
                });
                this.updateUser(user.data)
            })
            .catch(()=>{
                this.setState({
                    first_name: '',
                    last_name: '',
                    new_password: '',
                    new_email: '',
                    image: '',
                    business: '',
                    businesses_name: '',
                    businesses_image: '',
                    businesses_notes: '',
                    businesses_address_line1: '',
                    businesses_address_line2: '',
                    businesses_city: '',
                    businesses_state: '',
                    businesses_zip: '',
                    businesses_country: ''
                });
                console.log('David: register failed')
            })
    }

    render(){
        let {first_name, last_name, new_password, new_email, image, businesses_name, businesses_image, businesses_notes, businesses_address_line1, businesses_address_line2, businesses_city, businesses_state, businesses_zip, businesses_country} = this.state;
        // console.log(this.state.businesses)

        return(
            <LandingPage className='Register'>
                <LoginBox className='register-users' height='525px' marginTop='20px;'>
                    <W1 fontColor={white[500]} LetterSpacing='-1px'>Register</W1>
                    <LoginWrapper PaddingLeft='25px' JustifyContent='center'className='registration-inputs'>
                        <Label>First Name</Label>
                        <Input name='first_name'  value={first_name} onChange={this.handleChange} />
                        <Label>Last Name</Label>
                        <Input name='last_name'  value={last_name} onChange={this.handleChange} />
                        <Label>Password</Label>
                        <Input name='new_password'  value={new_password} onChange={this.handleChange} />
                        <Label>Email</Label>
                        <Input name='new_email'  value={new_email} onChange={this.handleChange} />
                        <Label>Profile Pic</Label>
                        <Input name='image'  value={image} onChange={this.handleChange} />
                        
                        {/* business dropdown */}
                        <Select name='business' onChange={this.handleChange}>
                            <option>Select your Business</option>
                            {/* pulling businesses and mapping thru would allow options to be filled via the DB */}
                            {this.state.businesses.map((business, index)=>(
                                <option key={index} value={business.businesses_name}>{business.businesses_name}</option>
                            ))}
                        </Select>
                    <ATag to='/home' MarginLeft='42%' MarginTop="30px">
                        <SubmitButton name='register_user' onClick={this.register}>SUBMIT
                        </SubmitButton></ATag>
                    </LoginWrapper>
                </LoginBox>
                <LoginBox className='register-business' marginTop='50px;'>
                    <W1>Business</W1>
                    <Input name='businesses_name' placeholder='Business Name' value={businesses_name} onChange={this.handleChange} />
                    <Input name='businesses_image' placeholder='Business Logo' value={businesses_image} onChange={this.handleChange} />
                    <Input name='businesses_notes' placeholder='Business Notes' value={businesses_notes} onChange={this.handleChange} />
                    <Input name='businesses_address_line1' placeholder='Business Address Line 1' value={businesses_address_line1} onChange={this.handleChange} />
                    <Input name='businesses_address_line2' placeholder='Business Address Line 2' value={businesses_address_line2} onChange={this.handleChange} />
                    <Input name='businesses_city' placeholder='Business City' value={businesses_city} onChange={this.handleChange} />
                    <Input name='businesses_state' placeholder='Business State' value={businesses_state} onChange={this.handleChange} />
                    <Input name='businesses_zip' placeholder='Business Zip' value={businesses_zip} onChange={this.handleChange} />
                    <Input name='businesses_country' placeholder='Business Country' value={businesses_country} onChange={this.handleChange} />
                    <SubmitButton name='register_business' onClick={this.register}>Register Business</SubmitButton>
                </LoginBox>
            </LandingPage>
        )
    }
}

const mapStateToProps = state =>{
    return{
        state
    }
}

export default connect(mapStateToProps, 
    {setName, getUser, login}
    )(Register)