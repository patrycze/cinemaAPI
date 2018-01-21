const mongoose = require('mongoose').set('debug', true);

const Schema = mongoose.Schema;

const Ticket = new Schema({
    user : String,
    title : String,
    cinema: String,
    price: String,
    col: String,
    row: String
    
})

module.exports = {
    ticketModel: mongoose.model('ticketModel', Ticket)
}