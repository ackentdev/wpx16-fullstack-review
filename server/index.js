require('dotenv').config()
const massive = require('massive');
const express = require('express');
const session = require('express-session');
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env
const app = express();
const {login, register, logout, userSession} = require('./controller/authCtrl')

app.use(express.json());

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14
    }
}));

massive(CONNECTION_STRING).then( db => {
    console.log('connected to db');
    app.set('db', db)
})

// AUTH
app.post('/api/login', login);
app.post('/api/register', register);
app.get('/api/userSession', userSession);
app.get('/api/logout', logout);

app.listen(SERVER_PORT, () => console.log(`server running on port${SERVER_PORT}`))