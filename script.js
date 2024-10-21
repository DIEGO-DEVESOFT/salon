// Función para volver al principio de la página
document.getElementById('scrollToTop').addEventListener('click', function (event) {
    event.preventDefault(); // Evita que el enlace siga el enlace
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave
    });
});