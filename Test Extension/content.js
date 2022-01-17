// alert("test")
let selectedText = document.getElementsByTagName("span");
var count=0;
for (let i = 0; i < selectedText.length; i++) {
    selectedText[i].innerHTML = selectedText[i].innerText.replace(/WITH/i,function(x){count+=1;return "****"});
}
console.log("No. Text replaced: " + count);