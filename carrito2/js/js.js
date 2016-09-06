$(function() {
    //para saber si la web está cargada y se muestra el jquery
    console.log("ready!");
    //creo el elemento productos
    var productos = [
    {"codigo":001, "nombre": "tv","precio":21000},
    {"codigo":002, "nombre": "lavadora","precio":6100},
    {"codigo":003, "nombre": "nevera","precio":11000}
    ]
    //creo el array/json de carrito
    var carrito = []
    //imprimo el listado de todos los productos
    for (var x = 0; x < productos.length; x++){
      var p = productos[x];
      $('#listaProductos').append("<tr><td class='codigo"+x+"' name='"+p.codigo+"'>"+p.codigo+"</td><td class='nombre"+x+"' name='"+p.nombre+"'>"+p.nombre+"</td><td class='precio"+x+"' name='"+p.precio+"'>"+ p.precio +"</td><td><input class='cantidad"+x+"'type='number' value='0' /></td><td><input type='button' id='"+x+"' class='agregar' value='agregar al carrito'></td></tr>");
    }
    //cuando se presiona cualquier boton agregar, se agrega al carrito 
    $('.agregar').click(function(){
       var id = ($(this).attr('id'));
       var codigo = '.codigo'+id;
       var co = ($(codigo).attr('name'));
       var nombre = '.nombre'+id;
       var nom = ($(nombre).attr('name'));
       var precio = '.precio'+id;
       var pre = ($(precio).attr('name'));
       var cantidad = '.cantidad'+id;
       var cant = ($(cantidad).val());
       var total = cant * pre;
       var carr = {"codigo":co, "nombre":nom, "precio":pre, "cantidad":cant, "total":total}
       a = carr;
       $('#carrito').append("<tr><td>"+a.codigo+"</td><td>"+a.nombre+"</td><td>"+ a.precio +"</td><td>"+a.cantidad+"</td><td>"+a.total+"</td></tr>");
       carrito.push(a);

    });


    //al presionar el boton calcular, se imprime el carrito nuevamente
    $('#calcular').click(function(){
      $('#resultado').html("");
      calcular();
    });

    function calcular(){
    for (var x = 0; x < carrito.length; x++){
      var p = carrito[x];
      $('#resultado').append("<tr><td>"+p.codigo+"</td><td class='nombre"+x+"' name='"+p.nombre+"'>"+p.nombre+"</td><td class='precio"+x+"' name='"+p.precio+"'>"+ p.precio +"</td><td><input class='cantidad"+x+"'type='number' value='"+p.cantidad+"'/></td><td><input type='button' id='"+x+"' class='agregar' value='agregar al carrito'></td></tr>");
    }
  }
    
    

    /*
    //funcion guardar en local storage
    function guardarLS() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.carro) {
            localStorage.carro = var(localStorage.carro)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }

    */

});