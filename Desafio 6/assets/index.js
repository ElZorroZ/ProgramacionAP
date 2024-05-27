document.addEventListener('DOMContentLoaded', function() {
    const precioProducto = document.getElementById('precioProducto');
    precioProducto.innerText = 'Precio: $450';
    const nombreProducto = document.querySelector('#nombreProducto');
    nombreProducto.style.color = 'green'; 
    nombreProducto.style.fontSize = '2em';
});
