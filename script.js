// 1. DICCIONARIO DE TRADUCCIONES
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

// 2. DATOS DE PROYECTOS Y CONCEPTOS
const proyectos = [
    { id: 'defensa', logo: "🛡️", archivo: "defensa.html" },
    { id: 'cifrado', logo: "🔐", archivo: "cifrado.html" }
];

const conceptos = [
    "Firewall", "Pentesting", "Malware", "Phishing", "Encryption", 
    "SIEM", "Zero Trust", "Cloud Security", "IDS/IPS", "VPN",
    "Social Engineering", "Blockchain", "Ransomware", "Endpoint", "Forensics",
    "SOC", "Compliance", "Vulnerability", "Dark Web", "Antivirus",
    "Identity Mgmt", "Network Security", "Ethical Hacking", "Rootkit", "Exploit",
    "Cryptography", "Botnet", "Data Leak", "Cyber Warfare", "Proxy"
];

// 3. VARIABLE DE IDIOMA (Carga lo guardado o por defecto 'es')
let idiomaActual = localStorage.getItem('idiomaSeleccionado') || 'es';

document.addEventListener('DOMContentLoaded', () => {
    
    // Configurar el botón de idioma
    const btnIdioma = document.getElementById('btn-idioma');
    if (btnIdioma) {
        btnIdioma.innerText = idiomaActual === 'es' ? 'EN' : 'ES';
        btnIdioma.addEventListener('click', () => {
            idiomaActual = idiomaActual === 'es' ? 'en' : 'es';
            localStorage.setItem('idiomaSeleccionado', idiomaActual);
            btnIdioma.innerText = idiomaActual === 'es' ? 'EN' : 'ES';
            renderizarTodo(); // Volver a dibujar con el nuevo idioma
        });
    }

    renderizarTodo();
});

// 4. FUNCIÓN PRINCIPAL DE RENDERIZADO
function renderizarTodo() {
    const t = traducciones[idiomaActual];

    // --- TRADUCIR TEXTOS ESTÁTICOS ---
    const titulo = document.querySelector('.main-header h1');
    if (titulo) titulo.innerText = t.titulo_principal;

    const subtitulo = document.querySelector('.main-header p');
    if (subtitulo) subtitulo.innerText = t.subtitulo_principal;

    const btnExplorar = document.querySelector('.btn-catalogo-principal');
    if (btnExplorar) btnExplorar.innerText = t.btn_explorar;

    // --- LÓGICA PARA EL INDEX (2 BOLAS GRANDES) ---
    const contenedorIndex = document.getElementById('contenedor-proyectos-principales');
    if (contenedorIndex) {
        contenedorIndex.innerHTML = ""; 
        proyectos.forEach(proy => {
            // Buscamos la traducción según el ID (defensa o cifrado)
            const nombreTraduccion = proy.id === 'defensa' ? t.defensa_titulo : t.cifrado_titulo;
            const descTraduccion = proy.id === 'defensa' ? t.defensa_desc : t.cifrado_desc;

            const link = document.createElement('a');
            link.href = proy.archivo;
            link.className = "proyecto-item";
            link.innerHTML = `
                <div class="circle-box">
                    <div class="content-horizontal">
                        <div class="icon">${proy.logo}</div>
                        <div class="text-side">
                            <h2>${nombreTraduccion}</h2>
                            <p>${descTraduccion}</p>
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
}
