// Definimos la lista de archivos HTML de tus proyectos
const proyectos = [
    {
        nombre: "Proyecto 1",
        archivo: "proyecto 1", // El nombre exacto que aparece en tu carpeta
        descripcion: "Análisis de Redes y Pentesting"
    },
    {
        nombre: "Proyecto 2",
        archivo: "proyecto 2",
        descripcion: "Cifrado de Datos y Criptografía"
    }
];

const contenedor = document.getElementById('contenedor-proyectos');

function renderizarProyectos() {
    proyectos.forEach(proy => {
        // Creamos el elemento de enlace que envolverá la tarjeta
        const card = document.createElement('a');
        card.href = proy.archivo; // Esto redirige al archivo al hacer clic
        card.className = 'project-card-link'; // Clase para CSS
        
        card.innerHTML = `
            <article class="project-card">
                <div class="card-glow"></div>
                <h2>${proy.nombre}</h2>
                <p>${proy.descripcion}</p>
                <span class="view-more">ACCEDER AL SISTEMA _</span>
            </article>
        `;
        
        contenedor.appendChild(card);
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', renderizarProyectos);
