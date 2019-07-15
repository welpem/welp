UPDATE welp_reviews SET
reviews_title = $2, 
reviews_img = $3,
reviews_description = $4,
reviews_score = $5

WHERE reviews_id = $1;