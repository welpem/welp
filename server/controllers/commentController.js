//see Comments
const getComments = async (req, res) => {
    const reply = await req.app
      .get("db")
      .get_comments()
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
                        // console.log(req.body)
                        // console.log(req.sessions.user)
        { description } = req.body;
    db.create_comment( 
         description,
        // req.sessions.user.user_id,
        1,
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
        description
        } = req.body;
  
    db.update_comment( 
        description,
        reviews_id, 
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