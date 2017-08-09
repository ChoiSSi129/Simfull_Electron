const electron = require('electron');
const { ipcMain } = electron;
const downloadManager = require("./manager/SFDownloadManager");
const uploadManager = require("./manager/SFUploadManager");
const ytHelper = require("./manager/SFImageHelper").ytHelper;

// const mongoose = require('mongoose');
// const SFMongodbManager = require("./manager/SFMongodbManager");
// mongoose.connect('mongodb://127.0.0.1:27017/simfull');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function callback () { console.log("MongoDB Connection OK."); });

let handleDownloadComplete = ( _title, _category, _results ) =>{
    uploadManager.uploadFTP( _title, _category , _results );
};

// 받기
ipcMain.on('community-data', (e, arg) => {
    downloadManager.insertFile( arg.img, arg.title, arg.category, handleDownloadComplete );

    // SFMongodbManager.create({ tit: arg.title, img: arg.img }, function (err, post) {
    // if (err) return handleError(err);
    //     // saved!
    //     console.log("saved!!!", post);
    // });

    // SFMongodbManager.find({}, function(err, posts){
    //     console.log("Get!!!", posts);
    // });
});

ipcMain.on("yt-data", (e, arg) =>{
    ytHelper.convertVideoToGif( arg, handleDownloadComplete );
});