chrome.runtime.onConnect.addListener(function(port) {
  port.onMessage.addListener(function(msg) {
    chrome.storage.local.set({test: msg.count}, function() {
      console.log('Set func initiated');
    })
  })
})