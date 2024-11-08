function triggerExplosion() {
    const textSection = document.getElementById('text-section');
    textSection.style.display = 'block';

    createExplosion();
}

function createExplosion() {
    const container = document.querySelector('.background');
    const particleCount = 100; 

    for (let i = 0; i < particleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');

        sparkle.style.top = '50%';
        sparkle.style.left = '50%';

        sparkle.style.setProperty('--x', Math.random() * 2 - 1); 
        sparkle.style.setProperty('--y', Math.random() * 2 - 1); 

        container.appendChild(sparkle);

        sparkle.addEventListener('animationend', () => {
            sparkle.remove();
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const particleCount = 100;
    const background = document.querySelector('.background');

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        background.appendChild(particle);
    }
});
