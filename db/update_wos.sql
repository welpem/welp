UPDATE welp_wos SET
wos_title = $2, 
wos_img = $3,
wos_description = $4

WHERE wos_id = $1;