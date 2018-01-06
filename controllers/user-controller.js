const UserModel = require('../models/user-model').userModel;

// send hall dimensions

module.exports.createUser = function(req, res) {
    const NewUser = UserModel({
        name: req.body.name,
        password: req.body.password,
        filmId: ''
    });
    
    NewUser.save(function(err, result){
        if(err) throw err;

    res.send(result);
    })
}

module.exports.getUsers = function(req, res) {
    UserModel.find({}, function(err, result) {
        if(err) throw err;

        res.send(result);
    });
}

module.exports.getUser = function(req, res) {
    UserModel.find({ 
        name: req.params.name,
        password: req.query.pass }, function(err, result) {
        if(err) throw err;

        res.send(result);
    });
}

module.exports.deleteLike = function(req, res) {
    UserModel.remove({ filmId: req.body.filmId }, function(err) {
        if (!err) {
                message.type = 'notification!';
        }
        else {
                message.type = 'error';
        }
    });
}