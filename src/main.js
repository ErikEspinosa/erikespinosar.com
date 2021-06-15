$(function(){
    $.scrollify({
        section : ".scrollify",
        interstitialSection : "#contact, footer",
        easing : "easeOutExpo",
        scrollSpeed : 800
    });
});

$('.next').click(function(){
    $.scrollify.next();
});

new WOW().init();

function openModal(param){
    modalScreen = document.getElementById(param);
    modalScreen.style.display = "inherit";
}
function closeModal(param){
    modalScreen = document.getElementById(param);
    modalScreen.style.display = "none";
}


/*
function fullScreen(params){
    var screenHeight = window.innerHeight;
    for( i=0; i<params.length; i++ ){
        var section = document.getElementById(params[i]);
        section.style.height = screenHeight + 'px';
    }
}
const elements = ['splash', 'about', 'web-design', 'graphic-design', 'e-commerce', 'quote'];

window.onload = function(){
    fullScreen(elements);
}
window.onresize = function(){
    this.fullScreen(elements);
}*/