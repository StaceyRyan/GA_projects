const express = require('express');
const session = require('express-session');
const app = express();
require ('./mongo');
require('dotenv').config()
const UserRouter = require('./routes/User.route');
const OwnerRouter = require('./routes/Owner.route');
const DogRouter = require('./routes/Dog.route');
const {authenticateChecker} = require('./controllers/auth.controller');
const AuthenticateRouter = require('./routes/Authenticate.route');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

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
app.use('/dog', authenticateChecker, DogRouter);
app.use('/user', UserRouter);
app.use('/owner', authenticateChecker, OwnerRouter)
app.use('/auth', AuthenticateRouter);

app.listen(port, () => {console.log(`Listening on port ${port}`)});