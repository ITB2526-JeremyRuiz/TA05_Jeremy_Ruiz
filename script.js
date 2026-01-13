// 1. DICCIONARIO DE TRADUCCIONES COMPLETO
const traducciones = {
    es: {
        titulo_principal: "CIBERSEGURIDAD: SISTEMAS CRÍTICOS",
        subtitulo_principal: "Seleccione un módulo de acceso para comenzar",
        btn_explorar: "EXPLORAR CATÁLOGO COMPLETO",
        defensa_titulo: "DEFENSA DE RED",
        defensa_desc: "Análisis de Red",
        cifrado_titulo: "CIFRADO CRÍTICO",
        cifrado_desc: "Protocolos SSL",
        // Textos para páginas internas
        volver: "VOLVER AL PANEL",
        defensa_info: "La Defensa de Red es la práctica de proteger una infraestructura contra accesos no autorizados. Incluye el uso de Firewalls para filtrar tráfico, sistemas IDS para detectar intrusos y segmentación de red para aislar datos críticos.",
        cifrado_info: "El Cifrado es el proceso de convertir datos legibles en un código indescifrable. El protocolo SSL/TLS asegura la comunicación entre cliente y servidor, mientras que el estándar AES-256 protege la información contra ataques de fuerza bruta."
    },
    en: {
        titulo_principal: "CYBERSECURITY: CRITICAL SYSTEMS",
        subtitulo_principal: "Select an access module to begin",
        btn_explorar: "EXPLORE FULL CATALOG",
        defensa_titulo: "NETWORK DEFENSE",
        defensa_desc: "Network Analysis",
        cifrado_titulo: "CRITICAL ENCRYPTION",
        cifrado_desc: "SSL Protocols",
        // Textos para páginas internas
        volver: "BACK TO PANEL",
        defensa_info: "Network Defense is the practice of protecting infrastructure against unauthorized access. It includes the use of Firewalls to filter traffic, IDS systems to detect intruders, and network segmentation to isolate critical data.",
        cifrado_info: "Encryption is the process of converting readable data into an indecipherable code. The SSL/TLS protocol secures communication between client and server, while the AES-256 standard protects information against brute force attacks."
    }
};

const proyectos = [
    { id: 'defensa', logo: "🛡️", archivo: "defensa.html" },
    { id: 'cifrado', logo: "🔐", archivo: "cifrado.html" }
];

const conceptos = ["Firewall", "Pentesting", "Malware", "Phishing", "Encryption", "SIEM", "Zero Trust", "Cloud Security", "IDS/IPS", "VPN", "Social Engineering", "Blockchain", "Ransomware", "Endpoint", "Forensics", "SOC", "Compliance", "Vulnerability", "Dark Web", "Antivirus", "Identity Mgmt", "Network Security", "Ethical Hacking", "Rootkit", "Exploit", "Cryptography", "Botnet", "Data Leak", "Cyber Warfare", "Proxy"];

let idiomaActual = localStorage.getItem('idiomaSeleccionado') || 'es';

document.addEventListener('DOMContentLoaded', () => {
    const btnIdioma = document.getElementById('btn-idioma');
    if (btnIdioma) {
        btnIdioma.innerText = idiomaActual === 'es' ? 'EN' : 'ES';
        btnIdioma.addEventListener('click', () => {
            idiomaActual = idiomaActual === 'es' ? 'en' : 'es';
            localStorage.setItem('idiomaSeleccionado', idiomaActual);
            btnIdioma.innerText = idiomaActual === 'es' ? 'EN' : 'ES';
            renderizarTodo();
        });
    }
    renderizarTodo();
});

function renderizarTodo() {
    const t = traducciones[idiomaActual];

    // Traducir Header y Botón Principal
    const titulo = document.querySelector('.main-header h1');
    const subtitulo = document.querySelector('.main-header p');
    const btnExplorar = document.querySelector('.btn-catalogo-principal');
    const btnVolverInterno = document.querySelector('.btn-volver'); // Si añades esta clase a tus botones de volver

    if (titulo) titulo.innerText = t.titulo_principal;
    if (subtitulo) subtitulo.innerText = t.subtitulo_principal;
    if (btnExplorar) btnExplorar.innerText = t.btn_explorar;
    if (btnVolverInterno) btnVolverInterno.innerText = t.volver;

    // --- TRADUCCIÓN PÁGINAS INTERNAS (DEFENSA / CIFRADO) ---
    const infoParrafo = document.getElementById('info-texto'); 
    const infoTitulo = document.getElementById('info-titulo');

    if (window.location.pathname.includes('defensa.html')) {
        if (infoTitulo) infoTitulo.innerText = t.defensa_titulo;
        if (infoParrafo) infoParrafo.innerText = t.defensa_info;
    } else if (window.location.pathname.includes('cifrado.html')) {
        if (infoTitulo) infoTitulo.innerText = t.cifrado_titulo;
        if (infoParrafo) infoParrafo.innerText = t.cifrado_info;
    }

    // --- RENDERIZAR BOLAS DEL INDEX ---
    const contenedorIndex = document.getElementById('contenedor-proyectos-principales');
    if (contenedorIndex) {
        contenedorIndex.innerHTML = ""; 
        proyectos.forEach(proy => {
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
                </div>`;
            contenedorIndex.appendChild(link);
        });
    }

    // --- RENDERIZAR CATÁLOGO ---
    const grid = document.getElementById('grid-empresas');
    if (grid) {
        grid.innerHTML = ""; 
        conceptos.forEach((nombre, index) => {
            const bola = document.createElement('a');
            bola.className = "circle-small";
            bola.style.animationDelay = `${index * 0.05}s`; 
            bola.innerHTML = `<span>${nombre.toUpperCase()}</span>`;
            grid.appendChild(bola);
        });
    }
}
