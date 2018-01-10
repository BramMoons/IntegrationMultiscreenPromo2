$("#Start").click(function() {
    console.log( "geklikt" );
    
    var username = $('#naam').val();
    console.log(username);
    sessionStorage.setItem("userName", username);
});