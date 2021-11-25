// console.log("Test Test");
// let content = document.body.innerHTML;
window.onload = function get_body() {

    let content = document.getElementsByTagName('body')
    for (let i = 0; i < content.length; i++) {
        // console.log(content[i].innerHTML);
        if (content[i].innerHTML.includes("Chutiya")) {
            content[i].innerHTML = content[i].innerHTML.replace("Chutiya", "***");
        }
    }
}   
