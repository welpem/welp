SELECT welp_wos.wos_id, 
welp_wos.wos_title, 
welp_wos.wos_img, 
welp_wos.wos_description, 
welp_users.users_first_name, 
welp_businesses.businesses_name
FROM welp_wos
    JOIN welp_users ON welp_wos.users_id=welp_users.users_id
    JOIN welp_businesses ON welp_wos.businesses_id=welp_businesses.businesses_id
WHERE welp_users.users_first_name ILIKE '%'||$1||'%'