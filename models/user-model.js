const mongoose = require('mongoose').set('debug', true);

const Schema = mongoose.Schema;

const User = new Schema({
    name : String,
    password: String,
    filmId: String
})

module.exports = {
    userModel: mongoose.model('userModel', User)
}