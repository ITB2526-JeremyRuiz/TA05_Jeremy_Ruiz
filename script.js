async function cargarInicio() {
    const res = await fetch('empresas.json');
    const datos = await res.json();
    const container = document.getElementById('contenedor-proyectos');
    
    datos.filter(e => e.tipo === "Top").forEach(e => {
        container.innerHTML += `
            <div class="proyecto-item">
                <a href="${e.link}" target="_blank" style="text-decoration:none">
                    <div class="circle-box"><span style="color:white">${e.nombre}</span></div>
                </a>
            </div>`;
    });
}
cargarInicio();
