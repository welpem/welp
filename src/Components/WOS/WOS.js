import React, { Component } from "react";
import WOSCard from "./WOSCard";
import AddWOS from "./AddWOS";
import axios from "axios";
import "./WOS.css";
import { connect } from "react-redux";


import {W1, W2, W3, W4, W5, W6} from '../../styles/Theme/Typography'
import {white, black, grey, aqua, purple, red} from '../../styles/Theme/Colors'
import {Input} from '../../styles/Styled-Components/Inputs/Text-Fields'
import {SubmitButton} from '../../styles/Styled-Components/Inputs/Buttons'
import {WOSWrapper} from '../../styles/Styled-Components/Layout/Container'
class WOS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wos: [],
      user: [],
      searchBusiness: '',
      searchUser: ''
    };

    this.getWOS = this.getWOS.bind(this);
    this.deleteWOS = this.deleteWOS.bind(this);
  }

  componentDidMount() {
    this.getWOS();
    this.searchBusinessClick();
  }

  getWOS() {
    axios
      .get("/api/wos")
      .then(response => this.setState({ wos: response.data }))
      .catch(error => console.log(`WOS-axiosGet: ${error}`));
  }

  deleteWOS(wos_id) {
    // console.log(this.state.wos);
    axios
      .delete(`/api/wos/${wos_id}`)
      .then(() => this.componentDidMount())
      .catch(error => console.log(`WOS-axiosDelete: ${error}`));
  }

// Input change handler
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
      //e accesses info about the event.
      // Target targets the element that triggered the event(the same input field or button).
      // Placeholder accesses the placeholder name from the element.
      // toLowerCase() invoked matches the placeholder to the lowercase variables.
    });
    // console.log(e.target.value)
  };

  // Search by business
  searchBusinessClick = e => {
    // console.log(this.state.searchBusiness)
    axios.get(`/api/wos?business=${this.state.searchBusiness}`)
    // .then(res => console.log(res))
        .then(res => this.setState({wos: res.data }))
  }

  // Search by user
  searchUserClick = e => {
    axios.get(`/api/wos?user=${this.state.searchUser}`)
        .then(res => this.setState({wos: res.data }))
  }

  render() {
    let { wos } = this.state;

    //Map function
    let displayWOS = wos.map(welp_wos => {
      return (
        <WOSWrapper>
          <WOSCard
            key={welp_wos.wos_id}
            wos_id={welp_wos.wos_id}
            wos_title={welp_wos.wos_title}
            wos_img={welp_wos.wos_img}
            wos_description={welp_wos.wos_description}
            users_first_name={welp_wos.users_first_name}
            businesses_name={welp_wos.businesses_name}
            welp_wos={welp_wos}
            deleteWOSFunction={this.deleteWOS}
            editWOSFunction={this.editWOS}
            getWOS={this.getWOS}
            user={this.props.user}
          />
        </WOSWrapper>
      );
    });

    return (
      <main>
        <div className='wos-component'>
          <W2 fontColor={grey[50]} LetterSpacing='-2px'>WALL OF SHAME.</W2>
          <Input style={{margin: '.25em'}} required placeholder="Search by business name" name="searchBusiness" onChange={this.handleChange} />
          <SubmitButton classname="button" onClick={this.searchBusinessClick}> Search </SubmitButton> 
          <br></br>
          <Input style={{margin: '.25em'}} required placeholder="Search by user first name" name="searchUser"  onChange={this.handleChange} />
          <SubmitButton classname="button" onClick={
            this.searchUserClick
          }> Search </SubmitButton>
          {this.props.user.email ? (<AddWOS getWOS={this.getWOS} user={this.props.user} />)  : null }
          
          {wos ? displayWOS : "No offenders yet"}
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps
  // ,
  // {getUser}
)(WOS);
