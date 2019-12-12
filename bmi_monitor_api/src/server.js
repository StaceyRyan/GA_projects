require('./mongo');

const express = require('express');
const cors = require('cors');
const bmiRoutes = require('./routes');

const server = express();
server.use(cors());
server.use('/', bmiRoutes)



const port = process.env.EXPRESS_PORT || 4000;
const host = process.env.EXPRESS_HOST || "localhost";

server.listen(port, host, () => {
    console.log("port: " + port);
})