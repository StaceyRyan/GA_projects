const express = require('express');
const DogRouter = express.Router();
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
    res.json({ status: "New dog added." });
})

DogRouter.get('/show_all', async (req, res) => {
    res.json(await Dog.findAll());
});

DogRouter.get('/showOne/:_id', async (req, res) => {
    console.log(`req.params._id: ${req.params._id}`);
    res.json(await DogModel.findById(req.params._id, req.body)).send();
})

DogRouter.put('/update/:_id', async (req, res) => {
    console.log(req.body);
    console.log(`req.params._id: ${req.params._id}`);
    res.json(await Dog.updateById(req.params._id, req.body)).send();
})

DogRouter.delete('/delete/:_id', async (req, res) => {
    console.log(`req.params._id: ${req.params._id}`);
    const deletedDog = await Dog.deleteById(req.params._id);
    res.send(deletedDog);
})

module.exports = DogRouter;