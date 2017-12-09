const HallModel = require('../models/hall-model').hallModel;

// send hall dimensions

module.exports.createHall = function(req, res) {
    const NewHall = HallModel({
        columns: req.body.columns,
        rows: req.body.rows
    });
    
    NewHall.save(function(err, result){
        if(err) throw err;

    res.send(result);
    })
}

module.exports.getDimensions = function(req, res) {
    HallModel.find({}, function(err, result) {
        if(err) throw err;

        res.send(result);
    });
}