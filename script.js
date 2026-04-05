const card = document.getElementById('squidCard');

// Efeito ao passar o mouse (desktop)
card.addEventListener('mouseenter', () => {
    card.classList.add('flipped');
});

// Volta ao normal ao tirar o mouse
card.addEventListener('mouseleave', () => {
    card.classList.remove('flipped');
});

// Suporte para clique (mobile/toque)
card.addEventListener('click', () => {
    card.classList.toggle('flipped');
});