const horizontalBars = document.querySelectorAll('.horizontal-chart');
const horizontalBarContainer = document.querySelector('.horizontal-charts');

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: horizontalBarContainer,
    start: "top 110%",
    end: "top 50%",
    onEnter: () => {
        gsap.from(horizontalBars, {
            duration: 0.3,
            opacity: 0,
            x: -100,
            ease: 'power2.out',
            stagger: 0.5,
        });
    },
});
