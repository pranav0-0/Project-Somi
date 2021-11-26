window.onload = function get_body() {

    let content = document.getElementsByTagName('*')
    let aWord = /shit|fuck|f*uck|piss|bitch|dick|cock|pussy|suck|anus|anul|asshole|bastard|blowjob|blow job|boob/i;
    let bWord = /rape|handjob|hand job|incest|jerk off|jerk|masturbate|nigger|nude|slut|tits|titties|twat| ass| cum/i;
    var count = 0;
    for (let i = 0; i < content.length; i++) {
        content[i].innerHTML = content[i].innerHTML.replace(aWord,function(x){count+=1;return "****"});
        content[i].innerHTML = content[i].innerHTML.replace(bWord,function(x){count+=1;return "****"});
    }
    console.log(count);
}
