const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogSchema = new Schema ({
    _id: Schema.ObjectId,
    dog_owner_id: Number,
    name: String,
    breed: String,
    dog_owner_name: String,
    address: {line_1: String, line_2: String, suburb: String, postcode: Number},
    health_issues: String,
    notes: String,
    avatar: String
});

const DogModel = mongoose.model('Dog', dogSchema);

module.exports = DogModel;