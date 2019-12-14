const mongoose = require('mongoose');
const bmiSchema = new mongoose.Schema({
    date: {type: String, required: true, unique: true},
    height: {type: Number, required: true},
    weight: {type: Number, required: true},
    chest: Number,
    waist: Number,
    hips: Number,
    bmi: Number
})

const Tracker = mongoose.model('BMI', bmiSchema);

module.exports = Tracker;