// Obtener el botón y el menú del DOM
const menuBtn = document.getElementById('menuBtn');
const navbar = document.getElementById('navbar');

// Agregar un evento de clic al botón
menuBtn.addEventListener('click', function() {
  const isOpen = navbar.classList.contains('show-menu');
  
  // Verificar si el menú está abierto
  if (isOpen) {
    navbar.classList.remove('show-menu'); // Si está abierto, ciérralo
  } else {
    navbar.classList.add('show-menu'); // Si está cerrado, ábrelo
  }
});