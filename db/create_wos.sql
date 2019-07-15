INSERT INTO welp_wos
(
wos_title, 
wos_img, 
wos_description, 
users_id, 
businesses_id
)

VALUES($1, $2, $3, $4, $5);

SELECT * FROM welp_wos;
