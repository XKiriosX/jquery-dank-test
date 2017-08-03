var para = document.querySelector("p");
function isInside(node, target) {
    for (; node != null; node = node.parentNode)
        if (node == target) return true;
}
        
para.addEventListener("mouseover", function(event) {
    if (!isInside(event.relatedTarget, para))
        para.style.color = "red";
});
            
para.addEventListener("mouseout", function(event) {
    if (!isInside(event.relatedTarget, para))
        para.style.color = "";
});

//WORKING FRAGMENT

//SHOW PRE

$(function() {
    $(window(function(){
        $("pre").css("display: block");
    }));
});

//INSTAGRAM LOGO DANK MLG SCRIPTS

var audio = new Audio("resources/AncientReality - Major League Can Can.mp3") //DO NOT UNCOMMENT IT!!!!!!!!
audio.volume = 0.04;

$("img").mouseover(function() {
    $("body").css({
        "background": "url(resources/ezgif.com-resize.gif)", "background-size": "100% 100%"
    });
    $(".fuk-u").css("display", "inline");
    audio.play(); //DO NOT UNCOMMENT IT!!!!!!!!
});

$("img").mouseout(function() {
    $("body").css({
        "background-image": "", 
        "background-size": ""
    });
    $(".fuk-u").css("display", "");
    audio.pause(); //DO NOT UNCOMMENT IT!!!!!!!!
});

$("img").click(function() {
    $(this).animate({
        left: '250px',
        width: '150px',
        height: '150px'
    });
});