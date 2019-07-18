//see Comments
const getComments = async (req, res) => {
    const reply = await req.app
      .get("db")
      .get_comments(+req.params.review_id)
      .catch(error => {
        console.log(error);
        res.status(500).json("Server Error in getComments on commentController");
      });
    res.status(200).json(reply);
  };




  //delete Comment
  const deleteComment = (req,res) => {
    const db = req.app.get('db'),
        { comments_id } = req.params;
    db.delete_comment( comments_id )
        .then(() => res.sendStatus(200))
        .catch(error => res.status(500).send(`delete_comment(commentController): ${error}`))
  }




//create Comment
const createComment = (req,res) => {
    const db = req.app.get('db'),
    { description, id, reviews_id, } = req.body;
    // console.log(req.body),
    // console.log(req.sessions),
    // console.log(req),
    // console.log(req.params),
    console.log(req.body.welp_reviews)
    db.create_comment( 
        description,
        id,
        reviews_id
        )
        .then(response => res.status(200).send(response))
        .catch(error => res.status(500).send(`create_comment (commentController): ${error}`))
  }



//update Comment
const updateComment = (req,res) => {
    console.log(req.body)
    const db = req.app.get('db'),
        { 
        comments_id, userEdit
        } = req.body;
  
    db.update_comment( 
        +comments_id, 
        userEdit,
        )
        .then(response => res.status(200).json(response))
        .catch(error => {
          console.log(error)
          res.status(500).send(`update_comment (commentController): ${error}`)
        })
  }




  module.exports = {
    getComments, deleteComment, createComment, updateComment
  };