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
  canvas.addEventListener("click", fullscreen);

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



function allowDrop(e) {
  e.preventDefault();
}

function drag(e) {
  //store the position of the mouse relativly to the image position
  e.dataTransfer.setData("mouse_position_x", e.clientX - e.target.offsetLeft);
  e.dataTransfer.setData("mouse_position_y", e.clientY - e.target.offsetTop);

  e.dataTransfer.setData("image_id", e.target.id);
}

function drop(e) {
  e.preventDefault();
  var image = document.getElementById(e.dataTransfer.getData("image_id"));

  var mouse_position_x = e.dataTransfer.getData("mouse_position_x");
  var mouse_position_y = e.dataTransfer.getData("mouse_position_y");

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  // the image is drawn on the canvas at the position of the mouse when we lifted the mouse button
  ctx.drawImage(image, e.clientX - canvas.offsetLeft - mouse_position_x, e.clientY - canvas.offsetTop - mouse_position_y);
}

function convertCanvasToImage() {
  var canvas = document.getElementById('canvas');

  var image_src = canvas.toDataURL("image/png");
  window.open(image_src);

}
