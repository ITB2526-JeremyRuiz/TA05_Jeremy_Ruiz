const traducciones = {
    es: {
        titulo_principal: "CIBERSEGURIDAD: SISTEMAS CRÍTICOS",
        subtitulo_principal: "Seleccione un módulo de acceso para comenzar",
        btn_explorar: "EXPLORAR CATÁLOGO COMPLETO",
        defensa_titulo: "DEFENSA",
        defensa_desc: "Análisis de Red",
        cifrado_titulo: "CIFRADO",
        cifrado_desc: "Protocolos SSL"
    },
    en: {
        titulo_principal: "CYBERSECURITY: CRITICAL SYSTEMS",
        subtitulo_principal: "Select an access module to begin",
        btn_explorar: "EXPLORE FULL CATALOG",
        defensa_titulo: "DEFENSE",
        defensa_desc: "Network Analysis",
        cifrado_titulo: "ENCRYPTION",
        cifrado_desc: "SSL Protocols"
    }
};

const proyectos = [
    {
        nombre: "DEFENSA",
        archivo: "defensa.html",
        descripcion: "Análisis de Red",
        logo: "🛡️" // Puedes usar un emoji o ruta de imagen
    },
    {
        nombre: "CIFRADO",
        archivo: "cifrado.html",
        descripcion: "Protocolos Ssl",
        logo: "🔐"
    }
];

const conceptos = [
    "Firewall", "Pentesting", "Malware", "Phishing", "Encryption", 
    "SIEM", "Zero Trust", "Cloud Security", "IDS/IPS", "VPN",
    "Social Engineering", "Blockchain", "Ransomware", "Endpoint", "Forensics",
    "SOC", "Compliance", "Vulnerability", "Dark Web", "Antivirus",
    "Identity Mgmt", "Network Security", "Ethical Hacking", "Rootkit", "Exploit",
    "Cryptography", "Botnet", "Data Leak", "Cyber Warfare", "Proxy"
];

document.addEventListener('DOMContentLoaded', () => {
    // --- LÓGICA PARA EL INDEX (2 BOLAS GRANDES) ---
    // Cambiamos el ID para que coincida con tu HTML
    let idiomaActual = 'es';

document.getElementById('btn-idioma')?.addEventListener('click', (e) => {
    idiomaActual = idiomaActual === 'es' ? 'en' : 'es';
    e.target.innerText = idiomaActual === 'es' ? 'EN' : 'ES';
    actualizarTextos();
});

function actualizarTextos() {
    const t = traducciones[idiomaActual];
    
    // Actualizar Textos Inicio
    const titulo = document.querySelector('.main-header h1');
    if (titulo) titulo.innerText = t.titulo_principal;

    const subtitulo = document.querySelector('.main-header p');
    if (subtitulo) subtitulo.innerText = t.subtitulo_principal;

    const btnExplorar = document.querySelector('.btn-catalogo-principal');
    if (btnExplorar) btnExplorar.innerText = t.btn_explorar;

    // Actualizar los proyectos dinámicos
    // Aquí actualizamos el array 'proyectos' y volvemos a llamar a la función que los dibuja
    proyectos[0].nombre = t.defensa_titulo;
    proyectos[0].descripcion = t.defensa_desc;
    proyectos[1].nombre = t.cifrado_titulo;
    proyectos[1].descripcion = t.cifrado_desc;
    
    // Llamar a la función que renderiza (la que ya tienes)
    renderizarProyectos(); 
}
    const contenedorIndex = document.getElementById('contenedor-proyectos-principales');

    if (contenedorIndex) {
        contenedorIndex.innerHTML = ""; // Limpia el contenido estático
        proyectos.forEach(proy => {
            const link = document.createElement('a');
            link.href = proy.archivo;
            link.className = "proyecto-item";
            link.style.textDecoration = 'none';

            link.innerHTML = `
                <div class="circle-box">
                    <div class="content-horizontal">
                        <div class="icon">${proy.logo}</div>
                        <div class="text-side">
                            <h2>${proy.nombre}</h2>
                            <p>${proy.descripcion}</p>
                        </div>
                    </div>
                </div>
            `;
            contenedorIndex.appendChild(link);
        });
    }

    // --- LÓGICA PARA EL CATÁLOGO (30 BOLITAS) ---
    const grid = document.getElementById('grid-empresas');

    if (grid) {
        grid.innerHTML = ""; 
        conceptos.forEach((nombre, index) => {
            const bola = document.createElement('a');
            bola.href = "#";
            bola.className = "circle-small";
            bola.style.animationDelay = `${index * 0.05}s`; 
            bola.innerHTML = `<span>${nombre.toUpperCase()}</span>`;
            grid.appendChild(bola);
        });
    }
});



