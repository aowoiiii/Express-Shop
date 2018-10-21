var express = require('express');
var bodyParser = require('body-parser');
var qrcode = require('./qrcode');
var router = express.Router();


router.get('/', function (req, res, next) {
    res.send('参数不正确 请返回上一个页面');
});

router.post('/', function (req, res, next) {

    // res.send('POST支付');
    var response = {
        "area_radio": req.body.area_radio,
        "quantity_radio": req.body.quantity_radio,
    };
    res.end(JSON.stringify(response));
    module.exports.paymsg = JSON.stringify(response);
});


module.exports = router;

