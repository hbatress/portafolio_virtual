document.addEventListener("DOMContentLoaded", function() {
    console.log("El DOM ha sido cargado.");

    // Obtener todos los elementos con clase "barra-progreso"
    const barrasProgreso = document.querySelectorAll(".barra-progreso");

    // Iterar sobre cada barra de progreso y ajustar el ancho de la barra de progreso interna
    barrasProgreso.forEach(barra => {
        const porcentajeElement = barra.querySelector(".porcentaje");
        if (porcentajeElement) {
            const porcentajeTexto = porcentajeElement.textContent.trim();
            const porcentaje = parseInt(porcentajeTexto, 10);
            if (!isNaN(porcentaje)) {
                barra.querySelector(".progreso").style.width = porcentaje + "%";
            }
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    console.log("El DOM ha sido cargado.");

    const proyectosContainer = document.querySelector('.proyectos-container');
    const proyectos = document.querySelectorAll('.proyecto');
    const espacioEntreProyectos = 20; // Espacio entre cada proyecto en píxeles
    let currentIndex = 0;

    function moveProjects() {
        const proyectoActual = proyectos[currentIndex];
        const anchoProyecto = proyectoActual.offsetWidth + espacioEntreProyectos;

        proyectosContainer.style.transition = 'transform 1s ease';
        proyectosContainer.style.transform = `translateX(-${anchoProyecto}px)`;

        setTimeout(() => {
            proyectoActual.parentNode.appendChild(proyectoActual);
            proyectosContainer.style.transition = 'none';
            proyectosContainer.style.transform = 'translateX(0)';
            currentIndex = (currentIndex + 1) % proyectos.length;
        }, 1000); // Esperar 1 segundo antes de mover el proyecto
    }

    // Iniciar la animación de los proyectos
    setInterval(moveProjects, 3000); // Cambiar de proyecto cada 3 segundos
});
