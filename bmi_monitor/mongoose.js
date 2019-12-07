require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost/${process.env.MONGO_DATABASE}`,
    { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("BMI tracker database is live");
})