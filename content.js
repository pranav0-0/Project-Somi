window.onload = function get_body() {

    let content = document.getElementsByTagName('*')
    let aWord = /shit|fuck|f*uck|piss|bitch|dick|cock|pussy|suck|anus|anul|asshole|bastard|blowjob|blow job|boob|cum|rape|handjob|hand job|incest|jerk off|jerk|masturbate|nigger|nude|slut|tits|titties|twat| ass/i;
    var count = 0;
    for (let i = 0; i < content.length; i++) {
        content[i].innerHTML = content[i].innerHTML.replace(aWord, "****");
    }
    console.log(count);
}
