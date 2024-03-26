document.addEventListener('DOMContentLoaded', function () {
    console.log("El DOM ha sido cargado.");

    const barrasProgreso = document.querySelectorAll(".barra-progreso");

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

    const proyectosContainer = document.querySelector('.proyectos-container');
    const proyectos = Array.from(proyectosContainer.querySelectorAll('.proyecto'));
    let currentIndex = 0;
    let timerId = null;

    function startTimer() {
        timerId = setInterval(moveNext, 3000);
    }

    function stopTimer() {
        clearInterval(timerId);
    }

    function moveNext() {
        currentIndex = (currentIndex + 1) % (proyectos.length - 3); // Para que se detenga al final
        render();
    }

    function render() {
        proyectosContainer.innerHTML = '';
        const currentProjects = proyectos.slice(currentIndex, currentIndex + 4);
        currentProjects.forEach(project => {
            proyectosContainer.appendChild(project.cloneNode(true));
        });

        // Asignar eventos a los nuevos botones
        asignarEventos();
    }

    function asignarEventos() {
        const btnMostrarInfo = proyectosContainer.querySelectorAll('.mostrar-info');
        const btnCerrarInfo = proyectosContainer.querySelectorAll('.cerrar-info');
        const descripciones = proyectosContainer.querySelectorAll('.descripcion');

        btnMostrarInfo.forEach((btnMostrar, index) => {
            btnMostrar.addEventListener('click', () => {
                descripciones[index].style.display = 'block';
                btnMostrar.style.display = 'none';
                stopTimer(); // Detener el carrusel al mostrar descripción
            });
        });

        btnCerrarInfo.forEach((btnCerrar, index) => {
            btnCerrar.addEventListener('click', () => {
                descripciones[index].style.display = 'none';
                btnMostrarInfo[index].style.display = 'block';

                // Reiniciar el carrusel después de un breve retraso
                setTimeout(() => {
                    startTimer();
                }, 100); // 100 milisegundos de retraso para asegurar que se reinicie correctamente
            });
        });
    }

    // Iniciar el carrusel y asignar eventos al cargar la página
    startTimer();
    asignarEventos();
});
