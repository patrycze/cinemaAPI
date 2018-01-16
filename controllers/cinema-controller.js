const CinemaModel = require('../models/cinema-model').cinemaModel;

// send hall dimensions

module.exports.createCinema = function(req, res) {
    const NewCinema = CinemaModel({
        name: req.body.name,
        lat: req.body.lat,
        lng: req.body.lng
    });
    
    NewCinema.save(function(err, result){
        if(err) throw err;

    res.send(result);
    })
}

module.exports.getCinemas = function(req, res) {
    CinemaModel.find({}, function(err, result) {
        if(err) throw err;

        res.send(result);
    });
}

module.exports.getCinema = function(req, res) {
    CinemaModel.find({name: req.body.name}, function(err, result) {
        if(err) throw err;

        res.send(result);
    });
}