import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Axios from 'axios';
import {connect} from 'react-redux';
import './Profile.css'

import {getUser, updateUser} from '../../Redux/reducer'

class Profile extends Component {
    constructor(){
        super()
        this.state ={
            user: {},
            businesses: [],
            first_name: '',
            last_name: '',
            new_password: '',
            new_email: '',
            image: '',
            business: '',
            first_name_open: false,
            last_name_open: false,
            email_open: false,
            password_open: false,
            image_open: false,
            business_open: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.switchTrue = this.switchTrue.bind(this)
        this.switchFalse = this.switchFalse.bind(this)
        this.makeChange = this.makeChange.bind(this)
    }

    componentDidMount(){
        Axios.get('/auth/businesses')
            .then(response=>{
                this.setState({businesses: response.data})
            })
            .catch(()=> console.log('error at componentDidMount'))
        this.props.getUser()
            .then(response=>{
                // console.log('David: ', response.value.data)
                this.setState({user: response.value.data})
            })
    }
    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    switchTrue(e){
        this.setState({[e.target.name]: true})
    }
    switchFalse(e){
        this.setState({[e.target.name]: false})
    }
    makeChange(){
        let {first_name, last_name, new_password, new_email, image, business} = this.state;
        let {user} = this.props.state

        this.props.updateUser(user, first_name, last_name, new_password, new_email, image, business)

        this.setState({
            first_name: '',
            last_name: '',
            new_password: '',
            new_email: '',
            image: '',
            business: '',
            first_name_open: false,
            last_name_open: false,
            email_open: false,
            password_open: false,
            image_open: false,
            business_open: false
        })
    }

    render(){
        let {first_name, last_name, new_password, new_email, image, first_name_open, last_name_open, email_open, password_open, image_open, business_open} = this.state;
        let {user} = this.props.state

        {if(user.email === null || user.email === undefined || user.email === ''){
            return <Redirect to='/' />
        }}
        return(
            <main>
                <h2>Welcome {user.first_name}</h2>
                <img src={(user.image)} alt='profile image' />
                <section className='user-settings'>
                    <h4>User settings</h4>
                    {/* {first_name_open ===true  ? <section><input name='first_name' placeholder={user.first_name} value={first_name} onChange={this.handleChange} />
                            <button onClick={this.switchFalse} name='first_name_open'>Cancel</button>
                            <button onClick={this.makeChange} name='first_name_open'>Update</button></section>
                            : <section><h4>First Name: {user.first_name}</h4>
                            <button onClick={this.switchTrue} name='first_name_open'>Update First Name</button></section>
                    }
                    {last_name_open ===true  ? <section><input name='last_name' placeholder={user.last_name} value={last_name} onChange={this.handleChange} />
                            <button onClick={this.switchFalse} name='last_name_open'>Cancel</button>
                            <button onClick={this.makeChange} name='last_name_open'>Update</button></section>
                            : <section><h4>{user.last_name}</h4>
                            <button onClick={this.switchTrue} name='last_name_open'>Update Last Name</button></section>
                    } */}
                    {email_open ===true  ? <section><input name='new_email' placeholder={user.email} value={new_email} onChange={this.handleChange} />
                            <button onClick={this.switchFalse} name='email_open'>Cancel</button>
                            <button onClick={this.makeChange} name='email_open'>Update</button></section>
                            : <section><h4>{user.email}</h4>
                            <button onClick={this.switchTrue} name='email_open'>Update Email</button></section>
                    }
                    {/* {password_open ===true ? <section><input name='new_password' placeholder='New Password' value={new_password} onChange={this.handleChange} />
                            <button onClick={this.switchFalse} name='password_open'>Cancel</button>
                            <button onClick={this.makeChange} name='password_open'>Update</button></section>
                            : <button onClick={this.switchTrue} name='password_open'>Update Password</button>
                    } */}
                    {image_open ===true  ? <section><input name='image' placeholder={user.image} value={image} onChange={this.handleChange} />
                            <button onClick={this.switchFalse} name='image_open'>Cancel</button>
                            <button onClick={this.makeChange} name='image_open'>Update</button></section>
                            : <button onClick={this.switchTrue} name='image_open'>Update Profile Picture</button>
                    }

                    {business_open ===true ? <section><select name='business' onChange={this.handleChange}>
                                <option>Select your Business</option>
                                {this.state.businesses.map((business, index)=>(
                                    <option key={index} value={business.businesses_name}>{business.businesses_name}</option>
                                ))}
                            </select>
                            <button onClick={this.switchFalse} name='business_open'>Cancel</button>
                            <button onClick={this.makeChange} name='business_open'>Update</button></section>
                            : <button onClick={this.switchTrue} name='business_open'>Update Business</button>}
                </section>
                {/* <section className='user-preferences'>
                    <h4>User Preferences</h4>
                    <p>idk what y'all wanted here...</p>
                    <button>Update Preferences</button>
                </section> */}
            </main>
        )
    }
}

const mapStateToProps = state =>{
    return{
        state
    }
}

export default connect(mapStateToProps, {getUser, updateUser})(Profile)