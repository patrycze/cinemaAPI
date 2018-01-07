const UserFilmModel = require('../models/user-film-model').userFilmModel;

// send hall dimensions

module.exports.createUserFilm = function(req, res) {
    console.log(req.body.name)
    const NewUserFilm = UserFilmModel({
        name: req.body.name,
        password: req.body.password,
        filmid: req.body.filmid
    });
    
    NewUserFilm.save(function(err, result){
        if(err) throw err;

    res.send(result);
    })
}

module.exports.deleteLike = function(req, res) {
    UserFilmModel.remove({ filmid: req.body.filmid }, function(err) {
        if (!err) {
                message.type = 'notification!';
        }
        else {
                message.type = 'error';
        }
    });
}