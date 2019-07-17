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
            <main className='Register'>
                <section className='register-users'>
                    <h1>Register User</h1>
                    <section className='registration-inputs'>
                        <input name='first_name' placeholder='First Name' value={first_name} onChange={this.handleChange} />
                        <input name='last_name' placeholder='Last Name' value={last_name} onChange={this.handleChange} />
                        <input name='new_password' placeholder='Password' value={new_password} onChange={this.handleChange} />
                        <input name='new_email' placeholder='Email' value={new_email} onChange={this.handleChange} />
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
                    <Link to='/home'><button name='register_user' onClick={this.register}>Register User</button></Link>
                </section>
                <section className='register-business'>
                    <h1>Register Business</h1>
                    <input name='businesses_name' placeholder='Business Name' value={businesses_name} onChange={this.handleChange} />
                    <input name='businesses_image' placeholder='Business Logo' value={businesses_image} onChange={this.handleChange} />
                    <input name='businesses_notes' placeholder='Business Notes' value={businesses_notes} onChange={this.handleChange} />
                    <input name='businesses_address_line1' placeholder='Business Address Line 1' value={businesses_address_line1} onChange={this.handleChange} />
                    <input name='businesses_address_line2' placeholder='Business Address Line 2' value={businesses_address_line2} onChange={this.handleChange} />
                    <input name='businesses_city' placeholder='Business City' value={businesses_city} onChange={this.handleChange} />
                    <input name='businesses_state' placeholder='Business State' value={businesses_state} onChange={this.handleChange} />
                    <input name='businesses_zip' placeholder='Business Zip' value={businesses_zip} onChange={this.handleChange} />
                    <input name='businesses_country' placeholder='Business Country' value={businesses_country} onChange={this.handleChange} />
                    <button name='register_business' onClick={this.register}>Register Business</button>
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