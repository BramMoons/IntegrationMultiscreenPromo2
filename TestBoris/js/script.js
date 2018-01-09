$(document).ready(function () {
  var punten = 0;

  randomMonster();

  $("#monster").click(function () {

    var x = Math.floor((Math.random() * 80) + 1) + "%";
    var y = Math.floor((Math.random() * 80) + 1) + "%";

    $("#monster").css({
      "margin-top": y,
      "margin-left": x

    });
    punten = punten + 1;
    $("#toonPunten").text(punten);
  });

});

function randomMonster() {

  $("#spel").html("<img id=monster src='../images/vleermuis.png'>");

  var x = Math.floor((Math.random() * 80) + 1) + "%";
  var y = Math.floor((Math.random() * 80) + 1) + "%";


  $("#monster").css({
    "margin-top": y,
    "margin-left": x
  });
}