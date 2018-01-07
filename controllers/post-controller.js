const PostModel = require('../models/post-model').postModel;

// send hall dimensions

module.exports.createPost = function(req, res) {
    console.log(req.body.title)
    const NewPost = PostModel({
        
        title: req.body.title,
        poster: req.body.poster,
        desc: req.body.desc,
        filmid: req.body.filmid,
        likesCount: 0

    });
    
    NewPost.save(function(err, result){
        if(err) throw err;

    res.send(result);
    })
}

module.exports.updatePost = function(req, res) {
    query = { filmid: req.body.filmid };
    PostModel.findOneAndUpdate(query, {likesCount: req.body.likesCount}, function(err, doc){
        if (err) return res.send(500, { error: err });
        return res.send("succesfully saved");
    });
}
