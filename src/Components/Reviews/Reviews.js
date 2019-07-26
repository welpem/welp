import React, {Component} from 'react';
import ReviewCard from './ReviewCard'
import AddReview from './AddReview'
// import AddCardButton from './AddCardButton'
import Comments from './Comments'
import axios from 'axios'
import './Reviews.css';
import {connect} from 'react-redux';

import {W1, W2, W3, W4, W5, W6} from '../../styles/Theme/Typography'
import {white, black, grey, aqua, purple, red} from '../../styles/Theme/Colors'
// import {Card} from '../../styles/Styled-Components/Surfaces'
import {Wrapper} from '../../styles/Styled-Components/Layout/Container'
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
      
        // console.log(reviews)
        let displayReviews = reviews.map(welp_reviews => {
          return(
          <Wrapper alignItems='center'>
            <ReviewCard 
            key = {welp_reviews.reviews_id}
            welp_reviews={welp_reviews}
            deleteReviewFn={this.deleteReview}
            editReviewFn={this.editReview}
            getReviews={this.getReviews} 
            user={this.props.user}
            />
            <Comments
            key={welp_reviews.reviews_id}
            welp_reviews={welp_reviews}
            user={this.props.user}
            />
        
          </Wrapper>
          )
        })
    
        return(
            <main>
              <Wrapper >


        { this.props.user.id 
        ?
              <AddReview
              getReviews={this.getReviews} 
              user={this.props.user}
              Modal={this.props.Modal}
              />
        :
        null
        }      



            {reviews ? displayReviews : 'No Reviews yet'}


              </Wrapper>
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