const bcrypt = require('bcrypt');

module.exports = {
    login: (req, res, next) => {

    },
    register: async (req, res, next) => {
        const db = req.app.get('db');
        const {username, email, password} = req.body;
        const foundUser = await db.select_user(email);
        console.log(foundUser)
        if(foundUser.length > 0){
            res.status(409).send('That user already has a meme treasure in our vault')
        } else {const saltRounds = 12;
        bcrypt.genSalt(saltRounds).then( salt => {
            bcrypt.hash(password, salt).then( hashedPassword => {
                db.create_user([username, email, hashedPassword])
                .then(([user]) => {
                    req.session.user = user
                    res.status(200).send(req.session.user)
                })
            })
        })}

    },
    userSession: (req, res, next) => {

    },
    logout: (req, res, next) => {

    }
}