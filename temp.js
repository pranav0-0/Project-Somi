let aWord = /shit| fuck| piss| bitch| ass/i;
var count = 0;
let content = ["ape", "animal", "shit", "lol", "bitch"/i]
for (let i = 0; i < content.length; i++) {
    console.log(content[i])
    if (content[i] == aWord) {
        count++
    }
}
console.log(count)