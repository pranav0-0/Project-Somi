if(document.readyState=="complete"){
    textReplace();
}
var count=0;

chrome.storage.local.get(function(result) {
    console.log('Get func\nValue is set to ');
    console.log(result.test);

})

var conContent = chrome.runtime.connect({name: "connected-content"});
var aWord = /toast/i;

function textReplace() {
    var selectedSpan = document.getElementsByTagName("span");
    for (let i = 0; i < selectedSpan.length; i++) {
        selectedSpan[i].innerHTML = selectedSpan[i].innerText.replace(aWord,function(x){count+=1;return " *** "});
    }
    conContent.postMessage({count: count});
    console.log("No. Text replaced: " + count);
}

var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if(mutation.addedNodes.length || mutation.removedNodes.length) {
            textReplace();
        }
    })
})
if(document.readyState=="complete"){
observer.disconnect();
}
else
observer.observe(document.body, {
    childList: true,
    // subtree: true,
});