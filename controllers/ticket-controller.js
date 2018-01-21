const TicketModel = require('../models/ticket-model').ticketModel;

module.exports.createTicket = function(req, res) {
    console.log(req.body.title)
    const NewTicket = TicketModel({
        
        user: req.body.user,
        title: req.body.title,
        cinema: req.body.cinema,
        price: req.body.price,
        col: req.body.col,
        row: req.body.row

    });
    
    NewTicket.save(function(err, result){
        if(err) throw err;

    res.send(result);
    })
}

module.exports.getTicket = function(req, res) {
    TicketModel.find({user: req.body.user}, function(err, result) {
        if(err) throw err;

        res.send(result);
    });
}
    module.exports.getSeats = function(req, res) {
        TicketModel.find({title: req.body.title}, function(err, result) {
            if(err) throw err;
    
            res.send(result);
        });
    }