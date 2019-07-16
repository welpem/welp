import React, {Component} from 'react';
import ReviewCard from './ReviewCard'
import AddReview from './AddReview'
// import AddCardButton from './AddCardButton'

import axios from 'axios'
import './Reviews.css';
import {connect} from 'react-redux';



class Reviews extends Component{
    constructor(props){
        super(props)
        this.state = {
            reviews:[],
            user:[]
        }

    this.getReviews = this.getReviews.bind(this)
    this.deleteReview = this.deleteReview.bind(this)
    }


    componentDidMount() {
        this.getReviews()
    }

    deleteReview(reviews_id) {

        axios
            .delete(`/api/reviews/${reviews_id}`)
            .then(() => this.componentDidMount())
            .catch(error => console.log(`Dashboard-axiosDelete: ${error}`))
    }

    getReviews() {
        axios
        .get('/api/reviews')
        .then(response => this.setState({ reviews: response.data }))
        .catch(error => console.log(`Dashboard-axiosGet: ${error}`))

    }

    render(){
        // console.log(this.props);

  
        let {reviews } = this.state
        console.log(reviews)
        let displayReviews = reviews.map(welp_reviews => {
          return(
          <div>
            <ReviewCard 
            welp_reviews={welp_reviews}
            deleteReviewFn={this.deleteReview}
            editReviewFn={this.editReview}
            getReviews={this.getReviews} 
            />
          </div>
          )
        })
    
        return(
            <main>
              <div >

              <AddReview
              getReviews={this.getReviews} 
        
              />


            {reviews ? displayReviews : 'No Reviews yet'}


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