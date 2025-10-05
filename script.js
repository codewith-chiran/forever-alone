// Text sequence timing
document.addEventListener('DOMContentLoaded', function() {
    // Create floating emojis
    createFloatingEmojis();

    // Start text sequence after a short delay
    setTimeout(startTextSequence, 1000);
});

function createFloatingEmojis() {
    const emojis = ['✨', '💖', '🌸', '🌟', '🦋'];
    const container = document.getElementById('floating-emojis');

    for (let i = 0; i < 15; i++) {
        const emoji = document.createElement('div');
        emoji.classList.add('floating-emoji');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

        // Random position
        emoji.style.left = Math.random() * 100 + 'vw';

        // Random animation delay and duration
        const delay = Math.random() * 15;
        const duration = 10 + Math.random() * 10;
        emoji.style.animationDelay = delay + 's';
        emoji.style.animationDuration = duration + 's';

        container.appendChild(emoji);
    }
}

function startTextSequence() {
    const lines = document.querySelectorAll('.text-line');

    // Show first line
    setTimeout(() => {
        lines[0].classList.add('active');
    }, 500);

    // Show second line
    setTimeout(() => {
        lines[0].classList.remove('active');
        lines[1].classList.add('active');
    }, 2500);

    // Show third line
    setTimeout(() => {
        lines[1].classList.remove('active');
        lines[2].classList.add('active');
    }, 4500);

    // Show fourth line with confetti
    setTimeout(() => {
        lines[2].classList.remove('active');
        lines[3].classList.add('active');
        createConfetti();
    }, 6500);

    // Show icons
    setTimeout(() => {
        document.querySelector('.icons-container').classList.add('show');
    }, 8000);
}

function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const colors = ['#ff69b4', '#ffd700', '#00ffff', '#7cfc00', '#ffa500', '#9370db'];

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti-piece');

        // Random properties
        const left = Math.random() * 100;
        const animationDelay = Math.random() * 5;
        const animationDuration = 3 + Math.random() * 2;
        const size = 5 + Math.random() * 10;

        confetti.style.left = left + 'vw';
        confetti.style.animationDelay = animationDelay + 's';
        confetti.style.animationDuration = animationDuration + 's';
        confetti.style.width = size + 'px';
        confetti.style.height = size * 2 + 'px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        confettiContainer.appendChild(confetti);

        // Remove confetti after animation completes
        setTimeout(() => {
            confetti.remove();
        }, (animationDelay + animationDuration) * 1000);
    }
}
