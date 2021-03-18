var bitcoinUrl = "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT"
var bitcoinRequest = new XMLHttpRequest(x, vysledek);
bitcoinRequest.open('GET', bitcoinUrl, true);
bitcoinRequest.onload = function(){
    var bitcoin = JSON.parse(bitcoinRequest.responseText);
    var price = (new Intl.NumberFormat('cs-CZ',  {
      style: 'currency',
      currency: 'CZK',
    }).format(parseFloat(bitcoin.price) * 22 * x.value));
    vysledek. innerText = price;
};

var ethereumUrl = "https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT"
var ethereumRequest = new XMLHttpRequest(x, vysledek);
ethereumRequest.open('GET', ethereumUrl, true);
ethereumRequest.onload = function(){
    var ethereum = JSON.parse(ethereumRequest.responseText);
    var price = (new Intl.NumberFormat('cs-CZ',  {
      style: 'currency',
      currency: 'CZK',
    }).format(parseFloat(ethereum.price) * 22 * x.value));
    vysledek. innerText = price;
};

var bitcoincashUrl = "https://api.binance.com/api/v3/ticker/price?symbol=BCHUSDT"
var bitcoincashRequest = new XMLHttpRequest(x, vysledek);
bitcoincashRequest.open('GET', bitcoincashUrl, true);
bitcoincashRequest.onload = function(){
    var bitcoincash = JSON.parse(bitcoincashRequest.responseText);
    var price = (new Intl.NumberFormat('cs-CZ',  {
      style: 'currency',
      currency: 'CZK',
    }).format(parseFloat(bitcoincash.price) * 22 * x.value));
    vysledek. innerText = price;
};

var litecoinUrl = "https://api.binance.com/api/v3/ticker/price?symbol=LTCUSDT"
var litecoinRequest = new XMLHttpRequest(x, vysledek);
litecoinRequest.open('GET', litecoinUrl, true);
litecoinRequest.onload = function(){
    var litecoin = JSON.parse(litecoinRequest.responseText);
    var price = (new Intl.NumberFormat('cs-CZ',  {
      style: 'currency',
      currency: 'CZK',
    }).format(parseFloat(litecoin.price) * 22 * x.value));
    vysledek. innerText = price;
};

vypocet.addEventListener('click', function(){
    let x = parseFloat(document.getElementById('x').value);
    let crypto = document.querySelector('input[name="crypto"]:checked').value;    
    const vysledek = document.getElementById('vysledek');
    bitcoinRequest.open('GET', bitcoinUrl, true);
    ethereumRequest.open('GET', ethereumUrl, true);
    bitcoincashRequest.open('GET', bitcoincashUrl, true);
    litecoinRequest.open('GET', litecoinUrl, true);

    if (crypto == 'bitcoin'){
      bitcoinRequest.send(x, vysledek);
    }

    if (crypto == 'ethereum'){
      ethereumRequest.send(x, vysledek);
    }

    if (crypto == 'bitcoincash'){
      bitcoincashRequest.send(x, vysledek);
    }

    if (crypto == 'litecoin'){
      litecoinRequest.send(x, vysledek);
    }
    
});