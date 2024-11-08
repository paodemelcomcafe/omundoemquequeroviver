function showTextsAndSparkles() {
    const textSection = document.getElementById('text-section');
    textSection.style.display = 'block';

    createSparkles();
}

function createSparkles() {
    const container = document.querySelector('.container');
    for (let i = 0; i < 30; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        
        // Posição aleatória ao redor do título
        sparkle.style.top = `${50 + Math.random() * 10 - 5}%`;
        sparkle.style.left = `${50 + Math.random() * 20 - 10}%`;
        
        container.appendChild(sparkle);

        // Remover o brilho após a animação
        sparkle.addEventListener('animationend', () => {
            sparkle.remove();
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Gera partículas de fundo
    const particleCount = 100;
    const background = document.querySelector('.background');

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Posição e animação aleatória
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${3 + Math.random() * 2}s`;
        
        background.appendChild(particle);
    }
});
