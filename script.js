fetch('empresas.json')
    .then(res => res.json())
    .then(data => {

        // INDEX (solo 2)
        const indexContainer = document.getElementById('contenedor-proyectos');
        if (indexContainer) {
            data.slice(0, 2).forEach(renderCircle(indexContainer, false));
        }

        // CATÁLOGO (todos)
        const catalogo = document.getElementById('catalogo-container');
        if (catalogo) {
            data.forEach(renderCircle(catalogo, true));
        }

        // PROYECTO DETALLE
        const detalle = document.getElementById('detalle-proyecto');
        if (detalle) {
            const id = new URLSearchParams(window.location.search).get('id');
            const proyecto = data.find(p => p.id == id);

            if (proyecto) {
                detalle.innerHTML = `
                    <img src="${proyecto.logo}" class="project-logo">
                    <h1>${proyecto.nombre}</h1>
                    <p>${proyecto.descripcion}</p>
                `;
            }
        }
    });

function renderCircle(container, small) {
    return item => {
        const div = document.createElement('div');
        div.className = `proyecto-item ${small ? 'small' : ''}`;
        div.innerHTML = `
            <span class="tag">${item.tag}</span>
            <a href="${item.link}" class="circle-box">
                <span class="box-text">${item.titulo}</span>
            </a>
            <span class="footer-text">${item.nombre}</span>
        `;
        container.appendChild(div);
    };
}
