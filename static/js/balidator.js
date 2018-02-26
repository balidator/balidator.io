function check_eth() {
    document.getElementById('trueAlert').style.visibility = 'hidden';
    document.getElementById('falseAlert').style.visibility = 'hidden';

    var eth_address = document.getElementById('ethereum').value;
    var response = httpGet('/api/ethereum/' + eth_address);

    var obj = JSON.parse(response);
    if (obj['valid_address']) {
        document.getElementById('trueAlert').style.visibility = 'visible';
        document.getElementById('true_eth_address').innerText = eth_address;
    }
    else  {
        document.getElementById('falseAlert').style.visibility = 'visible';
        document.getElementById('false_eth_address').innerText = eth_address;
    }
}

function check_btc() {
    document.getElementById('trueAlert').style.visibility = 'hidden';
    document.getElementById('falseAlert').style.visibility = 'hidden';

    var btc_address = document.getElementById('bitcoin').value;
    var response = httpGet('/api/bitcoin/' + btc_address);

    var obj = JSON.parse(response);
    if (obj['valid_address']) {
        document.getElementById('trueAlert').style.visibility = 'visible';
        document.getElementById('true_btc_address').innerText = btc_address;
    } else {
        document.getElementById('falseAlert').style.visibility = 'visible';
        document.getElementById('false_btc_address').innerText = btc_address;
    }
}

function check_xrp() {
    document.getElementById('trueAlert').style.visibility = 'hidden';
    document.getElementById('falseAlert').style.visibility = 'hidden';

    var xrp_address = document.getElementById('ripple').value;
    var response = httpGet('/api/ripple/' + xrp_address);

    var obj = JSON.parse(response);
    if (obj['valid_address']) {
        document.getElementById('trueAlert').style.visibility = 'visible';
        document.getElementById('true_xrp_address').innerText = xrp_address;
    } else {
        document.getElementById('falseAlert').style.visibility = 'visible';
        document.getElementById('false_xrp_address').innerText = xrp_address;
    }

}

function check_xmr() {
    document.getElementById('trueAlert').style.visibility = 'hidden';
    document.getElementById('falseAlert').style.visibility = 'hidden';

    var xmr_address = document.getElementById('monero').value;
    var response = httpGet('/api/monero/' + xmr_address);

    var obj = JSON.parse(response);
    if (obj['valid_address']) {
        document.getElementById('trueAlert').style.visibility = 'visible';
        document.getElementById('true_xmr_address').innerText = xmr_address;
    } else {
        document.getElementById('falseAlert').style.visibility = 'visible';
        document.getElementById('false_xmr_address').innerText = xmr_address;
    }

}


function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}