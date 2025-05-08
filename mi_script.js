document.addEventListener('DOMContentLoaded', function() {
    const botonSaludo = document.getElementById('botonSaludo');

    if (botonSaludo) {
        botonSaludo.addEventListener('click', function() {
            alert('¡Bienvenido a nuestra página sobre el Calentamiento Global!');
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const imagenes = document.querySelectorAll('.imagen-contenedor');

    imagenes.forEach(imagen => {
        imagen.addEventListener('click', function() {
            const imageUrl = this.querySelector('img').src;
            alert(`Hiciste clic en: ${imageUrl}`); // Puedes personalizar la acción aquí
            // Por ejemplo, podrías abrir la imagen en un modal o realizar otra acción.
        });
    });
});