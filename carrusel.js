document.addEventListener('DOMContentLoaded', function() {
    const carruselContenedor = document.querySelector('.carrusel-contenedor');
    const carruselSlides = document.querySelector('.carrusel-slides');
    const anteriorBoton = document.querySelector('.anterior');
    const siguienteBoton = document.querySelector('.siguiente');
    const indicadoresContenedor = document.querySelector('.carrusel-indicadores');
    const indicadores = document.querySelectorAll('.carrusel-indicadores button');
    const numSlides = carruselSlides.children.length;
    let indiceActual = 0;

    function actualizarCarrusel(indice) {
        const translateX = -indice * 100 + '%';
        carruselSlides.style.transform = `translateX(${translateX})`;

        indicadores.forEach(indicador => indicador.classList.remove('activo'));
        indicadores[indice].classList.add('activo');
    }

    function siguienteSlide() {
        indiceActual = (indiceActual + 1) % numSlides;
        actualizarCarrusel(indiceActual);
    }

    function anteriorSlide() {
        indiceActual = (indiceActual - 1 + numSlides) % numSlides;
        actualizarCarrusel(indiceActual);
    }

    function irASlide(indice) {
        indiceActual = indice;
        actualizarCarrusel(indiceActual);
    }

    siguienteBoton.addEventListener('click', siguienteSlide);
    anteriorBoton.addEventListener('click', anteriorSlide);

    indicadores.forEach((indicador, indice) => {
        indicador.addEventListener('click', () => {
            irASlide(indice);
        });
    });

    // Mostrar el primer slide al cargar la página
    actualizarCarrusel(indiceActual);
});