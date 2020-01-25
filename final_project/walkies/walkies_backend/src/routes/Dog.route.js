const express = require('express');
const DogRouter = express.Router();
const UserModel = require('../models/User.model.js');
const DogModel = require('../models/Dog.model.js')
const DogControl = require('../controllers/dog.controller.js');
const Dog = new DogControl();

//JSON parsing middleware
DogRouter.use(express.json());

//Middleware
DogRouter.use((req, res, next) => {
    next();
})

DogRouter.post('/new', async (req, res) => {
    const newDog = await Dog.newEntry(req.body);
    res.status(newDog.status).send(newDog.msg);
    res.json({ status: "New dog added."});
})

DogRouter.get('/show_all', async (req, res) => {
    res.json(await Dog.findAll());
})

DogRouter.post('/update', async (req, res) => {

})


module.exports = DogRouter;