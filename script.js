let mac;
let newMac;

function hex2dec(hex) { 
  return parseInt(hex,16); 
}

function dec2hex(hex) {
  return Number(hex).toString(16);
}

document.getElementById('btn-mac').addEventListener('click', () => {
    mac = document.getElementById('mac-before').value;
    newMac = hex2dec(mac);
    newMac += 1;
    document.getElementById('mac-after').innerText = dec2hex(newMac);
})
