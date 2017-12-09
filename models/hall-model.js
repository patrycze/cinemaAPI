const mongoose = require('mongoose').set('debug', true);

const Schema = mongoose.Schema;

const Hall = new Schema({
    columns: Number,
    rows: Number
})

module.exports = {
    hallModel: mongoose.model('hallModel', Hall)
}