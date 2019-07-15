need to add this these to server index



const {getReviews, deleteReview, createReview, updateReview} = require('./Controllers/reviewController')

app.get('/api/reviews', getReviews);
app.delete('/api/reviews/:reviews_id', deleteReview);
app.post('/api/reviews', createReview);
app.put('/api/reviews', updateReview);
