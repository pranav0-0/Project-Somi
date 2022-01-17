chrome.tabs.onUpdated.addListener(buttonClicked)
  function buttonClicked() {
  console.log("button was clicked");
}

chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
  alert("Total words blocked " + response);
});
