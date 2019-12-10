require('./mongo');

const express = require('express');
const router = express.Router();
const bmiRoutes = require('./routes');
const bodyParser = require('body-parser');
const moment = require('moment');
const Tracker = require('./models/Tracker');

const server = express();
server.use('/', bmiRoutes)

const port = process.env.EXPRESS_PORT || 4000;
const host = process.env.EXPRESS_HOST || "localhost";

server.listen(port, host, () => {
    console.log("port: " + port);
})