//este código se activa en el qrcode.html
//qrcode.html es una ventania que se abre al tocar el address, para mostrar el código QR de dicha address
var qrcode = new QRCode("qrcode");
var rawaddresFromlocalStorage = JSON.parse(localStorage.getItem("rawaddress"));
var elText = rawaddresFromlocalStorage;
text.value=elText;
function makeCode () {      
    if (!elText) {
        alert("input an address");
        text.focus();
        return;
    }
    qrcode.makeCode(elText);
}
makeCode();