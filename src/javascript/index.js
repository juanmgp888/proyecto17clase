$(document).ready(function() {
    accionParaElClick = function(event) {
        $(this).text("Bémeme");
    }

    $("button").on("click", accionParaElClick);

    console.log('Hola mundo... por tercera vez');
});