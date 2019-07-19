const bcrypt = require('bcryptjs')

async function register(req, res){
    // console.log('David: hit')
    const {first_name, last_name, image, new_password, business, new_email, businesses_name, businesses_image, businesses_notes, businesses_address_line1, businesses_address_line2, businesses_city, businesses_state, businesses_zip, businesses_country} = req.body;
    // console.log('David: AC6: ', req.body)
    const db = req.app.get('db');

    if(business === ''){
        db.add_business([businesses_name, businesses_image, businesses_notes, businesses_address_line1, businesses_address_line2, businesses_city, businesses_state, businesses_zip, businesses_country])
        return res.status(201).json(businesses_name)
    } else {
        const result = await db.get_user([new_email])
        // console.log('David: AC9: ', result)
        const business_id = await db.get_businesses_id([business])
        let businesses_id = business_id[0].businesses_id
        // console.log('David: AC10: ', businesses_id)
        const existingUser = result.length;
        // console.log('David: AC14: ', existingUser)
        const salt = bcrypt.genSaltSync(10);
        // console.log('AC21: ', new_password)
        const hash = bcrypt.hashSync(new_password, salt);
        
        if(existingUser > 0){
            console.log('David: AC25: Email already has account');
        } else {
            const registeredUser = await db.add_user([first_name, last_name, image, hash, businesses_id, new_email])
            const user = registeredUser[0];
            req.session.user = {id: user.id, email: user.new_email, first_name: user.first_name, last_name: user.last_name, image: user.image, businesses_id: user.businesses_id}
            return res.status(201).json(req.session.user)
        }
    }
}
async function getBusinesses(req, res){
    const db = req.app.get('db');
    db.get_businesses()
        .then(response =>{ res.status(200).json(response);
            // console.log('David: ', response)
        })
        .catch(()=>{
            res.sendStatus(500)
        })
}
async function login(req, res){
    const {email, password} = req.body;
    // console.log('David: AC46: ', req.body)
    const db = req.app.get('db');
    const foundUser = await db.get_user([email]);
    const user = foundUser[0];
    // console.log('David: AC50: ', password, user.users_password)
    const isAuthenticated = bcrypt.compareSync(password, user.users_password);

    if(!user){
        return res.status(401).json('I do not know you');
    }
    if(!isAuthenticated){
        return res.status(403).json(console.log('AC56: ', isAuthenticated));
    }
    req.session.user = {
        id: user.users_id,
        email: user.users_email,
        first_name: user.users_first_name,
        last_name: user.users_last_name,
        image: user.users_img,
        businesses_id: user.businesses_id
    }
    // console.log('David: AC66-SESSION: ', req.session.user)
    return res.send(req.session.user)
}
async function logout(req, res){
    req.session.destroy();
    return res.status(200).send(req.session);
}
async function getUser(req, res){
    if(req.session.user){
        // console.log('David: AC56: ', req.session.user)
        res.json(req.session.user)
    } else {
        res.sendStatus(401)
    }
}
async function updateUser(req, res){
    const {user, first_name, last_name, new_password, new_email, image, business} = req.body;
    // console.log('David: AC83: ', req.body)
    const db = req.app.get('db');

    // if(first_name !== ''){
    //     db.update_first_name([user.id, first_name])
    //     req.session.user = {
    //         id: user.id,
    //         email: user.email,
    //         first_name: first_name,
    //         last_name: user.last_name,
    //         image: image,
    //         businesses_id: user.businesses_id
    //     }
    // }
    // if(last_name !== ''){
    //     db.update_last_name([user.id, last_name])
    //     req.session.user = {
    //         id: user.id,
    //         email: user.email,
    //         first_name: user.first_name,
    //         last_name: last_name,
    //         image: image,
    //         businesses_id: user.businesses_id
    //     }
    // }
    // if(new_password !== ''){
    //     const salt = bcrypt.genSaltSync(10);
    //     const hash = bcrypt.hashSync(new_password, salt);
        
    //     db.update_password([user.id, hash])
    // }
    if(new_email !== ''){
        const result = await db.get_user([new_email])
        const existingUser = result.length;
        
        if(existingUser > 0){
            console.log('David: AC120: Email already has account');
        } else {
            db.update_email([user.id, new_email])
            req.session.user = {
                id: user.id,
                email: new_email,
                first_name: user.first_name,
                last_name: user.last_name,
                image: user.image,
                businesses_id: user.businesses_id
            }
            // console.log('David: AC109: ', req.session.user)
        }
    }
    if(image !== ''){
        db.update_image([user.id, image])
        req.session.user = {
            id: user.id,
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            image: image,
            businesses_id: user.businesses_id
        }
    }
    if(business !== ''){
        const business_id = await db.get_businesses_id([business])
        let new_businesses_id = business_id[0].businesses_id
        
        db.update_business([user.id, new_businesses_id])
        req.session.user = {
            id: user.id,
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            image: user.image,
            businesses_id: new_businesses_id
        }
    }
    // console.log('David: AC158: ', req.session.user)
    res.status(200).json(req.session.user)
}

module.exports={
    register, login, logout, getUser, getBusinesses, 
    updateUser
}