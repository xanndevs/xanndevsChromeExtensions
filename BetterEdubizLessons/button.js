x = document.getElementById('changeContent');
x.addEventListener('click', function() {
    var newContent = document.getElementById('newContent').value;
    chrome.runtime.sendMessage({ action: "popupButtonClicked", data: newContent });
  });

  
  