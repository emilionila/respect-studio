document.addEventListener('DOMContentLoaded', function () {
    const animateText = (textElement) => {
        const lines = textElement.innerHTML.split('<br>');
        textElement.innerHTML = lines.map(line => `${line
            .split('')
            .map(letter => `<span class="letter">${letter === ' ' ? '&nbsp;' : letter}</span>`)
            .join('')}
        `).join('<br>');

        const letterElements = textElement.querySelectorAll('.letter');

        gsap.from(letterElements, {
            duration: 0.3,
            opacity: 0,
            stagger: 0.05,
            scrollTrigger: {
                trigger: textElement,
                start: 'top 90%',
            },
        });
    };

    const textElementH1 = document.querySelector('.h1');
    animateText(textElementH1);

    const textElementChartsTitle = document.querySelector('.charts-title');
    animateText(textElementChartsTitle);

    const textElementPartners = document.querySelector('.h2');
    animateText(textElementPartners);

    const headingSubtitle = document.querySelector('.heading-subtitle');
    const hrElements = document.querySelectorAll('.hr');
    const subtitle = document.querySelector('.subtitle');

    gsap.from([headingSubtitle, ...hrElements, subtitle], {
        duration: 0.5,
        opacity: 0,
        x: -50,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: textElementPartners,
            start: 'top 50%',
        },
    });
});
