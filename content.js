var count = 0;
var conContent = chrome.runtime.connect({name: "connected-content"});
textReplace();

function textReplace(){
    let content = document.getElementsByTagName("span");
    let aWord = /shit|fuck|F*ck |piss|bitch|dick|cock|pussy|suck|anus|anul|asshole|bastard|blowjob|blow job|boob/i;
    let bWord = /rape|handjob|hand job|incest|jerk off|jerk|masturbate|nigger|nude|slut|tits|titties|twat| cum/i;
    for (let i = 0; i < content.length; i++) {
        content[i].innerHTML = content[i].innerHTML.replace(aWord,function(x){count+=1;return "****"});
        content[i].innerHTML = content[i].innerHTML.replace(bWord,function(x){count+=1;return "****"});
    }
    console.clear();
    console.log("Text replaced: ");
    console.log(count);
    conContent.postMessage({count: count});
}