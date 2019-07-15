require('dotenv').config();
const express = require('express');
const massive= require('massive');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const app = express();
let {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;


const {
    getReviews,
    deleteReview,
    createReview,
    updateReview
} = require('./controllers/reviewController')

const {
    getWOS,
    deleteWOS,
    createWOS,
    updateWOS
} = require('./controllers/WOSController')

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
console.log(SESSION_SECRET)


//database connected//
massive(CONNECTION_STRING).then(db => {
    app.set("db", db);
    console.log("Database connected");
});




//Endpoints//

//Reviews//
app.get('/api/reviews', getReviews);
app.delete('/api/reviews/:reviews_id', deleteReview);
app.post('/api/reviews', createReview);
app.put('/api/reviews', updateReview)

//Wall of Shame//
app.get('/api/wos', getWOS);
app.delete('/api/wos/:wos_id', deleteWOS);
app.post('/api/wos', createWOS);
app.put('/api/wos', updateWOS)











app.listen(SERVER_PORT, () => {
    console.log("Server listening on port 5050")
})