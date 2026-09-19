/* JS del Blog */
let botonesBlog=document.querySelectorAll('.botonBlog');botonesBlog.forEach(function(boton){boton.addEventListener('click',function(){document.querySelector('#tituloModal').textContent=boton.dataset.titulo;document.querySelector('#contenidoModal').textContent=boton.dataset.contenido})});
