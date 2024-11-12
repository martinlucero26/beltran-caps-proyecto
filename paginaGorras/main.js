let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let cartCounter = document.querySelector('.cart-counter'); // Selecciona el contador de carrito
let addToCartButtons = document.querySelectorAll('.add-to-cart-button'); // Selecciona todos los botones de agregar al carrito

// Inicializa el contador en 0
let cartItemCount = 0;

// Función para actualizar el contador y el texto del botón
function updateCart(event) {
    event.preventDefault(); // Previene el comportamiento por defecto de recargar la página
    cartItemCount++; // Aumenta el contador
    cartCounter.textContent = cartItemCount; // Actualiza el contador en la navbar

    // Cambia el texto del botón temporalmente
    let button = event.target;
    button.textContent = "Agregado";
    setTimeout(() => {
        button.textContent = "Agregar al carrito";
    }, 2000);
}

// Agrega el evento de clic a cada botón de agregar al carrito
addToCartButtons.forEach(button => {
    button.addEventListener('click', updateCart);
});

// Controla el menú de la navbar
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}