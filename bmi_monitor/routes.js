const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

require('./mongoose');

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
    const newEntry = await BmiTracker.newEntry(req.body);
    res.status(newRes.status).send(newRes.msg);
});

module.exports = router;