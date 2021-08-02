let mac;

let newMac;

function hexTodec(hex) { 
  return parseInt(hex,16); 
}

// newMac = hexTodec(mac);

// newMac += 1;

function start(hex) {
  return Number(hex).toString(16);
}

document.getElementById('btn-mac').addEventListener('click', () => {
    mac = document.getElementById('mac-before').value;
    // document.getElementById('mac-before').innerText = mac;
    console.log(mac);
    newMac = hexTodec(mac);
    newMac += 1;
    console.log(newMac);
    console.log(start(newMac));
    document.getElementById('output-after').innerText = start(newMac);
})
