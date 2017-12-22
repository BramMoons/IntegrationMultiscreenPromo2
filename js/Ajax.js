$(document).ready(){
    
    //start
    $("Start").click(function(){
        $.ajax({
            method: "POST",
            url: '//dt5.ehb.be:3306/IP1718007',
            datatype: 'json',
            data: JSON.stringify(maakJsonVanInlogGegevens()),
            contentType: "application/json: charset=utf-8",
            success: function (data, status){
                updateDatabase();
            }
        })
    })
    
   function updateDatabase() {

        resetAfspraakDetails();
        $.ajax({
            method: "GET",
            url: '//dt5.ehb.be:3306/IP1718007',
            dataType: 'json',
            success: function (data, status) {
                //Alle elementen in de select wissen (maakt de lijst leeg)
                $("#lstAfspraken").empty();

                $.each(data, function (huidigeIndex, huidigeAfspraak) {

                    //Alle nieuwe keuzes in de lijst toevoegen => option elementen toevoegen
                    //$("#lstAfspraken").append($("<option></option>").attr("value",huidigeAfspraak.afspraakId).text(huidigeAfspraak.naam));
                    $("#lstGegevens")
                            .append($("<a class='list-group-item afspraaktItem' href='#'></a>")
                                    .attr("afspraakId", huidigeAfspraak.afspraakId)
                                    .append($("<h4 class='list-group-item-heading'>")
                                            .text(huidigeAfspraak.naam))
                                    .append($("<p class='list-group-item-text'></p>")
                                            .text(huidigeAfspraak.beschrijving))
                                    .click(function (e) {
                                        e.preventDefault();
                                        //Hier schrijven we hetgene dat er moet gebeuren indien je klikt op een afspraak in het overzicht
                                        $(this).addClass('active').siblings().removeClass('active');
                                        geefAfspraakDetailsWeer(huidigeAfspraak.afspraakId);
                                    }));
                });

            },
            error: function (status) {
                alert("Er is iets fout gegaan bij het ophalen van de afspraken");
            }
        });
    }
    
     function maakJsonVanInlogGegevens() {
        var $nieuweAfspraak = {
            naam: $("#txtFullNaam").val(),
            email: $("#txtEmail").val(),
        };
        return $nieuweAfspraak;
    }
    
}