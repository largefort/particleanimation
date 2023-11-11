const particleContainer = document.getElementById('particle-container');

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.width = Math.random() * 10 + 4 + 'px';
    particle.style.height = particle.style.width;
    particle.style.backgroundColor = getRandomColor();
    particle.style.animationDuration = Math.random() * 2 + 1 + 's';
    particleContainer.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 2000);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

setInterval(createParticle, 500);
