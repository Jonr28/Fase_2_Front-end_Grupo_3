/* JS de FAQ */
let preguntasFaq=document.querySelectorAll('.accordion-button');preguntasFaq.forEach(function(pregunta){pregunta.addEventListener('click',function(){console.log('Pregunta seleccionada: '+pregunta.textContent.trim())})});
