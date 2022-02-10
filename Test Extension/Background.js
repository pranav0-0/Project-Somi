words = {
    test: 69
}
var ab = /suck |dick |fuck |shit/i;

chrome.storage.local.set({test: words}, function() {
    console.log('Set func\nValue is set');
})

chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(msg) {
        console.log("Message received: " + msg.count);
    })
})