let linkArr = ['twitter.com', 'youtube.com', 'instagram.com', 'facebook.com'];
flag = false;
for (let i = 0; i < linkArr.length; i++) {
  let link = linkArr[i];
  if(window.location.href.includes(link)){
    flag = true;
    let url = "href";
    if(window.location.href.includes('twitter'))
        url = "Twitter";
    else if(window.location.href.includes('instagram.com'))
        url = "Instagram";
    else if(window.location.href.includes('facebook.com'))
      url = "Facebook";
    else
      url = "Youtube";
    alert("Due to extension's limitations Test project is not supported on " + url);
  }
}

if(flag == false){
  let content = document.getElementsByName("span");
  let aWord = /shit|fuck|F*ck |piss|bitch|dick|cock|pussy|suck|anus|anul|asshole|bastard|blowjob|blow job|boob/i;
  let bWord = /rape|handjob|hand job|incest|jerk off|jerk|masturbate|nigger|nude|slut|tits|titties|twat| cum/i;
  var count = 0;
  for (let i = 0; i < content.length; i++) {
      content[i].innerHTML = content[i].innerHTML.replace(aWord,function(x){count+=1;return "****"});
      content[i].innerHTML = content[i].innerHTML.replace(bWord,function(x){count+=1;return "****"});
      // location.reload();
  }
  console.clear();
  console.log("Text replaced: ");
  console.log(count);
  chrome.runtime.sendMessage(count);
}