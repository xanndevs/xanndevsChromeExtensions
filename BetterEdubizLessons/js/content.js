
window.addEventListener("load", function() {
    // Your code to run when all assets are loaded
    console.log("All assets have been loaded");
    this.setTimeout(changeInnerHTML, 1000);
});

chrome.runtime.onMessage.addListener(

    function(request, sender, sendResponse) {
        if (request.action == 'popupButtonClicked') {
            alert(1);
        }
    }
);

function changeInnerHTML(){
    console.log("aaaaaAAA!!");
    a = document.getElementById("videojs-player");
    a.style.position = "fixed";
    a.style.width = "90vw";
    a.style.height = "90vh";            
    a.style.aspectRatio = "1.7777777777";
    a.style.left = "5vw";
    a.style.padding = "0px";
    a.style.margin = "0px";
    a.style.top = "50vh";
    a.style.transform = "translateY(-50%)";
    a.style.height = "100%";
    
    //video container (ortalamak için)
    b = document.getElementById("videojs-player_html5_api");
    b.style.position = "absolute"
    b.style.height = "auto";
    b.style.aspectRatio = "1.7777777777";
    b.style.bottom = "0px";
    b.style.top = "50%";
    b.style.transform = "translateY(-50%)";

    //alt bar
    c = document.getElementsByClassName("vjs-control-bar")[0];
    c.style.marginTop = "0px";
    c.style.position = "fixed"
    c.style.marginBottom = "0px";
    c.style.bottom = "clamp(0px, calc(45vh - 24.8vw), 60vh)";

    // niye ekledim unuttum üstte idsini seçtiğim şeyi silmem gerekti ama
    d = document.getElementById("videojs-player");

    //arkaplan resmi
    e = document.getElementsByClassName("fixed-background")[0];
    e.outerHTML = "";
    
    //arkaplanı silince gözüken şey
    f = document.getElementsByTagName("main")[0];
    f.style.backgroundColor = "black";
    
    document.head.innerHTML += "<style>.xanndev-li{background-color:#ffffff;}</style>";

    //arka sol ve sağda kalan son beyaz parça 
    g = document.getElementsByClassName("form-side")[0];
    g.style.backgroundColor = "black";
    
    //oynatma hızı butonu
    h = document.getElementsByClassName("vjs-playback-rate vjs-menu-button vjs-menu-button-popup vjs-control vjs-button")[0]
    h.classList.remove("vjs-hidden")

    playbackRate = document.getElementsByClassName("vjs-playback-rate vjs-menu-button vjs-menu-button-popup vjs-control vjs-button")[0];
    playbackMenu = playbackRate.getElementsByClassName("vjs-menu-content")[0];
    playbackMenu.innerHTML = "<li class='xanndev-li' onclick='b = document.getElementById(`videojs-player_html5_api`);b.playbackRate = 0.5;document.getElementsByClassName(`vjs-playback-rate-value`)[0].innerHTML=`0.5x`'>0.5x</li><li class='xanndev-li' onclick='b = document.getElementById(`videojs-player_html5_api`);b.playbackRate = 0.75;document.getElementsByClassName(`vjs-playback-rate-value`)[0].innerHTML=`0.55x`'>0.75x</li><li class='xanndev-li' onclick='b = document.getElementById(`videojs-player_html5_api`);b.playbackRate = 1;document.getElementsByClassName(`vjs-playback-rate-value`)[0].innerHTML=`1x`'>1x</li><li class='xanndev-li' onclick='b = document.getElementById(`videojs-player_html5_api`);b.playbackRate = 1.5;document.getElementsByClassName(`vjs-playback-rate-value`)[0].innerHTML=`1.5x`'>1.5x</li><li class='xanndev-li' onclick='b = document.getElementById(`videojs-player_html5_api`);b.playbackRate = 2;document.getElementsByClassName(`vjs-playback-rate-value`)[0].innerHTML=`2x`'>2x</li><li class='xanndev-li' onclick='b = document.getElementById(`videojs-player_html5_api`);b.playbackRate = 3;document.getElementsByClassName(`vjs-playback-rate-value`)[0].innerHTML=`3x`'>3x</li><li class='xanndev-li' onclick='b = document.getElementById(`videojs-player_html5_api`);b.playbackRate = 5;document.getElementsByClassName(`vjs-playback-rate-value`)[0].innerHTML=`5x`'>5x</li>"

    playbackMenu = document.getElementsByClassName("vjs-menu-content")[0];
    playbackMenu.style.backgroundColor = "#ffffff";


    document.addEventListener('fullscreenchange', fullScreenChanged);
}

function fullScreenChanged(){
    const isFullscreen = document.fullscreenElement !== null;
    c = document.getElementsByClassName("vjs-control-bar")[0];
    if(isFullscreen){
        c.style.top = "unset";
        c.style.bottom = "10px";
    }
    else{
        c.style.top = "calc(45vh + 24.8vw)";
        c.style.bottom = "unset";
    }
}