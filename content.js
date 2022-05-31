if(document.readyState=="complete" || document.readyState=="interactive"){
    textReplace();
}

var count = 0;
var countFlag = false;
var linkFlag = false;
var conContent = chrome.runtime.connect({name: "connected-content"});

function textReplace(){
    chrome.storage.local.get(function(allWords) {
        var content = document.getElementsByTagName("span");
        var nonRegexWord = allWords.word;
        var aWord = new RegExp(nonRegexWord, "i");
        if(window.location.href.includes('google.com/search?'))
        googleSearchLink(aWord,content);
        else if(window.location.href.includes('github.io')) {
            var allContent = document.getElementsByClassName("words");
            for (let i = 0; i < allContent.length; i++) {
                allContent[i].innerText = allContent[i].innerText.replace(aWord,function(x){count+=1;return " **** "});
            }
            console.log('github');
            setTimeout(textReplace(),1000);
        }
        else {
            for (let i = 0; i < content.length; i++) {
                content[i].innerHTML = content[i].innerText.replace(aWord,function(x){count+=1;return " **** "});
            }
        }
        // console.clear();
        console.log("Text replaced: ");
        console.log(count);
        conContent.postMessage({count: count});
        if(count>100 && countFlag == false){
            countFlag = true;
            alert("This webpage contains sensitive content. It is recommended to leave this site.");
        }
    })
}

function googleSearchLink(aWord,content) {
    var h3Content =  document.getElementsByTagName("h3");
    try {
        console.log("tried");
        for (let i = 0; i < content.length; i++) {
            content[i].innerHTML = content[i].innerHTML.replace(aWord,function(x){count+=1;return " **** "});
            h3Content[i].innerHTML = h3Content[i].innerHTML.replace(aWord,function(x){count+=1;return " **** "});
            image.png
        }
    } catch (TypeError) {
        for (let i = 0; i < content.length; i++) {
            content[i].innerHTML = content[i].innerHTML.replace(aWord,function(x){count+=1;return " **** "});
            // content[i].innerHTML = content[i].innerHTML.replace(bWord,function(x){count+=1;return " **** "});
        }
    }
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