SELECT r.*,  u.users_first_name, b.businesses_name
    FROM welp_reviews r
    JOIN welp_users u 
        ON r.users_id=u.users_id
    JOIN welp_businesses b 
        ON u.businesses_id=b.businesses_id