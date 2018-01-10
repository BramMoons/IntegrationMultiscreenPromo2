$(document).ready(function () {
  var punten = 0;
  var leven = 5;
  var punt = document.getElementById('punt');

  randomMonster();

  if (body.mouseDown())
    console.log('jeeuj');
}

//Click naast monster ----------------------------------------------------------------

$("#bodySpel").on("click", function (e) {
  leven = leven - 1;
  $("#leven").text(leven);
  if (leven === 0) {
    window.location.href = "../pages/gameOver.html";
  }

  $("li").last().remove();

});

//Click Monster -----------------------------------------------------------------

document.body.img.onmousedown = (function () {
  console.log('jeeuj');
})

$("#monster").on("click",
  function (e) {
    punt.play();
    var x = Math.floor((Math.random() * 85) + 1) + "%";
    var y = Math.floor((Math.random() * 50) + 1) + "%";

    $("#monster").css({
      "margin-top": y,
      "margin-left": x
    });

    // Er wordt zowel op de body als de image geklikt, waardoor het leven ook naar beneden gaat.
    leven = leven + 1;
    punten = punten + 1;
    $("#toonPunten").text(punten);
  });
});

// Monster -----------------------------------------------------------------

function randomMonster() {

  $("#spel").html("<img id=monster src='../images/vleermuis.png'>");

  var x = Math.floor((Math.random() * 85) + 1) + "%";
  var y = Math.floor((Math.random() * 50) + 1) + "%";


  $("#monster").css({
    "margin-top": y,
    "margin-left": x
  });
}