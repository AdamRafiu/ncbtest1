const navContent = document.querySelector(".navContent"),
    newsLetterButtons = document.querySelector("#newLetterButtons"),
    closeEmailSubscription = document.querySelector(".closeEmailSubscription")


    newsLetterButtons.addEventListener("click", () => {
        navContent.classList.toggle("openForm");
        navContent.style.transition = "transition: all 0.6s cubic-bezier(0.68, -0.55, -0.265, 1.55)";
    })
    closeEmailSubscription.addEventListener("click", () => {
        navContent.classList.remove("openForm");
    })

    const navSlide = () => {
        const navMenuContainer = document.querySelector('.navMenuContainer');
        const navList = document.querySelector('.navlinkListContainer');
        const navLink = document.querySelectorAll('.navlinkListContainer .navLinkList li');
        navMenuContainer.addEventListener('click', () => {
            navList.classList.toggle('navlinkListContainer-checked');
            navLink.forEach((link ,index) => {
                if(link.style.animation) {
                    link.style.animation = "";
                } else {
                    link.style.animation = `navLink 0.5s ease forwards ${ index / 5 + 0.2}s`;
                }
            });
            navMenuContainer.classList.toggle('toggle');
        });
    
    }
    navSlide();

    let slideIndex = 0;
let autoSlide;

const showSlide = (index) => {
    const slides = document.querySelectorAll('.mainSectionContentSlide');
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
    }, 10000); // 10,000 milliseconds (10 seconds)
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
