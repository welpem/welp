import React, {Component} from 'react';
import WOSCard from './WOSCard'
// import AddCardButton from './AddCardButton'
import axios from 'axios'
import './WOS.css';
import {connect} from 'react-redux';



class WOS extends Component{
    constructor(props){
        super(props)
        this.state = {
            wos:[],
            user:[]
        }

    this.getWOS = this.getWOS.bind(this)
    }


    componentDidMount() {
        this.getWOS()
    }

    getWOS() {
        axios
        .get('/api/wos')
        .then(response => this.setState({ wos: response.data }))
        .catch(error => console.log(`WOS-axiosGet: ${error}`))

    }
    

    render(){
        // console.log(this.props);

        let {wos} = this.state
        console.log(wos)
        let displayWOS = wos.map(welp_wos => {
        return(

            <div>
        <WOSCard 
        key={welp_wos.wos_id}
        wos_id={welp_wos.wos_id}
        wos_title={welp_wos.wos_title}
        wos_img={welp_wos.wos_img}
        wos_description={welp_wos.wos_description}
        welp_wos={welp_wos}
        />
        
        </div>
        )
        
        })
    
        return(
            <main>
        
              <div >


                Wall of Shame
                {wos ? displayWOS : 'No offenders yet'}


                


                {/* <AddCardButton getWOS={this.getWOS}/> */}
              </div>
                
            </main>
        )
    }
}

const mapStateToProps = state => state;

export default connect(
    mapStateToProps
    // ,
    // {getUser}
) (WOS);