const express = require('express');
const UserRouter = express.Router();
const UserModel = require('../models/User.model.js');
const DogModel = require('../models/Dog.model.js');

//JSON parsing middleware
UserRouter.use(express.json());

//Middleware
UserRouter.use((req, res, next) => {
    next();
})

//homepage route
UserRouter.get('/home', function (req, res) {
    res.send('Walkies home page')
});

UserRouter.post('/login', async (req, res) => {
//todo login stuff here
})

UserRouter.get('/findAllDogs', async (req, res) => {
    const dogs_owned = await DogModel.find();
    res.status(200).json(dogs_owned.map((dogs) => dogs._id));
})
    

module.exports = UserRouter;