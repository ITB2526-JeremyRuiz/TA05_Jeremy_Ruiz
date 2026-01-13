async function cargarInicio() {
    try {
        const res = await fetch('empresas.json');
        const datos = await res.json();
        const container = document.getElementById('contenedor-proyectos');
        
        container.innerHTML = ""; // Limpia por si acaso

        // Filtramos solo las empresas marcadas como "Top"
        datos.filter(e => e.tipo === "Top").forEach(e => {
            container.innerHTML += `
                <div class="proyecto-item">
                    <span class="tag">MOST VIEWED</span>
                    <a href="proyectos.html?id=${e.id}" class="box-link">
                        <div class="circle-box">
                            <span class="box-text">${e.nombre}</span>
                        </div>
                    </a>
                    <span class="footer-text">PROYECTO ${e.id}</span>
                </div>`;
        });
    } catch (error) {
        console.error("Error cargando empresas:", error);
    }
}
cargarInicio();
