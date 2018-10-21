var express = require('express');
// var qr_image = require('qr-image');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: '果号贩'});
});


module.exports = router;
