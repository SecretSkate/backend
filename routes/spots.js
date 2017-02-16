const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  console.log('fun');
  res.json(req.body);
});

module.exports = router;
