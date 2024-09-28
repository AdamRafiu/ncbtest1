let slideIndex = 0;
let autoSlide;

const showSlide = (index) => {
    const slides = document.querySelectorAll('.content');
    const dots = document.querySelectorAll('.dot');

    // Reset display of all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Show the active slide and dot
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;

    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');
};

const moveSlide = (n) => {
    slideIndex += n;
    showSlide(slideIndex);
    resetAutoSlide();
};

const currentSlide = (n) => {
    slideIndex = n - 1;
    showSlide(slideIndex);
    resetAutoSlide();
};

const startAutoSlide = () => {
    autoSlide = setInterval(() => {
        moveSlide(1);
    }, 1000000); // 10,000 milliseconds (10 seconds)
};

const resetAutoSlide = () => {
    clearInterval(autoSlide);
    startAutoSlide();
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
    startAutoSlide();
});
