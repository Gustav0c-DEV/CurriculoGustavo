// Rolagem suave para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Fecha o menu mobile após o clique
        document.querySelector('.nav-menu').classList.remove('active');
        document.getElementById('menu-toggle').setAttribute('aria-expanded', 'false');
    });
});

// Alternância do menu mobile
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const expanded = navMenu.classList.contains('active');
    menuToggle.setAttribute('aria-expanded', expanded);
});

// Botão voltar ao topo
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Validação do formulário
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }

    // Simula o envio do formulário
    alert('Mensagem enviada com sucesso!');
    form.reset();
});

// Animações de rolagem para seções
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
}); < /content> <
parameter name = "filePath" > c: \Users\ oliveira .5939\ Saved Games\ Script.JS