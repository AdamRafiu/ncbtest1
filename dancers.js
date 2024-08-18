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

    let sectionInputIconContainer = document.querySelector(".sectionInputIconContainer .sectionInput input"),
sectionImageContent = document.querySelectorAll(".sectionImageContent")

sectionInputIconContainer.addEventListener("keyup", e =>{
    if(e.key == "Enter") {
        let searchValue = sectionInputIconContainer.value,
        value = searchValue.toLowerCase();
        sectionImageContent.forEach(image => {
            if(value === image.dataset.name){
                return image.style.display = "block";
            }
            image.style.display = "none";
        })
    }
})

sectionInputIconContainer.addEventListener("keyup", () =>{
    if(sectionInputIconContainer.value != "") return;

    sectionImageContent.forEach(image => {
        image.style.display = "block";
    });
});