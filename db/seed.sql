---------------- USERS TABLE --------------- USERS TABLE --------------- 

-- CREATE TABLE welp_users(
-- users_id SERIAL PRIMARY KEY,
-- users_name VARCHAR(200), 

-- users_img TEXT, 
-- users_password TEXT, 
-- users_email VARCHAR(200)
-- businesses_id INTEGER REFERENCES welp_businesses(businesses_id),
-- )



-- INSERT INTO welp_users(
--   users_first_name, 
--   users_last_name, 
--   users_img, 
--   users_password, 
--   users_email,
--   businesses_id
--   )
-- VALUES(
--   'Sam', 
-- Superman',
--   'https://sc01.alicdn.com/kf/HTB1rFGExeGSBuNjSspbq6AiipXaP/Halloween-Adult-Inflatable-cosplay-superman-costume.jpg_350x350.jpg', 
--   'password', 
--   'sam@maildrop.cc'
-- 2
--   )


-- INSERT INTO welp_users(
--   users_first_name, 
--   users_last_name, 
--   users_img, 
--   users_password, 
--   users_email
--   businesses_id
--   )
-- VALUES(
--   'Olga', 
--   'Octopus', 
--   'https://images.halloweencostumes.com/products/41579/1-1/adult-blue-octopus-costume.jpg', 
--   'password', 
--   'olga@maildrop.cc'
-- 1
--   )



---------------- USERS TABLE --------------- USERS TABLE --------------- 



---------------- CUSTOMERS TABLE --------------- CUSTOMERS TABLE --------------- 

-- CREATE TABLE welp_customers(
-- customers_id SERIAL PRIMARY KEY,
-- customers_name VARCHAR(300), 
-- customers_img TEXT, 
-- customers_notes TEXT, 
-- users_id INTEGER REFERENCES welp_users(users_id)
-- )


-- INSERT INTO welp_customers(
--   customers_name, 
--   customers_img, 
--   customers_notes,
--   users_id
--   )
-- VALUES(
--   'Nicholas Nice', 
--   'https://pixel.nymag.com/imgs/daily/strategist/2018/01/24/white-shirts/24-white-shirts-lede.w700.h700.jpg', 
--   'Nicholas was an extravagant guest at our restaurant.   He smelled nice and he cleaned up after himself.   He elequently ate the snail we served and did not smack or chew with his mouth open.   Would definitely do business with Nicolas again.', 
--   '2'
--   )


-- INSERT INTO welp_customers(
--   customers_name, 
--   customers_img, 
--   customers_notes,
--   users_id
--   )
-- VALUES(
--   'Gerald Germophobe', 
--   'https://yellowbluetech.com/wp-content/uploads/What-is-the-best-way-to-clean-your-house.jpg', 
--   'Gerald is a germophobe', 
--   '1'
--   )


---------------- CUSTOMERS TABLE --------------- CUSTOMERS TABLE ---------------


---------------- BUSINESSES TABLE --------------- BUSINESSES TABLE ---------------


-- CREATE TABLE welp_businesses(
-- businesses_id SERIAL PRIMARY KEY,
-- businesses_name VARCHAR(300), 
-- businesses_img TEXT, 
-- businesses_notes TEXT,
-- businesses_address_line1 VARCHAR(500), 
-- businesses_address_line2 VARCHAR(300), 
-- businesses_city VARCHAR(300), 
-- businesses_state VARCHAR(100), 
-- businesses_zip VARCHAR(100),
-- businesses_country VARCHAR(500),
-- )


-- INSERT INTO welp_businesses(
-- businesses_name, 
-- businesses_img, 
-- businesses_notes,
-- businesses_address_line1, 
-- businesses_address_line2, 
-- businesses_city, 
-- businesses_state, 
-- businesses_zip,
-- businesses_country,
-- )
-- VALUES(
--   'Wcdonalds', 
--   'https://ih1.redbubble.net/image.276590509.5428/flat,550x550,075,f.jpg', 
--   'We sell Wcfries', 
--   '837 FM 5309', 
--   null, 
--   'Argyle',
--   'TX',
--   76226,
--   'USA',
--   )


-- INSERT INTO welp_businesses(
-- businesses_name, 
-- businesses_img, 
-- businesses_notes,
-- businesses_address_line1, 
-- businesses_address_line2, 
-- businesses_city, 
-- businesses_state, 
-- businesses_zip,
-- businesses_country,
-- )
-- VALUES(
--   'Fries King', 
--   'https://i.ytimg.com/vi/DQdH6RpbXKI/maxresdefault.jpg', 
--   'Formally Cheeseburger King', 
--   '34 56th rd', 
--   null, 
--   'Argyle',
--   'TX',
--   76226,
--   'USA',
--   )


