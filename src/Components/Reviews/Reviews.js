import React, {Component} from 'react';
import ReviewCard from './ReviewCard'
import AddCardButton from './AddCardButton'
import axios from 'axios'
import './Shop.css';
import {connect} from 'react-redux';



class Reviews extends Component{
    constructor(props){
        super(props)
        this.state = {
            reviews:[],
            user:[]
        }

    this.getProducts = this.getProducts.bind(this)
    }


    componentDidMount() {
        this.getReviews()
    }

    getReviews() {
        axios
        .get('/api/reviews')
        .then(response => this.setState({ reviews: response.data }))
        .catch(error => console.log(`Dashboard-axiosGet: ${error}`))

    }

    render(){
        // console.log(this.props);

     //slow_shop is a product that of products   
        let {reviews } = this.state
        console.log(reviews)
        let displayReviews = reviews.map(welp_reviews => {
        return(

            <div>
        <ReviewCard 
        key={welp_reviews.reviews_id}
        reviews_id={reviews.reviews_id}
        reviews_title={reviews.reviews_title}
        reviews_img={reviews.reviews_img}
        reviews_score={reviews.reviews_score}
        reviews_description={reviews.reviews_description}
        welp_reviews={welp_reviews}
        />
        
        </div>
        )
        
        })
    
        return(
            <main>
        
              <div >
                {reviews ? displayReviews : 'No products yet'}



                {/* <AddCardButton getReviews={this.getReviews}/> */}
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
) (Reviews);