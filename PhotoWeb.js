const menuBtn = document.getElementById("menu-btn")
const navLinks = document.getElementById("nav-links")
const menuBtnIcon = document.querySelector("i")

menuBtn.addEventListener("click", (e) =>{
    navLinks.classList.toggle("open")

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen?"ri-close-line":"ri-menu-line");
});

navLinks.addEventListener("click", (e)=>{
    navLinks.classList.remove("open")
    menuBtnIcon.setAttribute("class", "ri-menu-line")
})
// const scrollRevealOption = {
//     distance: "50px",
//     origin: "bottom",
//     duration: 1000,
// };

// scrollRevealOption().reveal(".about_container .section_header", {
//     ...scrollRevealOption,
// } )
const sr = ScrollReveal();

// Define your scrollRevealOptions
const scrollRevealOptions = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// Use ScrollReveal to reveal elements
sr.reveal(".about_container .section_header", scrollRevealOptions);

sr.reveal(".about_container .section_description", {
    ...scrollRevealOptions, // Use spread operator to merge options
    delay: 500,
    interval: 500
});

sr.reveal(".about_container img", {
    ...scrollRevealOptions, // Use spread operator to merge options
    delay: 1500
});

sr.reveal(".service_container .section_header",scrollRevealOptions);

sr.reveal(".service_container .service_description",{
    ...scrollRevealOptions,
    delay:500,
    // interval: 500
})
sr.reveal(".service_card",{
    duration:1000,
    delay:1000,
    interval:500
})

const swiper = new Swiper(".swiper", {
    loop: true,
    pagination:{
        el: ".swiper-pagination",
    },
});
sr.reveal(".blog_content .section_header", scrollRevealOptions);

sr.reveal(".blog_content h4", {
    ...scrollRevealOptions,
    delay:500,
})
sr.reveal(".blog_content p", {
    ...scrollRevealOptions,
    delay:1000,
})
sr.reveal(".blog_content blog_btn", {
    ...scrollRevealOptions,
    delay:500,
});

const instagram = document.querySelector(".instagram_flex")

Array.from(instagram.children).forEach(item => {
    const duplicateNode = item.cloneNode(true)
    duplicateNode.setAttribute("aria-hidden", true);
    instagram.appendChild(duplicateNode);
})