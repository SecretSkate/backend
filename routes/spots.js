const express = require('express');
const router = express.Router();
const knex = require('../db/db_connection');
const bodyparser = require('body-parser')

require('dotenv').config()

router.get('/', function(req, res, next) {
    console.log("Something");
    knex('skate_spot')
        .then(function(data) {
            res.json(data)
        })
});

router.get('/video', function(req, res, next) {
    console.log("Something");
    knex.from('video')
        .innerJoin('skate_spot', 'video.id', 'skate_spot.video_id')
        .then(function(data) {
            res.json(data)
        })
});

module.exports = router;
