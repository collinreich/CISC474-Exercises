$( document ).ready(function() {
    console.log( "ready!" );
    $("form").submit(function(){
        $("#jumbotron").html(function(){
            let name = $("#fname").val() + " " + $("#lname").val();
            return "<p>"+ name +"</p>";
        })
        return false;
    });
});