---------------- BUSINESSES TABLE --------------- BUSINESSES TABLE ---------------



---------------- WOS TABLE --------------- WOS TABLE ---------------

-- CREATE TABLE welp_wos(
-- wos_id SERIAL PRIMARY KEY,
-- wos_title TEXT, 
-- wos_img TEXT, 
-- wos_description TEXT,
-- users_id INTEGER REFERENCES welp_users(users_id),
-- businesses_id INTEGER REFERENCES welp_businesses(businesses_id),
-- customers_id INTEGER REFERENCES welp_customers(customers_id)
-- )


-- INSERT INTO welp_wos(
--   wos_title, 
--   wos_img, 
--   wos_description,
--   users_id, 
--   businesses_id, 
--   customers_id
--   )
-- VALUES(
--   'Gerald Germophobe', 
--   'https://yellowbluetech.com/wp-content/uploads/What-is-the-best-way-to-clean-your-house.jpg', 
--   'banned for spraying disinfectant in other customers faces', 
--   '1', 
--   '1', 
--   '3'
--   )


-- INSERT INTO welp_wos(
--   wos_title, 
--   wos_img, 
--   wos_description,
--   users_id, 
--   businesses_id, 
--   customers_id
--   )
-- VALUES(
--   'Method Man', 
--   'https://media-ncd.cmgdigital.com/photo/2017/11/15/Florida_Man_High_on_Meth_Climbs_on_Stran_0_9979660_ver1.0_640_360.jpg', 
--   'rs', 
--   '2', 
--   '1', 
--   null
--   )


---------------- WOS TABLE --------------- WOS TABLE ---------------


---------------- REVIEWS TABLE --------------- REVIEWS TABLE ---------------


-- CREATE TABLE welp_reviews(
-- reviews_id SERIAL PRIMARY KEY,
-- reviews_title TEXT,
-- reviews_description TEXT,
-- reviews_img TEXT, 
-- reviews_score INTEGER,
-- users_id INTEGER REFERENCES welp_users(users_id),
-- customers_id INTEGER REFERENCES welp_customers(customers_id) 
-- )



-- INSERT INTO welp_reviews(
--   reviews_title, 
--   reviews_img, 
--   reviews_description,
--   reviews_score, 
--   users_id, 
--   customers_id
--   )
-- VALUES(
--   'Nicholas is a joy to serve', 
--   'https://pixel.nymag.com/imgs/daily/strategist/2018/01/24/white-shirts/24-white-shirts-lede.w700.h700.jpg', 
--   'Nicholas was an extravagant guest at our restaurant.   He smelled nice and he cleaned up after himself.   He elequently ate the snail we served and did not smack or chew with his mouth open.   Would definitely do business with Nicolas again.', 
--   5, 
--   1, 
--   1
--   )



-- INSERT INTO welp_reviews(
--   reviews_title, 
--   reviews_img, 
--   reviews_description,
--   reviews_score, 
--   users_id, 
--   customers_id
--   )
-- VALUES(
--   'Gerald is a germophobe', 
--   'https://yellowbluetech.com/wp-content/uploads/What-is-the-best-way-to-clean-your-house.jpg', 
--   'When Gerald first came over I thought I would enjoy his business.  Once one patron sneezed, it became very obvious I was wrong.  Gerald pulled his shirt up and began spraying disinfectant EVERYWHERE.  Im not even sure where he got it from.   He sprayed it in other customers food and their eyes as well.   He is defintely banned.', 
--   1, 
--   2, 
--   3
--   )


---------------- REVIEWS TABLE --------------- REVIEWS TABLE ---------------


---------------- REVIEW_COMMENTS TABLE --------------- REVIEW_COMMENTS TABLE ---------------

-- CREATE TABLE welp_review_comments(
-- comments_id SERIAL PRIMARY KEY, 
-- comment_description TEXT, 
-- users_id INTEGER REFERENCES welp_users(users_id),
-- reviews_id INTEGER REFERENCES welp_reviews(reviews_id)
-- )


-- INSERT INTO welp_review_comments(
-- users_id, 
-- reviews_id, 
-- comment_description
-- )
-- VALUES(
-- 1, 
-- 3, 
-- 'hahaha, I have definitely had customers like that'
-- )


-- INSERT INTO welp_review_comments(
-- users_id, 
-- reviews_id, 
-- comment_description
-- )
-- VALUES(
-- 2, 
-- 3, 
-- 'They come in waves.   I hope he figures it out one day.'
-- )


---------------- REVIEW_COMMENTS TABLE --------------- REVIEW_COMMENTS TABLE ---------------