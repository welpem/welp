import React, {Component} from 'react';
import CommentsCard from './CommentsCard'
import AddComment from './AddComment'
import axios from 'axios'
import {connect} from 'react-redux';




class Comments extends Component{
    constructor(props){
        super(props)
        this.state = {
            reviews:[],
            comments: [],
            user:[]
        }
        this.getComments = this.getComments.bind(this)
        this.deleteComment = this.deleteComment.bind(this)
    }



    componentDidMount() {
        this.getComments()
    }

    deleteComment(comments_id) {
        axios
            .delete(`/api/comments/${comments_id}`)
            .then(() => this.componentDidMount())
            .catch(error => console.log(`DELETE Comments (comment comp) error:: ${error}`))
    }

    getComments() {
        axios
        .get(`/api/comments/${this.props.welp_reviews.reviews_id}`)
        .then(response => this.setState({ comments: response.data }))
        .catch(error => console.log(`get Comments (comment comp) error: ${error}`))

    }



    render(){

        let {comments } = this.state
        // console.log(comments)
        console.log(this.state)
        console.log(this.props)
        // console.log(this.props.welp_reviews)
        let displayComments = comments.map(welp_comments => {
            // console.log(welp_comments)
          return(


          <div>
            <CommentsCard 
            welp_comments={welp_comments}
            deleteCommentFn={this.deleteComment}
            editCommentFn={this.editComment}
            getComments={this.getComments} 
            welp_reviews={this.props.welp_reviews}
            user={this.props.user}
            />
          </div>


          )
        })
    
        return(
            <main>
              <div>

 

            {
            displayComments.length 
            ? 
            displayComments 
            : 
            <div className = 'comments-big-container'>
              <div className = 'comments-sub-container'>
                <p>'no comments yet'</p>
              </div>
            </div>
            }
            
            <AddComment
              getComments={this.getComments} 
              welp_reviews={this.props.welp_reviews}
              comments={this.state.comments}
              user={this.props.user}
              />

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
) (Comments);