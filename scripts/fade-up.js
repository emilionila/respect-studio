gsap.registerPlugin(ScrollTrigger);

gsap.from(".fade-up", {
    opacity: 0,
    y: 80,
    duration: 0.03,
    stagger: 0.05,
    scrollTrigger: {
        trigger: ".fade-up",
        start: "top 100%",
        end: "top 10%",
        scrub: true,
    },
});
