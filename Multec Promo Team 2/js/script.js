//monster afbeeldingen paths in variabelen steken.
var vleermuis = '../images/vleermuis.png';
var bigfoot = '../images/bigFoot.png';
var spin = '../images/spin.png';
var zombieSpook = '../images/zombieSpook.png';
//alle monsters in een array steken.
var monsters = [vleermuis, bigfoot, spin, zombieSpook];

var spelerNaam = localStorage.getItem('userName');
var punten = 0;
var leven = 5;


$(document).ready(function () {
    
//naam van speler weergeven
    $("#speler").html(spelerNaam);
    
    var punt = document.getElementById('punt');
    var clickedMonster;

    eersteMonster();

    //Click naast monster ----------------------------------------------------------------
    $("#bodySpel").on("click", function (e) {

        clickedMonster = 0;
        leven = leven - 1;
        if (leven === 0) {
            window.location.href = "../pages/gameOver.html";
        } else if (leven == 4) {
            $("#1").remove();
        } else if (leven == 3) {
            $("#2").remove();
        } else if (leven == 2) {
            $("#3").remove();
        } else if (leven == 1) {
            $("#4").remove();
        }
    });

//Click Monster -----------------------------------------------------------------
    $("#monster1").on("click",
        function (e) {
            clicked("#monster1");
        });

    $("#monster2").on("click",
        function (e) {
            clicked("#monster2");
        });

    $("#monster3").on("click",
        function (e) {
            clicked("#monster3");
        });

    $("#monster4").on("click",
        function (e) {
            clicked("#monster4");
        });
    
});

// Monster -----------------------------------------------------------------

function eersteMonster() {

    $("#spel").append("<img class='monster' id='monster1' src='../images/vleermuis.png'>");

    $("#spel").append("<img class='monster' id='monster2' src='../images/bigfoot.png'>");

    $("#spel").append("<img class='monster' id='monster3' src='../images/spin.png'>");

    $("#spel").append("<img class='monster' id='monster4' src='../images/zombieSpook.png'>");


    $("#monster1").css({
        "margin-top": randomY(),
        "margin-left": randomX()
    });
    $("#monster2").css({
        "margin-top": randomY(),
        "margin-left": randomX()
    });
    $("#monster3").css({
        "margin-top": randomY(),
        "margin-left": randomX()
    });
    $("#monster4").css({
        "margin-top": randomY(),
        "margin-left": randomX()
    });
}

// random nummer functie -----------------------------------------------------------------

function randomX() {
    return Math.floor((Math.random() * 60) + 1) + "%";
}

function randomY() {
    return Math.floor((Math.random() * 25) + 1) + "%";
}


// random nieuw monster -----------------------------------------------------------------

function clicked(monsterNummer) {
   
    punt.play();

    $(monsterNummer).css({
        "margin-top": randomY,
        "margin-left": randomX
    });

    // Er wordt zowel op de body als de image geklikt, waardoor het leven ook naar beneden gaat.
    leven = leven + 1;
    punten = punten + 1;
    $("#toonPunten").text("Score: " + punten);
    console.log(punten);
    
    //moeilijkheidsgraad -----------------------------------------------------------------   
    if(punten == 1){
        rotatie(10);
} 
    if(punten == 2){
        rotatie(20);
}
}



// rotatie -----------------------------------------------------------------
function rotatie(snelheid){

var angles = [90, 45, 315, 270, 225, 135];
    var unit = 115;
    
    var animate = function(){
        
        $.each($('.monster'), function(idx, val){
           
            var rad = angles[idx] * (Math.PI / 180);
            $(val).css({
                left: 250 + Math.cos(rad) * unit + 'px',
                top: unit * (1 - Math.sin(rad))  + 'px'
            });
            
            angles[idx]--;
        });
        
    }
    var timer = setInterval(animate, snelheid);
}

