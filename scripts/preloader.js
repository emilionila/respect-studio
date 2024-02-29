const textElements = document.querySelectorAll('.main-logo-text');

const startLoader = () => {
    let counterElement = document.querySelector('.counter');
    let currentValue = 0;

    const updateCounter = () => {
        if (currentValue === 100) {
            return;
        }

        currentValue += Math.floor(Math.random() * 10) + 1;

        if (currentValue > 100) {
            currentValue = 100;

            textElements.forEach(textElement => {
                const words = textElement.innerText.split(' ');
                textElement.style.zIndex = 11;
                textElement.innerHTML = words.map(word => {
                    const letters = word.split('');
                    return `<span class="word">${letters.map(letter => `<span class="letter">${letter}</span>`).join('')}</span>`;
                }).join(' ');

                const letterElements = textElement.querySelectorAll('.letter');

                gsap.from(letterElements, {
                    duration: 0.2,
                    opacity: 0,
                    y: 0,
                    rotation: 0,
                    stagger: 0.3,
                });
            });
        }

        counterElement.textContent = currentValue;

        let delay = Math.floor(Math.random() * 200) + 50;

        setTimeout(updateCounter, delay)
    }

    updateCounter();
}

startLoader();

gsap.to('.counter', 0.25, {
    delay: 3.5,
    opacity: 0,
});

gsap.to('.bar', 1.5, {
    delay: 5,
    height: 0,
    stagger: {
        amount: 0.5,
    },
    ease: 'power4.inOut',
    onComplete: () => {
        textElements.forEach(textElement => {
            textElement.style.zIndex = 2;
        })
        document.querySelector('.overlay').classList.remove('overlay');
        document.querySelector('.bar').classList.remove('bar');
        document.querySelector('.counter').classList.remove('counter');

    }
});
