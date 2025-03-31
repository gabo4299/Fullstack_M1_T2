
// Obtener elementos del DOM
const verDetallesButton = document.getElementById('verDetalles');
const volverButton = document.getElementById('volver');
const tarjeta = document.querySelector('.tarjeta');
const cara = document.querySelector('.cara');
const post = document.querySelector('.posterior');
// Función para voltear la tarjeta
verDetallesButton.addEventListener('click', function(){

    // post.style.transform = 'rotateY(180deg)';
    cara.style.backfaceVisibility ="visible";    
    post.style.transform = 'rotateY(0deg)';
    })
// Función para volver a la cara frontal

volverButton.addEventListener('click', function(){

    cara.style.backfaceVisibility ="hidden";    
    post.style.transform = 'rotateY(180deg)';
    })