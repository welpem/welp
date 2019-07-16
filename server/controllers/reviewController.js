//see reviews
const getReviews = async (req, res) => {
    const reply = await req.app
      .get("db")
      .get_reviews()
      .catch(error => {
        console.log(error);
        res.status(500).json("Server Error in getReviews on reviewController");
      });
    res.status(200).json(reply);
  };




  //delete review
  const deleteReview = (req,res) => {
    const db = req.app.get('db'),
        { reviews_id } = req.params;
    db.delete_review( reviews_id )
        .then(() => res.sendStatus(200))
        .catch(error => res.status(500).send(`delete_review(reviewController): ${error}`))
  }




//create review
const createReview = (req,res) => {
    const db = req.app.get('db'),
                        // console.log(req.body)
                        // console.log(req.sessions.user)
        { title, img, description, score, } = req.body;
    db.create_review( 
         title, img, description, score, 
        // req.sessions.user.user_id
        1
        )
        .then(response => res.status(200).send(response))
        .catch(error => res.status(500).send(`create_review (reviewController): ${error}`))
  }



//update Review
const updateReview = (req,res) => {
    console.log(req.body)
    const db = req.app.get('db'),
        { 
        reviews_id, 
        title, 
        img, 
        description, 
        score, 
        } = req.body;
  
    db.update_review( 
        reviews_id, 
        title, 
        img, 
        description, 
        +score, 
        )
        .then(response => res.status(200).json(response))
        .catch(error => {
          console.log(error)
          res.status(500).send(`update_review (reviewController): ${error}`)
        })
  }




  module.exports = {
    getReviews, deleteReview, createReview, updateReview
  };