$(function() {
    console.log('Paso por aquí');
    $("#listar").on("click", function() {
        $.get("https://my-json-server.typicode.com/desarrollo-seguro/proyecto17/solicitudes", function(data) {
            $("#resListar").text("Ok");
            console.log(data);
        })
        
    });
    $("#leer").on("click", function() {
        $.get("https://my-json-server.typicode.com/desarrollo-seguro/proyecto17/solicitudes/1", function(data) {
            $("#resLeer").text("Ok"); 
            console.log(data);
        })
        
    })
});