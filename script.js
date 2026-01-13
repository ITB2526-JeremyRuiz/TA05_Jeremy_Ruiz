// Arreglo con la información de los proyectos
const proyectos = [
    {
        titulo: "Proyecto 1",
        archivo: "proyecto 1", // El nombre exacto de tu archivo en la carpeta
        descripcion: "Análisis de vulnerabilidades y defensa de red."
    },
    {
        titulo: "Proyecto 2",
        archivo: "proyecto 2",
        descripcion: "Implementación de protocolos de cifrado avanzado."
    }
];

const contenedor = document.getElementById('contenedor-proyectos');

// Función para cargar los proyectos
async function cargarProyectos() {
    for (const proy of proyectos) {
        try {
            // Buscamos el contenido del archivo de texto
            const respuesta = await fetch(proy.archivo);
            const texto = await respuesta.text();

            // Creamos el elemento HTML dinámicamente
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <h2>${proy.titulo}</h2>
                <div class="contenido-proyecto">
                    ${texto}
                </div>
                <p class="meta">${proy.descripcion}</p>
            `;
            
            contenedor.appendChild(card);
        } catch (error) {
            console.error("Error cargando el archivo:", proy.archivo, error);
        }
    }
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', cargarProyectos);
