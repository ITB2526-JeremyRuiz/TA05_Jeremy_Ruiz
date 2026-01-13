function renderCircle(container, small) {
    return item => {
        const div = document.createElement('div');
        div.className = `proyecto-item ${small ? 'small' : ''}`;

        if (item.activo) {
            div.innerHTML = `
                <span class="tag">${item.tag}</span>
                <a href="${item.link}" class="circle-box">
                    <span class="box-text">${item.titulo}</span>
                </a>
                <span class="footer-text">${item.nombre}</span>
            `;
        } else {
            div.innerHTML = `
                <span class="tag">${item.tag || 'SECURITY NODE'}</span>
                <div class="circle-box disabled">
                    <span class="box-text">PRÓXIMAMENTE</span>
                </div>
                <span class="footer-text">EN DESARROLLO</span>
            `;
        }

        container.appendChild(div);
    };
}
