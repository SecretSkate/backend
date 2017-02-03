var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

/* Upload video code snippet
module.exports = function(app, models) {

    var fs = require('fs');
    var AWS = require('aws-sdk');
    var accessKeyId =  process.env.AWS_ACCESS_KEY || "xxxxxx";
    var secretAccessKey = process.env.AWS_SECRET_KEY || "+xxxxxx+B+xxxxxxx";

    AWS.config.update({
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey
    });

    var s3 = new AWS.S3();

    app.post('/upload', function(req, res){

        var params = {
            Bucket: 'makersquest',
            Key: 'myKey1234.png',
            Body: "Hello"
        };

        s3.putObject(params, function (perr, pres) {
            if (perr) {
                console.log("Error uploading data: ", perr);
            } else {
                console.log("Successfully uploaded data to myBucket/myKey");
            }
        });
    });

} */
