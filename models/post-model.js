const mongoose = require('mongoose').set('debug', true);

const Schema = mongoose.Schema;

const Post = new Schema({
    title : String,
    poster: String,
    desc: String,
    likesCount: Number
})

module.exports = {
    postModel: mongoose.model('postModel', Post)
}