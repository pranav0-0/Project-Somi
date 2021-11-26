window.onload = function get_body() {

    let content = document.getElementsByTagName('*')
    let aWord = /shit| fuck| piss| bitch| ass/i;
    var count = 0;
    for (let i = 0; i < content.length; i++) {
        content[i].innerHTML = content[i].innerHTML.replace(aWord, "*****",count++);
    }
    console.log(count);
}
