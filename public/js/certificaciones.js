/* JS de Certificaciones */
let botonesCertificacion=document.querySelectorAll('.botonCertificacion');botonesCertificacion.forEach(function(boton){boton.addEventListener('click',function(){boton.textContent='Seleccionado';boton.classList.replace('btn-outline-primary','btn-primary')})});
