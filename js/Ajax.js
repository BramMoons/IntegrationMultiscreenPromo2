$(document).ready(function(){
    
    //start
    $("#Start").click(function(){
        
    })
    
    function scorebordOphalen(){
        //Er wordt aan de webservice gevraagd om alle data uit de database te halen
        $.ajax({
            method: "GET",
            url : '//10.3.51.16/Persoon/getAll',
            dataType: 'json',
            success: function(data, status){
                $.each(data, function(huidigeIndex, huidigeScore){
                    $('#lstGegevens').append($("<div>"), { text: huidigeScore.naam, text: huidigeScore.email})
                })            
            },
            error: function(status){
                alert("Er is iets fout gegaan bij het ophalen van de gegevens.")
            }
        });
    }
    
    function persoonToevoegen(){
        //Json data wordt doorgestuurd naar de webservice om zo in de database terecht te komen
        $.ajax({
            method: "POST",
            url: '//10.3.51.16/Persoon/voegToe',
            datatype: 'json',
            data: JSON.stringify(maakJsonVanInlogGegevens()),
            contentType: "application/json: charset=utf-8",
            error: function(status){
                alert("Er is iets fout gegaan bij het sturen van de gegevens.")
            }
        });   
    }
    
    function maakJsonVanInlogGegevens() {
        //Gegevens ingegeven door gebruiker worden omgezet naar json data om naar de database te kunnen sturen
        var $nieuweAfspraak = {
            naam: $("#full-name").val(),
            email: $("#email").val(),
            score: $("#score").val(),
        };
        return $nieuweAfspraak;
    }
});