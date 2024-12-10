$(function() {
    console.log('Paso por aquí');
    $("#listar").on("click", function() {

        $.get("https://my-json-server.typicode.com/desarrollo-seguro/proyecto17/solicitudes", function(data) {
            $("#resListar").addClass("mio");  
            $("#resListar").text("Ok");
    
            console.log(data);
        })
        
    });
    $("#leer").on("click", function() {   
        $("#resLeer").addClass("mio");                                      // leer el primero
        $.get("https://my-json-server.typicode.com/desarrollo-seguro/proyecto17/solicitudes/1", function(data) {
            $("#resLeer").text("Ok"); 
            console.log(data);
        })
    $("#borrar").on("click",function(){
        $.ajax({                                                                // borrar el primero
            url:"https://my-json-server.typicode.com/desarrollo-seguro/proyecto17/solicitudes/1",
            type: "DELETE",
            success: function(data){
                $("#resBorrar").addClass("mio");
                $("#resBorrar").text("OK");
                console.log('borrado'+data);
            },
            error: function(data){
                console.log(data);
            }
        })
    });
    $("#crear").on("click", function(){
        $.ajax({
            url: "https://my-json-server.typicode.com/desarrollo-seguro/proyecto17/solicitudes/",
            method: "POST",
            contentType: "application/json",  // Especificamos el tipo de contenido como JSON
            data: JSON.stringify({
                nombre: "Pepe",
                apellido: "del Uno"
            }), 
            success: function(data){
                // Actualizamos el texto de un elemento con el id 'resCrear'
                $("#resCrear").text("Registro creado con éxito");
                console.log('Crear: ', data); // Imprimimos la respuesta en la consola
            },
            error: function(error){
                console.log('Error:', error);
            }
        });
    });


    $("#actualizar").on("click", function(){
        $.ajax({
            url: "https://my-json-server.typicode.com/desarrollo-seguro/proyecto17/solicitudes/1",
            method: "PUT",
            contentType: "application/json",  // Especificamos el tipo de contenido como JSON
            data: JSON.stringify({
                id: 1,
                nombre: "Lolo",
                apellido: "del Dos"
            }), 
            success: function(data){
                // Actualizamos el texto de un elemento con el id 'resCrear'
                $("#resActualizar").text("Registro actualizado con éxito");
                console.log('Actualizar: ', data); // Imprimimos la respuesta en la consola
            },
            error: function(error){
                console.log('Error:', error);
            }
        });
    });
    })
});