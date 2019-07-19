//see WOS
const getWOS = async (req, res) => {
    const db =  req.app.get("db");
    // console.log(req.query.business)
    if (req.query.business){
      // console.log('business')
      const searchBusinesses = await db.search_wos_business(req.query.business);
      return res.status(200).send(searchBusinesses);
    } else if (req.query.user){
      // console.log('user')
      const searchUsers = await db.search_wos_users(req.query.user);
      return res.status(200).send(searchUsers);
    } else {
      // console.log('no query')
      const allWOS = await db.get_wos();
      return res.status(200).send(allWOS)
    }
  };

  //delete WOS
const deleteWOS = (req,res) => {
    const db = req.app.get('db'),
        { wos_id } = req.params;
    db.delete_wos( wos_id )
        .then(() => res.sendStatus(200))
        .catch(error => res.status(500).send(`delete_WOS(WOSController): ${error}`))
  }

//create WOS
const createWOS = (req,res) => {
    const db = req.app.get('db'),
    { 
      title, 
      img, 
      description,
      uid,
      bid,
    } = req.body;
    
    db.create_wos( 
      title, 
      img, 
      description, 
      //User ID
      // req.sessions.user.users_id
      uid,
      //Business ID
      // req.sessions.user.businesses_id
      bid
      )
      .then(response => res.status(200).send(response))
      // console.log(req.body)
      // console.log(req.sessions.user)
        .catch(error => res.status(500).send(`create_wos (WOSController): ${error}`))
  }


//update WOS
const updateWOS = (req,res) => {
    console.log(req.body)
    const db = req.app.get('db'),
        { 
        wos_id, 
        title, 
        img, 
        description
        } = req.body;
  
    db.update_wos( 
        wos_id, 
        title, 
        img, 
        description
        )
        .then(response => res.status(200).json(response))
        .catch(error => res.status(500).send(`update_wos (WOSController): ${error}`))
  }


  module.exports = {
    getWOS, deleteWOS, createWOS, updateWOS
  };