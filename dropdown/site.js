const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownContent = document.querySelector(".dropdown-content");
const dropdownLinks = dropdownContent.querySelectorAll("a");
const dropdownActiveClass = "dropdown-active";

dropdownToggle.addEventListener("click", () => {
    dropdownContent.classList.toggle(dropdownActiveClass);
});

dropdownLinks.forEach(link => {
    link.addEventListener("click", () => {
        dropdownContent.classList.toggle(dropdownActiveClass);
    });
});


