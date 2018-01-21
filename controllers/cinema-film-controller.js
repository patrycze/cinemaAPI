const FilmModel = require('../models/film-cinema-model').filmModel;

module.exports.createFilm = function(req, res) {
    console.log(req.body.title)
    const NewFilm = FilmModel({
        
        title: req.body.title,
        cinema: req.body.cinema,
        price: req.body.price,
        year: req.body.year,
        genre: req.body.genre

    });
    
    NewFilm.save(function(err, result){
        if(err) throw err;

    res.send(result);
    })
}

module.exports.getFilm = function(req, res) {
    FilmModel.find({cinema: req.body.cinema}, function(err, result) {
        if(err) throw err;

        res.send(result);
    });
}