const particleContainer = document.getElementById('particle-container');

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDuration = Math.random() * 2 + 1 + 's';
    particleContainer.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 2000);
}

setInterval(createParticle, 500);
