SELECT * FROM welp_review_comments wrc
    JOIN welp_users u 
        ON r.users_id=u.users_id
    JOIN welp_businesses b 
        ON u.businesses_id=b.businesses_id      
    WHERE wrc.reviews_id = $1;