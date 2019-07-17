INSERT INTO welp_businesses (businesses_name, businesses_img, businesses_notes, businesses_address_line1, businesses_address_line2, businesses_city, businesses_state, businesses_zip, businesses_country)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
RETURNING *