const proyectos = [
    {
        nombre: "DEFENSA",
        archivo: "proyecto 1",
        descripcion: "Análisis de Red",
        logo: "🛡️" // Puedes usar un emoji o ruta de imagen
    },
    {
        nombre: "CIFRADO",
        archivo: "proyecto 2",
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

