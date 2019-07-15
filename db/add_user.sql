INSERT INTO welp_users (users_first_name, users_last_name, users_img, users_password, users_email)
VALUES ($1, $2, $3, $4, $5)
RETURNING *