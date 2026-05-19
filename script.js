// Selecionar o botão hamburger (que será criado no CSS/HTML)
const linkZk = document.querySelector('.link-zk');
const buttonZk = document.querySelector('.button-zk');

// Criar hamburger se não existir
let hamburger = document.querySelector('.hamburger-zk');
if (!hamburger) {
    hamburger = document.createElement('button');
    hamburger.classList.add('hamburger-zk');
    hamburger.innerHTML = '<span></span><span></span><span></span>';
    linkZk.appendChild(hamburger);
}

// Criar sidebar se não existir
let sidebar = document.querySelector('.sidebar-zk');
if (!sidebar) {
    sidebar = document.createElement('div');
    sidebar.classList.add('sidebar-zk');
    
    // Copiar os links da navbar
    const links = Array.from(linkZk.querySelectorAll('a'));
    const agendarBtn = linkZk.querySelector('.button-agenda');
    
    links.forEach(link => {
        sidebar.appendChild(link.cloneNode(true));
    });
    
    if (agendarBtn) {
        sidebar.appendChild(agendarBtn.cloneNode(true));
    }
    
    document.body.appendChild(sidebar);
}

// Toggle do hamburger
hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    hamburger.classList.toggle('active');
    sidebar.classList.toggle('active');
});

// Fechar ao clicar em um link da sidebar
sidebar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        sidebar.classList.remove('active');
    });
});

// Fechar ao clicar fora
document.addEventListener('click', (e) => {
    if (!linkZk.contains(e.target) && !sidebar.contains(e.target)) {
        hamburger.classList.remove('active');
        sidebar.classList.remove('active');
    }
});