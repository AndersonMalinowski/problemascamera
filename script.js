// Modais
const modalLogin = document.getElementById('modalLogin');
const modalRegister = document.getElementById('modalRegister');

const btnLogin = document.getElementById('btnLogin');
const btnRegister = document.getElementById('btnRegister');

const linkRegister = document.getElementById('linkRegister');
const linkLogin = document.getElementById('linkLogin');

const closeBtns = document.querySelectorAll('.close-btn');

// Abrir modais
btnLogin.addEventListener('click', () => {
    modalLogin.style.display = 'flex';
    modalRegister.style.display = 'none';
});

btnRegister.addEventListener('click', () => {
    modalRegister.style.display = 'flex';
    modalLogin.style.display = 'none';
});

// Alternar entre login e cadastro
linkRegister.addEventListener('click', (e) => {
    e.preventDefault();
    modalLogin.style.display = 'none';
    modalRegister.style.display = 'flex';
});

linkLogin.addEventListener('click', (e) => {
    e.preventDefault();
    modalRegister.style.display = 'none';
    modalLogin.style.display = 'flex';
});

// Fechar modais
closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modalLogin.style.display = 'none';
        modalRegister.style.display = 'none';
    });
});

// Simulação de envio
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('✅ Login realizado com sucesso! (Demo)');
    modalLogin.style.display = 'none';
});

document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('✅ Conta criada com sucesso! (Demo)');
    modalRegister.style.display = 'none';
});

// Efeito de scroll (mantido do original)
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.glass-card, .storage-section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    console.log("SafeVision carregado com sucesso.");
});
