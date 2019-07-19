require('dotenv').config();
const express = require('express');
const massive= require('massive');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const app = express();
let { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;
const { getReviews, deleteReview, createReview, updateReview } = require('./controllers/reviewController')
const { getComments, deleteComment, createComment, updateComment } = require('./controllers/commentController')
const { getWOS, deleteWOS, createWOS, updateWOS } = require('./controllers/WOSController')

const ac = require('./controllers/authController')

app.use(express.json());

app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7 * 3
    }

})
)
// console.log(SESSION_SECRET)


//database connected//
massive(CONNECTION_STRING).then(db => {
    app.set("db", db);
    console.log("Database connected");
});




//Endpoints//

// --authController endpoints--
app.get('/auth/user', ac.getUser)
app.post('/auth/register', ac.register)
app.post('/auth/login', ac.login)
app.get('/auth/logout', ac.logout)
app.get('/auth/businesses', ac.getBusinesses)
app.post('/auth/update', ac.updateUser)

//Reviews//
app.get('/api/reviews', getReviews);
app.delete('/api/reviews/:reviews_id', deleteReview);
app.post('/api/reviews', createReview);
app.put('/api/reviews', updateReview)

//Comments//
app.get('/api/comments/:review_id', getComments);
app.delete('/api/comments/:comments_id', deleteComment);
app.post('/api/comments', createComment);
app.put('/api/comments', updateComment)

//Wall of Shame//
app.get('/api/wos', getWOS);
app.delete('/api/wos/:wos_id', deleteWOS);
app.post('/api/wos', createWOS);
app.put('/api/wos', updateWOS)




app.listen(SERVER_PORT, () => {
    console.log("Server listening on port 5050")
})