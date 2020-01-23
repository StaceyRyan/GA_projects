const express = require('express');
const session = require('express-session');
const app = express();
require ('./mongo');
require('dotenv').config()
const UserRouter = require('./routes/User.route.js');
const DogRouter = require('./routes/Dog.route.js');
const AuthenticateRouter = require('./routes/Authenticate.route.js');

const port = process.env.EXPRESS_PORT || 4000;
const host = process.env.EXPRESS_HOST || "local host"

app.use(session({
    secret: process.env.SECRET,
    name: 'doggo',
    cookie: { maxAge: 3600000 }, //one hour expiry
    resave: false,
    saveUninitialized: false})
);

//routes
app.use('/dog', DogRouter);
app.use('/user', UserRouter);
// app.use('/authenticate', AuthenticateRouter);

app.listen(port, () => {console.log(`Listening on port ${port}`)});