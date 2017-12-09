var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config/config.js')
var bodyParser = require('body-parser');
var hallController = require('./controllers/hall-controller');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var port = process.env.PORT || 8080;

mongoose.connect(config.getConfig(), { useMongoClient: true });

app.post('/api/hall/create', hallController.createHall);
app.get('/api/hall/get', hallController.getDimensions);

app.listen(port, function(){
    console.log('Our app is running on http://localhost:' + port);
});