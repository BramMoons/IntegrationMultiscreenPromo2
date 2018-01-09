$(document).ready(function () {
  var punten = 0;

  randomMonster();

  $("#monster").click(function () {
    $("#monster").offset({
      top: Math.random() * 800,
      left: Math.random() * 1200
    });
    punten = punten + 1;
    $("#toonPunten").text(punten);
  });

});

function randomMonster() {

  $("#spel").html("<img id=monster src='../images/vleermuis.png'>");

  var x = (Math.floor((Math.random() * 50) + 1)) + "%";
  var y = (Math.floor((Math.random() * 85) + 1)) + "%";

  $("#monster").css({
    "margin-top": x,
    "margin-left": y
  });
}