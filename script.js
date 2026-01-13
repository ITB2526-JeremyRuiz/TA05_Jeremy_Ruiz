const proyectos = [
    {
        nombre: "PROYECTO 1",
        archivo: "proyecto 1", // Nombre exacto del archivo HTML
        descripcion: "Sistemas de Defensa",
        logo: "path/al/logo1.png" // Pon aquí la ruta de tu logo
    },
    {
        nombre: "PROYECTO 2",
        archivo: "proyecto 2",
        descripcion: "Cifrado Crítico",
        logo: "path/al/logo2.png"
    }
];

const contenedor = document.getElementById('contenedor-proyectos');

function renderizarProyectos() {
    proyectos.forEach(proy => {
        // Creamos el enlace que envuelve todo el ítem
        const link = document.createElement('a');
        link.href = proy.archivo;
        link.style.textDecoration = 'none';
        link.style.color = 'inherit';

        link.innerHTML = `
            <div class="proyecto-item">
                <span class="tag">SEC_LOG_01</span>
                <div class="circle-box">
                    <img src="${proy.logo}" alt="Logo" style="width: 60%; height: auto; filter: brightness(0) invert(1);">
                </div>
                <p class="footer-text">${proy.nombre}</p>
                <small style="color: #00ffaa; font-size: 10px; margin-top: 5px;">${proy.descripcion}</small>
            </div>
        `;
        
        contenedor.appendChild(link);
    });
}

document.addEventListener('DOMContentLoaded', renderizarProyectos);
