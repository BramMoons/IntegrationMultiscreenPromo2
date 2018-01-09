$(document).ready(function () {
  var punten = 0;
  var leven = 5;

  randomMonster();

  $("body").on("click", function (e) {
    leven = leven - 1;
    $("#leven").text(leven);
    if (leven === 0) {
      window.location.href = "../pages/gameOver.html";
    }
  });

  $("body").on("click",
    "#monster",
    function (e) {
      var x = Math.floor((Math.random() * 85) + 1) + "%";
      var y = Math.floor((Math.random() * 50) + 1) + "%";

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

  var x = Math.floor((Math.random() * 85) + 1) + "%";
  var y = Math.floor((Math.random() * 50) + 1) + "%";


  $("#monster").css({
    "margin-top": y,
    "margin-left": x
  });
}