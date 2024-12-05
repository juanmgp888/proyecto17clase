$(document).ready(function() {
    solicitud = {
        "id": 1, 
        "nombre": "Juan",
        "apellido": "Secreto"
    };


    let solicitudes = [solicitud, solicitud, solicitud];


    for (i = 0 ; i < solicitudes.length; i++ ) {
        $("#maestro").append(
            $("<li>").text(solicitudes[i].nombre + ' ' + solicitudes[i].apellido)
        );
    }
});