words = {
    test: /the/i,
}
var ab = /is/i;

chrome.storage.local.set({test: ab}, function() {
    console.log('Set func\nValue is set');
})

chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(msg) {
        console.log("Message received: " + msg.count);
    })
})