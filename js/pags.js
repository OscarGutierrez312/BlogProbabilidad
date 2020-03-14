$(document).ready(function(){
    $("#sect1").show();
    for (var i = 2; i < 8; i++) {
        $("#sect" + i).hide();
    }
});

function desplegar(tema){
   
    for (var i = 1; i < 8; i++) {
        $("#sect" + i).hide();
    }
    $("#sect"+tema).show(900);
    
}
