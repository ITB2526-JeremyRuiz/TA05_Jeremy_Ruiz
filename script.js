fetch('empresas.json')
    .then(response => response.json())
    .then(data => {
        const contenedor = document.getElementById('contenedor-proyectos');

        data.forEach(item => {
            const proyecto = document.createElement('div');
            proyecto.className = 'proyecto-item';

            proyecto.innerHTML = `
                <span class="tag">${item.tag}</span>

                <a href="${item.link}" class="circle-box">
                    <span class="box-text">${item.titulo}</span>
                </a>

                <span class="footer-text">${item.nombre}</span>
            `;

            contenedor.appendChild(proyecto);
        });
    })
    .catch(error => {
        console.error('Error cargando empresas.json:', error);
    });
