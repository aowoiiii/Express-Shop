var quantity_radio = document.querySelectorAll('.quantity_radio')
var area_radio = document.querySelectorAll('.area_radio')
var qrcode_window = document.querySelector('.qrcode')
var areaValue = 'chn', quantityValue = '1' //默认值

function areaClick(e, a) {
    area_radio.forEach(x => {
        x.classList.remove("radio_click")
    })
    e.classList.add("radio_click")
    areaValue = a
    console.log('改选' + a)
}

function quantityClick(e, q) {
    quantity_radio.forEach(x => {
        x.classList.remove("radio_click")
    })
    e.classList.add("radio_click")
    quantityValue = q
    console.log('改选' + q)

}

function submitClick() {
    var randomNum = "";
    for (var i = 0; i < 6; i++) {
        randomNum += Math.floor(Math.random() * 10);
    }
    qrcode_window.style.display = 'block'
    document.querySelector('.qrcode_img').setAttribute('src', '/qrcode?' + randomNum)
}