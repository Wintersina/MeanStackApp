
var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('');

router.get('/tasks', function(req, res, next){
    res.send('tasks API');
});

module.exports = router;
