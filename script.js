const proyectos = [
    {
        nombre: "Proyecto 1",
        archivo: "proyecto 1",
        descripcion: "Análisis de vulnerabilidades y defensa de red perimetral.",
        logo: "https://via.placeholder.com/80/00f2ff/000000?text=P1" // Sustituye por tu ruta de imagen
    },
    {
        nombre: "Proyecto 2",
        archivo: "proyecto 2",
        descripcion: "Implementación de protocolos de cifrado y seguridad avanzada.",
        logo: "https://via.placeholder.com/80/00f2ff/000000?text=P2"
    }
];

const contenedor = document.getElementById('contenedor-proyectos');

function renderizarProyectos() {
    proyectos.forEach(proy => {
        const card = document.createElement('a');
        card.href = proy.archivo;
        card.className = 'project-link';
        
        card.innerHTML = `
            <article class="project-card-horizontal">
                <div class="logo-container">
                    <img src="${proy.logo}" alt="Logo ${proy.nombre}" class="project-logo">
                </div>
                <div class="text-container">
                    <h2>${proy.nombre}</h2>
                    <p>${proy.descripcion}</p>
                </div>
            </article>
        `;
        
        contenedor.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderizarProyectos);
