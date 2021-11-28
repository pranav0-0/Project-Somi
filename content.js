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

    alert('Due to '+ url +"'s security policy Project Somi is not supported on this website");
  }
}

if(flag == false){
  let content = document.getElementsByTagName('*')
  let aWord = /shit|fuck|f*uck|piss|bitch|dick|cock|pussy|suck|anus|anul|asshole|bastard|blowjob|blow job|boob/i;
  let bWord = /rape|handjob|hand job|incest|jerk off|jerk|masturbate|nigger|nude|slut|tits|titties|twat| cum/i;
  var count = 0;
  for (let i = 0; i < content.length; i++) {
      content[i].innerHTML = content[i].innerHTML.replace(aWord,function(x){count+=1;return "****"});
      content[i].innerHTML = content[i].innerHTML.replace(bWord,function(x){count+=1;return "****"});
  }
  console.log(count);
}