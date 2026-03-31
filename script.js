// script.js
// Adiciona um efeito de revelação ao rolar a página
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.info-section');
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
    console.log("Sistema CamFix carregado com sucesso.");
});
