document.addEventListener('DOMContentLoaded', function() {
    const imagenes = document.querySelectorAll('.imagen-contenedor img');

    imagenes.forEach(imagen => {
        imagen.addEventListener('click', function() {
            const altTexto = this.alt;
            alert(`Hiciste clic en: ${altTexto}`);
            // Aquí podrías agregar más interactividad, como abrir un modal con la imagen más grande
        });
    });
});