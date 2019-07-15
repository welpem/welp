const bcrypt = require('bcrypt.js')

async function register(req, res){
    const {first_name, last_name, image, password, email} = req.body;
    const db = req.app.get('db');
    const result = await db.get_user([email])
    const existingUser = result.length;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    
    if(existingUser > 0){
        console.log('Email already has account');
    } else {
        const registeredUser = await db.add_user([first_name, last_name, image, hash, email])
        const user = registeredUser[0];
        req.session.customer = {email: user.email, id: user.id, admin: user.admin}
        return res.status(201).json(req.session.customer)
    }
}
async function login(req, res){
    const {email, password} = req.body;
    const db = req.app.get('db');
    const foundUser = await db.get_user([email]);
    const user = foundUser[0];
    const isAuthenticated = bcrypt.compareSync(password, user.password);

    if(!user){
        return res.status(401).json('I do not know you');
    }
    if(!isAuthenticated){
        return res.status(403).json('Try again');
    }
    req.session.customer = {
        id: user.customer_id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
    }
    return res.send(req.session.customer)
}
async function logout(req, res){
    req.session.destroy();
    return res.status(200).send(req.session);
}
async function getUser(req, res){
    if(req.session.customer){
        res.json(req.session.customer)
    } else {
        res.status(401).json(console.log('no user found'))
    }
}

module.exports={
    register, login, logout, getUser
}