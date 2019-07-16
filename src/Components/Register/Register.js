import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import {connect} from 'react-redux';

import {setName, getUser} from '../../Redux/reducer'

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
            businesses: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.register = this.register.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    // componentDidMount(){
    //     Axios.get('/api/businesses')
    //         .then(response=>{
    //             this.setState({businesses: response.data})
    //         })
    //         .catch(()=> console.log('error at componentDidMount'))
    //     this.props.getUser()
    // }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    updateUser(user){
        this.setState({
            user,
        })
    }
    register(){
        console.log(this.state)
        let {first_name, last_name, image, password, business, email} = this.state;

        Axios.post('/auth/register', {first_name, last_name, image, password, business, email})
            .then(user=>{
                // this.props.setName([user.data.first_name, user.data.last_name]);
                this.setState({
                    first_name: '',
                    last_name: '',
                    password: '',
                    email: '',
                    image: '',
                    business: ''
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
                    business: ''
                });
                console.log('register failed')
            })
    }

    render(){
        let {first_name, last_name, password, email, image} = this.state;

        return(
            <main className='Register'>
                <h1>Register</h1>
                <section className='registration-inputs'>
                    <input name='first_name' placeholder='First Name' value={first_name} onChange={this.handleChange} />
                    <input name='last_name' placeholder='Last Name' value={last_name} onChange={this.handleChange} />
                    <input name='password' placeholder='Password' value={password} onChange={this.handleChange} />
                    <input name='email' placeholder='Email' value={email} onChange={this.handleChange} />
                    <input name='image' placeholder='Profile Pic' value={image} onChange={this.handleChange} />
                    {/* business dropdown */}
                    <select name='business' onChange={this.handleChange}>
                        {/* pulling businesses and mapping thru would allow options to be filled via the DB */}
                        <option>Select your Business</option>
                        <option value='WcDonalds'>WcDonalds</option>
                        <option value='Fries King'>Fries King</option>
                    </select>
                </section>
                <Link to='/home'><button onClick={this.register}>Register</button></Link>
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
    {setName, getUser}
    )(Register)