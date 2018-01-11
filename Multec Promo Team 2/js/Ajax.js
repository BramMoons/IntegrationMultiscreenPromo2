$(document).ready(function () {

    //start
    $("#play").click(function () {
        persoonToevoegen();

        //naam aan local storage toevoegen.
        console.log("geklikt");

        var username = $('#naam').val();

        console.log(username);
        localStorage.setItem("userName", username);

    })

    function scorebordOphalen() {
        //Er wordt aan de webservice gevraagd om alle data uit de database te halen
        $.ajax({
            method: "GET",
            url: 'http://10.3.51.16:8080/Persoon/getAll',
            dataType: 'json',
            success: function (data, status) {
                $.each(data, function (huidigeIndex, huidigeScore) {
                    $('#lstGegevens').append($("<div>"), {
                        text: huidigeScore.naam,
                        text: huidigeScore.email
                    })
                })
            },
            error: function (status) {
                console.log(status);
                alert("Er is iets fout gegaan bij het ophalen van de gegevens.");
            }
        });
    }

    function persoonToevoegen() {
        //Json data wordt doorgestuurd naar de webservice om zo in de database terecht te komen
        $.ajax({
            method: "POST",
            url: 'http://10.3.51.16:8080/Persoon/voegToe',
            datatype: 'json',
            data: JSON.stringify(maakJsonVanInlogGegevens()),
            contentType: "application/json; charset=utf-8",
            success: function (data, status) {
                console.log(status);
                console.log("De data is verzonden");
//                              alert("De data is verzonden");  
            },
            error: function (status) {
                console.log(status);
                console.log("Er is iets fout gegaan bij het versturen van de gegevens.");
//                                alert("Er is iets fout gegaan bij het sturen van de gegevens.")
            }
        });
    }

    function maakJsonVanInlogGegevens() {
        //Gegevens ingegeven door gebruiker worden omgezet naar json data om naar de database te kunnen sturen
        var $nieuwPersoon = {
            naam: $("#naam").val(),
            email: $("#email").val(),
            score: $("#score").val(),
        };
        return $nieuwPersoon;
    }
});
