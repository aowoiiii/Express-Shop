var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('record', {title: '果号贩'});

});

module.exports = router;
