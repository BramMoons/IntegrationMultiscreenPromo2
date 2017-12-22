$(document).ready(){
    
    //start
    $("#Start").click(function(){ //Voor naam en email in de database te plaatsen
        $.ajax({
            method: "POST",
            url: '//dt5.ehb.be:3306/IP1718007',
            datatype: 'json',
            data: JSON.stringify(maakJsonVanInlogGegevens()),
            contentType: "application/json: charset=utf-8",
        })
    })
    
    function scorebord(){
        $.ajax({
            method: "GET",
            url : '//dt5.ehb.be:3306/IP1718007/Persoon/getAll',
            dataType: 'json',
            success: function(data, status){
                $.each(data, function(huidigeIndex, huidigeScore){
                    $('#lstGegevens').append($'<div>', { text: huidigeScore.Naam, huidigeScore.Score})
                })
            }
            
        })
    }
    
     function maakJsonVanInlogGegevens() {
        var $nieuweAfspraak = {
            naam: $("#txtFullNaam").val(),
            email: $("#txtEmail").val(),
        };
        return $nieuweAfspraak;
    }
    
    
}