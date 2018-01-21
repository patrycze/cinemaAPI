const mongoose = require('mongoose').set('debug', true);

const Schema = mongoose.Schema;

const Film = new Schema({
    title: String,
    cinema: String,
    price:  String,
    year: String,
    genre: String
})

module.exports = {
    filmModel: mongoose.model('filmModel', Film)
}