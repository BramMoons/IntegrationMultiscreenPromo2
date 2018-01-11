//monster afbeeldingen paths in variabelen steken.
var vleermuis = '../images/vleermuis.png';
var bigfoot = '../images/bigFoot.png';
var spin = '../images/spin.png';
var zombieSpook = '../images/zombieSpook.png';

//spelernaam en score uit de local storage halen.
var spelerNaam = localStorage.getItem('userName');
var spelerScore = localStorage.getItem('userScore');

var punten = 0;
var leven = 5;
var rotatiesnelheid = 20;

//rechtmuis klik disabelen. <omdat als je op het tv scherm met 2 vingers tegelijk tikt word het menu gedisplayed.
document.addEventListener('contextmenu', event => event.preventDefault());


$(document).ready(function () {
    
//naam van speler weergeven in spel.
    $("#speler").html(spelerNaam);
    
//naam speler weergeven in game over scherm.
    $("#uitslag").html("Proficiat " + spelerNaam + " je score was " + spelerScore + " ! Wil je ook een spel zoals dit maken? Kom dan Multec studeren!")
    
    
    var punt = document.getElementById('punt');
    var clickedMonster;

    eersteMonster();

//Click naast monster ----------------------------------------------------------------
    $("#bodySpel").on("click", function (e) {

        clickedMonster = 0;
        leven = leven - 1;
        if (leven === 0) {
            localStorage.setItem("userScore", punten);
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
    
    rotatie(rotatiesnelheid);
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
    switch(punten){
        case 2: 
            rotatiesnelheid = 40;
            break;
        case 4:
            rotatiesnelheid = 60;
            break;
        case 6:
            rotatiesnelheid = 80;
            break;
        case 8: 
            rotatiesnelheid = 100;
            break;
        case 10:
            rotatiesnelheid = 120;
            break;
        case 12: 
            rotatiesnelheid = 140;
            break;
        case 16:
            rotatiesnelheid = 160;
            break;
        case 20:
            rotatiesnelheid = 180;
            break;
        case 25:
            rotatiesnelheid = 200;
            break;
        case 27:
            rotatiesnelheid = 220;
            break;
        case 30: 
            rotatiesnelheid = 240;
            break;
        case 32:
            rotatiesnelheid = 260;
            break;
        case 35: 
            rotatiesnelheid = 280;
            break;
        case 37: 
            rotatiesnelheid = 300;
            break;
        case 40:
            rotatiesnelheid = 320;
            break;
        case 45:
            rotatiesnelheid = 360;
            break;
    }
        

}



// rotatie -----------------------------------------------------------------
function rotatie(snelheid){

var angles = [90, 45, 315, 270, 225, 135];
    
    var animate = function(){
        
        $.each($('.monster'), function(idx, val){
            
           var unit = rotatiesnelheid;
            var rad = angles[idx] * (Math.PI / 180);
            $(val).css({
                left: 250 + Math.cos(rad) * unit + 'px',
                top: unit * (1 - Math.sin(rad))  + 'px'
            });
            
            angles[idx]--;
        });
        
    }
    var timer = setInterval(animate, 10);
}

