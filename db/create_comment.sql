INSERT INTO welp_review_comments
  (
    comment_description, 
    users_id, 
    reviews_id
  )
VALUES ($1, $2, $3)

-- SELECT * FROM welp_review_comments WHERE reviews_id = $3;