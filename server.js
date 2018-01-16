var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config/config.js')
var bodyParser = require('body-parser');
var hallController = require('./controllers/hall-controller');
var userController = require('./controllers/user-controller');
var postController = require('./controllers/post-controller');
var userFilmController = require('./controllers/user-film-controller');
var cinemaController = require('./controllers/cinema-controller');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var port = process.env.PORT || 8080;

mongoose.connect(config.getConfig(), { useMongoClient: true });

app.post('/api/hall/create', hallController.createHall);
app.get('/api/hall/get', hallController.getDimensions);

app.post('/api/user/create', userController.createUser);
app.get('/api/user/all', userController.getUsers);
app.get('/api/user/get/:name', userController.getUser);
app.post('/api/post/create', postController.createPost);
app.post('/api/post/update', postController.updatePost);
app.post('/api/userfilm/deletelike', userFilmController.deleteLike);
app.post('/api/userfilm/create', userFilmController.createUserFilm);
app.post('/api/post/get', postController.getData);
app.post('/api/userfilm/get', userFilmController.getAllFilmsFromUser);
app.post('/api/cinema/create', cinemaController.createCinema);
app.post('/api/cinema/getall', cinemaController.getCinemas);
app.post('/api/cinema/get', cinemaController.getCinema);

app.listen(port, function(){
    console.log('Our app is running on http://localhost:' + port);
});
