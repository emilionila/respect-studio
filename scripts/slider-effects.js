const secondCard = document.querySelector('.card-2');
const activeElements = document.querySelectorAll('.active-color');
const cardOneSvg = document.querySelectorAll('.card-1-svg');

secondCard.addEventListener('mouseover', () => {
    activeElements.forEach(element => {
        element.style.color = '#5D646B';
    });

    cardOneSvg.forEach(element => {
        element.style.color = '#5D646B';
        element.style.stroke = '#5D646B';
        element.style.fill = '#5D646B';
    });
});

secondCard.addEventListener('mouseout', () => {
    activeElements.forEach(element => {
        element.style.color = '#fff';
    });

    cardOneSvg.forEach(element => {
        element.style.color = '#fff';
        element.style.stroke = '#fff';
        element.style.fill = '#fff';

    });
});
