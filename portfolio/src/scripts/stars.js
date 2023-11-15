document.addEventListener('DOMContentLoaded', function () {
    const starsContainer = document.querySelector('.stars-container');

    function createStar() {
        const star = document.createElement('div');
        star.classList.add('star');
        const size = Math.floor(Math.random() * 3) + 1; // Tamanho entre 1px e 3px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.opacity = Math.random();
        star.style.left = `${Math.random() * 99}%`;
        star.style.top = `${Math.random() * 99}%`;
        starsContainer.appendChild(star);

        const animationDuration = (Math.random() * 0.8) + 0.5; // Duração
        star.style.animation = `twinkle ${animationDuration}s infinite alternate`;
    }

    // Crie as estrelas
    for (let i = 0; i < 100; i++) {
        createStar();
    }
});
