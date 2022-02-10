getCount();
function getCount() {
    chrome.storage.local.get(function(result) {
        document.getElementById("number").innerHTML = result.test;
    })
}
