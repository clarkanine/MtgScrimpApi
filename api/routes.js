var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('Welcome to scrimp api');
});

router.use('/players', require('./players').router);

module.exports.router = router;