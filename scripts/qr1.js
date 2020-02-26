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
