const mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    tit: String,
    img: String,
});

module.exports = mongoose.model('Post', PostSchema);



// const SFMongodbManager = require("./manager/SFMongodbManager");
// mongoose.connect('mongodb://127.0.0.1:27017/simfull');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function callback () { console.log("mongo db connection OK."); });
// SFMongodbManager.create({ tit: arg.title, img: arg.img }, function (err, post) {
// if (err) return handleError(err);
//     // saved!
//     console.log("saved!!!", post);
// })

// SFMongodbManager.find({}, function(err, posts){
//     console.log("Get!!!");
// });