const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    token: String,
    username: String,
    password: String,
    preferred_name: String,
    email: String,
    phone_number: Number,
    profile: {role: String},
    dog_list: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;