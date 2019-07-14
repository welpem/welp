INSERT INTO welp_reviews
(
reviews_title, 
reviews_img, 
reviews_description, 
reviews_score, 
users_id
)

VALUES($1, $2, $3, $4, $5);

SELECT * FROM welp_reviews;
