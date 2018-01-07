const mongoose = require('mongoose').set('debug', true);

const Schema = mongoose.Schema;

const UserFilm = new Schema({
    name : String,
    password: String,
    filmid: String
})

module.exports = {
    userFilmModel: mongoose.model('userFilmModel', UserFilm)
}