getCount();
function getCount() {
    chrome.storage.local.get(function(result) {
        document.getElementById("number").innerHTML = result.test;
    })
}

// menu button
document.querySelector('.wrapper').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('is-active');
  });