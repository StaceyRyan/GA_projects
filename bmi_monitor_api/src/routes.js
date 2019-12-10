const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const TrackerController = require('./controller/tracker.controller');
const TrkController = new TrackerController();

require('./mongo');

router.use(bodyParser.json());

router.use((req, res, next) => {
    console.log('Entry Time:' , Date.now());
    next();
})

//homepage route
router.get('/', function (req, res) {
    res.send('BMI Tracker home page')
});

//new entry route
router.post('/add', async (req, res)  => {
    const newEntry = await TrkController.newEntry(req.body);
    res.status(newEntry.status).send(newEntry.msg);
});

router.get('/find', async (req, res) => {
    res.json(await TrkController.findAll());
});

router.put('/edit/:date', async (req, res) => {
    res.json(await TrkController.updateByDate(req.params.date, req.body)).send();
 })

router.delete('/delete/:date', async (req, res) => {
    const deleteResult = await TrkController.deleteByDate(req.params.date);
    res.send(deleteResult);
});

module.exports = router;