$(document).ready(function() {
    let solicitudes = ["Mensaje1", "Hola", "Adios"];

    for (i = 0 ; i < solicitudes.length; i++ ) {
        $("#maestro").append(
            $("<li>").text(solicitudes[i])
        );
    }
});