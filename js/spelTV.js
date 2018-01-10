var canvas,
    context,
    canvasMiddenY,
    canvasMiddenX;

//afbeeldingen inladen
var backgroundIpad = new Image();
var vleermuis = new Image();
var bigfoot = new Image();
var spin = new Image();
var zombieSpook = new Image();
backgroundIpad.src = '../image/achtergrondIpad.png';
vleermuis.src = '../image/vleermuis.png';
bigfoot.src = '../image/bigFoot.png';
spin.src = '../image/spin.png';
zombieSpook.src = '../image/zombieSpook.png';


window.addEventListener("load", eventWindowLoaded);

function randomX(){
     var x = Math.floor(Math.random() * 1280) + 20;
    return x;
}
function randomY(){
    var y = Math.floor(Math.random() * 740) + 30;
    return y;
}
function tekenVleermuis(){
    context.drawImage(vleermuis, randomX(), randomY(), 120, 70);
}
function tekenSpin(){
    context.drawImage(spin, randomX(), randomY(), 140, 90);
}
function tekenBigfoot(){
    context.drawImage(bigfoot, randomX(), randomY(), 70, 90);
}
function tekenZombieSpook(){
    context.drawImage(zombieSpook, randomX(), randomY(), 70, 100);
}
var monsters = [tekenBigfoot,tekenSpin,tekenVleermuis,tekenZombieSpook];



function eventWindowLoaded() {
    initCanvas();
}

function initCanvas() {
    canvas = document.getElementById("canvas");
    if (!canvas || !isCanvasSupported) {
        alert("broken");
        return;
    }

    context = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;



    //functie om fullscreen te gaan.
    //  canvas.addEventListener("click", fullscreen);


    //Start the application
    startTheApp();
}



function startTheApp() {
    //grootte van speelveld bepalen.
    canvasBreedte = window.innerWidth;
    canvasHoogte = window.innerHeight;
    //midden van speelveld bepalen.
    canvasMiddenX = window.innerWidth / 2;
    canvasMiddenY = window.innerHeight / 2;

    //achtergrond plaatsen.

    context.drawImage(backgroundIpad, 0, 0, canvasBreedte, canvasHoogte);
    
    setInterval(function(){
        monsters[Math.floor(Math.random()*monsters.length)]();
    }, 2000);
}







function fullscreen() {
    var el = document.getElementById('canvas');

    if (el.webkitRequestFullScreen) {
        el.webkitRequestFullScreen();
    } else {
        el.mozRequestFullScreen();
    }
}


function isCanvasSupported() {
    var elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
}
