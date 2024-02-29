const images = [
    '/images/01.png',
    '/images/02.png',
    '/images/03.png',
    '/images/04.png'
];

const bgc = document.querySelector('.header');
const bgcAfter = document.querySelector('.header-darked');
let currentIndex = 0;
let isScrolling = false;

const preloadImages = () => {
    images.forEach((imageSrc) => {
        const img = new Image();
        img.src = imageSrc;
    });
};

preloadImages();

const changeBackgroundImage = () => {
    bgc.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
};

changeBackgroundImage();

setInterval(changeBackgroundImage, 1800);

window.addEventListener('scroll', () => {
    if (!isScrolling) {
        isScrolling = true;

        window.requestAnimationFrame(() => {
            const scrollPosition = window.scrollY;
            const maxOpacityScroll = 300;

            const opacity = Math.min(scrollPosition / maxOpacityScroll, 0.7);
            bgcAfter.style.opacity = opacity;
            isScrolling = false;
        });
    }
});
