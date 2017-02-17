var express = require('express');
var router = express.Router();
var dotenv = require('dotenv').config();
var aws = require('aws-sdk');
var knex = require('../db/db_connection');

const S3_BUCKET = process.env.S3_BUCKET;

router.get('/sign-s3', (req, res) => {
  const s3 = new aws.S3();
  const fileName = req.query['file-name'];
  const fileType = req.query['file-type'];
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read'
  };
  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if(err){
      console.log(err);
      return res.end();
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    };
    res.write(JSON.stringify(returnData));
    res.end();
  });
});

router.post('/videos', (req, res) => {
  console.log(req.body);
  knex('video')
    .insert(req.body)
    .returning('*')
    .then(function(result) {
    res.send(result[0])
  })
})


module.exports = router;
