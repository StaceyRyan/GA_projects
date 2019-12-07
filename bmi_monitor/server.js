require('./mongoose');

const express = require('express');
const router = express.Router();
const bmiRoutes = require('./routes');
const bodyParser = require('body-parser');

const server = express();
server.use('/', bmiRoutes)

const port = process.env.EXPRESS_PORT || 3000;
server.listen(port, () => {
    console.log("port: " + port);
})

const host = process.env.EXPRESS_HOST || "localhost";