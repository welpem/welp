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
        description={reviews.reviews_description}
        />
        
        </div>
        )
        
        })
    
        return(
            <main>
            



            <div className='dashboard'>
                {reviews ? displayReviews : 'No products yet'}
                <AddCardButton getProducts={this.getProducts}/>
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