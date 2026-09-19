/* JS de Soluciones */
let botonesProducto=document.querySelectorAll('.botonProducto');botonesProducto.forEach(function(boton){boton.addEventListener('click',function(){let nombreProducto=boton.getAttribute('data-producto');alert('Has seleccionado: '+nombreProducto)})});
