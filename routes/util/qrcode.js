var express = require('express');
var qr_image = require('qr-image');
var router = express.Router();

router.get('/', function (req, res, next) {
    /**
     * 涉及到先后顺序，暂时使用延迟0.5秒，生成支付码
     *
     * */

    setTimeout(function () {
        var payinfo = require('./pay').paymsg
        qrcode(payinfo, res)
    }, 500)

});


/**
 * 二维码生成处理
 * str需要生成的字符串
 * res生成的对象
 *
 * */

var qrcode = function (str, res) {
    var temp_qrcode = qr_image.image(str);
    res.type('png');
    temp_qrcode.pipe(res);
}


module.exports = router;
module.exports.qrcode = qrcode
