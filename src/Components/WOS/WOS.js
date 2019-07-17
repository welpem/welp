import React, { Component } from "react";
import WOSCard from "./WOSCard";
import AddWOS from "./AddWOS";
import axios from "axios";
import "./WOS.css";
import { connect } from "react-redux";

class WOS extends Component {
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
    let displayWOS = wos.map(welp_wos => {
      return (
        <div>
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
        </div>
      );
    });

    return (
      <main>
        <div>
          Wall of Shame
          {this.props.user.email ? (<AddWOS getWOS={this.getWOS} />)  : null }
          
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
