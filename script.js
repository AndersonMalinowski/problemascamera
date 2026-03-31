// script.js
const solutions = {
    quality: {
        title: "Otimização de Imagem",
        content: `
            <ul>
                <li><strong>Iluminação:</strong> O sensor da câmera precisa de luz. Evite luz atrás de você (janelas) e use uma fonte de luz frontal.</li>
                <li><strong>Limpeza:</strong> Use um pano de microfibra. Digitais na lente causam o efeito "nevoeiro".</li>
                <li><strong>Resolução:</strong> Verifique se o software (Meet, Zoom, OBS) não limitou a saída para 360p nas configurações de vídeo.</li>
            </ul>
        `
    },
    audio: {
        title: "Correção de Áudio e Voz",
        content: `
            <ul>
                <li><strong>Ganho do Microfone:</strong> Reduza o ganho para 80% nas configurações do sistema para evitar distorção (clipping).</li>
                <li><strong>Cancelamento de Eco:</strong> Use fones de ouvido para evitar que o som da sua caixa de som volte para o microfone.</li>
                <li><strong>Driver:</strong> Verifique se o driver Realtek ou da sua Webcam está atualizado no Gerenciador de Dispositivos.</li>
            </ul>
        `
    }
};

function showSolution(type) {
    const area = document.getElementById('solution-area');
    const title = document.getElementById('solution-title');
    const content = document.getElementById('solution-content');

    title.innerText = solutions[type].title;
    content.innerHTML = solutions[type].content;
    
    area.classList.remove('hidden');
    area.scrollIntoView({ behavior: 'smooth' });
}

function closeSolution() {
    document.getElementById('solution-area').classList.add('hidden');
}
