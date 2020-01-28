const express = require('express');
const OwnerRouter = express.Router();

OwnerRouter.get('/findAllDogs', async (req, res) => {
    const dogs_owned = await DogModel.find();
    res.status(200).json(dogs_owned.map((dogs) => dogs._id));
})

module.exports = OwnerRouter;
