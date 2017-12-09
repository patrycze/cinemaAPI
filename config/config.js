var config = require('./config.json');

module.exports.getConfig = function() {
    
    return "mongodb://" + config.usr + ":" + config.pwd + "@ds135866.mlab.com:35866/cinemanerd"
}