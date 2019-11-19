var express = require('express');
var router = express.Router();
var controller = require('./survey.controller');

router.post('/', controller.create);

module.exports = router;