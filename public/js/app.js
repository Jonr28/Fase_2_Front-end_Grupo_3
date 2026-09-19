/* JS general */
let enlacesMenu=document.querySelectorAll('.nav-link');enlacesMenu.forEach(function(enlace){enlace.addEventListener('click',function(){let menuPrincipal=document.querySelector('#menuPrincipal');if(menuPrincipal&&menuPrincipal.classList.contains('show'))bootstrap.Collapse.getOrCreateInstance(menuPrincipal).hide()})});
