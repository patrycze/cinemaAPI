const mongoose = require('mongoose').set('debug', true);

const Schema = mongoose.Schema;

const Cinema = new Schema({
    name: String,
    lat: Number,
    lng: Number
})

module.exports = {
    cinemaModel: mongoose.model('cinemaModel', Cinema)
}