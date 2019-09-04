const navLeft = document.querySelector(".nav-left");
const toggles = navLeft.querySelectorAll(".toggle");

function findSiblingSelector(element, selector) {
    let parent = element.parentElement;
    let sibling = parent.querySelector(selector);
    return sibling;
}

toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
        let submenu = findSiblingSelector(toggle, ".nav-submenu");
        submenu.classList.toggle("active");
    });
});
