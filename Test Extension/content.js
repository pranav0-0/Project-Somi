// if(document.readyState=="complete"){
//     getFunc();
// }
getFunc()
function getFunc() {
    chrome.storage.local.get(function(result) {
        var count = 0;
        var content = document.getElementsByTagName("span");
        aWord = result.test;
        var reWord = new RegExp(aWord, "i");
        console.log(aWord);
        console.log(reWord);
        for (let i = 0; i < content.length; i++) {
            content[i].innerHTML = content[i].innerText.replace(reWord,function(x){count+=1;return " **** "});
        }
        console.log("Text replaced: ");
        console.log(count);
    })
}

// var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
// const observer = new MutationObserver(function(mutations) {
//     mutations.forEach(function(mutation) {
//         if(mutation.addedNodes.length || mutation.removedNodes.length) {
//             getFunc();
//         }
//     })
// })
// if(document.readyState=="complete"){
// observer.disconnect();
// }
// else
// observer.observe(document.body, {
//     childList: true,
//     // subtree: true,
// });