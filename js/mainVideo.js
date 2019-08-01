var actual = 0;
var total = 173;

$(document).ready(function() {
    azar();
});


$('#sorpresa').click(function() {
    azar();
});

function random() {
    var x = Math.floor((Math.random() * total) + 1);
    return x;
}

function azar() {
    actual = random();
    muestraVideo()
}

function muestraVideo() {
    var youtube = JSON.stringify(texts[actual-1].youtube).replace(/"/g,"");
    var idVideo = youtube.substr(youtube.indexOf("=") + 1)
    loadIframe('video','https://www.youtube.com/embed/' + idVideo);
}

function loadIframe(iframeName, url) {
    var $iframe = $('#' + iframeName);
    if ( $iframe.length ) {
        $iframe.attr('src',url);   
        return false;
    }
    return true;
}