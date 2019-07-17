import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import {connect} from 'react-redux';

import {setName, getUser, login} from '../../Redux/reducer'

class Register extends Component{
    constructor(){
        super()
        this.state={
            user: {},
            first_name: '',
            last_name: '',
            password: '',
            email: '',
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
        let {first_name, last_name, image, password, business, email} = this.state;

        Axios.post('/auth/register', {first_name, last_name, image, password, business, email})
            .then(user=>{
                this.props.login(email, password)
                this.setState({
                    first_name: '',
                    last_name: '',
                    password: '',
                    email: '',
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
                    password: '',
                    email: '',
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
                console.log('register failed')
            })
    }

    render(){
        let {first_name, last_name, password, email, image, businesses_name, businesses_image, businesses_notes, businesses_address_line1, businesses_address_line2, businesses_city, businesses_state, businesses_zip, businesses_country} = this.state;
        // console.log(this.state.businesses)

        return(
            <main className='Register'>
                <section className='register-users'>
                    <h1>Register User</h1>
                    <section className='registration-inputs'>
                        <input name='first_name' placeholder='First Name' value={first_name} onChange={this.handleChange} />
                        <input name='last_name' placeholder='Last Name' value={last_name} onChange={this.handleChange} />
                        <input name='password' placeholder='Password' value={password} onChange={this.handleChange} />
                        <input name='email' placeholder='Email' value={email} onChange={this.handleChange} />
                        <input name='image' placeholder='Profile Pic' value={image} onChange={this.handleChange} />

                        {/* business dropdown */}
                        <select name='business' onChange={this.handleChange}>
                            <option>Select your Business</option>
                            {/* pulling businesses and mapping thru would allow options to be filled via the DB */}
                            {this.state.businesses.map((business, index)=>(
                                <option key={index} value={business.businesses_name}>{business.businesses_name}</option>
                            ))}
                        </select>
                    </section>
                    <Link to='/home'><button onClick={this.register}>Register User</button></Link>
                </section>
                <section className='register-business'>
                    <h1>Register Business</h1>
                    <input name='businesses_name' placeholder='Business Name' value={businesses_name} onChange={this.handleChange} />
                    <input name='businesses_image' placeholder='Business Logo' value={businesses_image} onChange={this.handleChange} />
                    <input name='businesses_notes' placeholder='Business Notes' value={businesses_notes} onChange={this.handleChange} />
                    <input name='businesses_address_line1' placeholder='Business Address Line 1' value={businesses_address_line1} onChange={this.handleChange} />
                    <input name='businesses_address_line2' placeholder='Business Address Line 2' value={businesses_address_line2} onChange={this.handleChange} />
                    {/* <input name='businesses_' placeholder='Business ' value={businesses_} onChange={this.handleChange} />
                    <input name='businesses_' placeholder='Business ' value={businesses_} onChange={this.handleChange} />
                    <input name='businesses_' placeholder='Business ' value={businesses_} onChange={this.handleChange} />
                    <input name='businesses_' placeholder='Business ' value={businesses_} onChange={this.handleChange} /> */}
                    <button >Register Business</button>
                </section>
            </main>
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