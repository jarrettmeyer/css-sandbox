if (window.location.hash === "") {
    window.location.hash = "#one";
}

const footerLinks = document.querySelectorAll(".footer-link");

footerLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        document.querySelector(".footer-link.active").classList.remove("active");        
        link.classList.add("active");
    });
});

