const PostModel = require('../models/post-model').postModel;

// send hall dimensions

module.exports.createUser = function(req, res) {
    const NewPost = PostModel({
        title: req.body.title,
        poster: req.body.poster,
        desc: req.body.desc,
        likesCount: 0
    });
    
    NewPost.save(function(err, result){
        if(err) throw err;

    res.send(result);
    })
}

module.exports.updatePost = function(req, res) {
    query = { title: req.body.title };
    PostModel.findOneAndUpdate(query, {likesCount: req.body.likesCount}, function(err, doc){
        if (err) return res.send(500, { error: err });
        return res.send("succesfully saved");
    });
}
