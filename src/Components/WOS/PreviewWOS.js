import React, { Component } from "react";
import WOSCard from "./WOSCard";
import AddWOS from "./AddWOS";
import axios from "axios";
import "./WOS.css";
import { connect } from "react-redux";


import {Wrapper, WOSWrapper} from '../../styles/Styled-Components/Layout/Container'
// import {WOSCard} from '../../styles/Styled-Components/Surfaces/Cards'
import {W1, W2, W3, W4, W5, W6} from '../../styles/Theme/Typography'
import {white, black, grey, aqua, purple, red} from '../../styles/Theme/Colors'

class PreviewWOS extends Component {
    constructor(props) {
      super(props);
      this.state = {
        wos: [],
        user: []
      };
  
      this.getWOS = this.getWOS.bind(this);
      this.deleteWOS = this.deleteWOS.bind(this);
    }
  
    componentDidMount() {
      this.getWOS();
    }
  
    getWOS() {
      axios
        .get("/api/wos")
        .then(response => this.setState({ wos: response.data }))
        .catch(error => console.log(`WOS-axiosGet: ${error}`));
    }
  
    deleteWOS(wos_id) {
      console.log(this.state.wos);
      axios
        .delete(`/api/wos/${wos_id}`)
        .then(() => this.componentDidMount())
        .catch(error => console.log(`WOS-axiosDelete: ${error}`));
    }
  
    render() {
      let { wos } = this.state;
      let displayWOS = wos.slice(0,4).map(welp_wos => {
        return (
          <Wrapper>
            <WOSCard  
              key={welp_wos.wos_id}
              wos_id={welp_wos.wos_id}
              wos_title={welp_wos.wos_title}
              wos_img={welp_wos.wos_img}
              wos_description={welp_wos.wos_description}
              welp_wos={welp_wos}
              deleteWOSFunction={this.deleteWOS}
              editWOSFunction={this.editWOS}
              getWOS={this.getWOS}
              user={this.props.user}
            />
          </Wrapper>
        );
      });
  
      return (
        
          <div>
            <h1>Wall of Shame</h1>
            {this.props.user.email ? (<AddWOS getWOS={this.getWOS} user={this.props.user} />)  : null }
            
            {wos ? displayWOS : "No offenders yet"}
          </div>
        
      );
    }
  }
  
  const mapStateToProps = state => state;
  
  export default connect(
    mapStateToProps
  )(PreviewWOS);
  