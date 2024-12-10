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

    $("#crear").on("click", function(){
        $("#resCrear").addClass("mio");  
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
                $("#resCrear").text("OK"); 
                console.log('Registro creado con éxito. ', data); // Imprimimos la respuesta en la consola
            },
            error: function(error){
                console.log('Error:', error);
            }
        });
    });
    $("#borrar").on("click",function(){
        $("#resBorrar").addClass("mio");  
        $.ajax({                                                                // borrar el primero
            url:"https://my-json-server.typicode.com/desarrollo-seguro/proyecto17/solicitudes/1",
            type: "DELETE",
            success: function(data){
            //   $("#resBorrar").addClass("mio");
                $("#resBorrar").text("OK");
                console.log('borrado'+data);
            },
            error: function(data){
                console.log(data);
            }
        })
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
                $("#resActualizar").addClass("mio"); 
                $("#resActualizar").text("OK");
                console.log('Registro actualizado con éxito.', data); // Imprimimos la respuesta en la consola
            },
            error: function(error){
                console.log('Error:', error);
            }
        });
    });
    })
});