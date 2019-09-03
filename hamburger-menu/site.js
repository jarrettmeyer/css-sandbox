const hamburger = document.querySelector(".hamburger");
const navLeft = document.querySelector(".nav-left");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
    navLeft.classList.toggle("visible");
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navLeft.classList.remove("visible");
    });
});


