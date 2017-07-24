const electron = require('electron');
const { ipcMain } = electron;
const downloadManager = require("./manager/SFDownloadManager");
const uploadManager = require("./manager/SFUploadManager");
const ytHelper = require("./manager/SFImageHelper").ytHelper;

let handleDownloadComplete = ( _title, _category, _results ) =>{
    uploadManager.uploadFTP( _title, _category , _results );
};

// 받기
ipcMain.on('community-data', (e, arg) => {
    downloadManager.insertFile( arg.img, arg.title, arg.category, handleDownloadComplete );
});

ipcMain.on("yt-data", (e, arg) =>{
    ytHelper.convertVideoToGif( arg, handleDownloadComplete );
});