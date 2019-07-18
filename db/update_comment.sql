UPDATE welp_review_comments SET 
comment_description = $2

WHERE comments_id = $1;