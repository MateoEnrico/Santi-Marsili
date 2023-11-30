// Obtener el botón y el menú del DOM
const menuBtn = document.getElementById('menuBtn');
const navbar = document.getElementById('navbar');

// Agregar un evento de clic al botón
menuBtn.addEventListener('click', function() {
  navbar.classList.toggle('show-menu');
});