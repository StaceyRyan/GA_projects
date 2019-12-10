const mongoose = require('mongoose');
const bmiSchema = new mongoose.Schema({
    date: {type: String, required: true, unique: true},
    height: Number,
    weight: Number,
    chest: Number,
    waist: Number,
    hips: Number,
    bmi: {type: Number, required: true}
})

const Tracker = mongoose.model('BMI', bmiSchema);

module.exports = Tracker;