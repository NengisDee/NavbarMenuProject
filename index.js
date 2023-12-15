const bar = document.querySelector(".fa-bars"); // Use a period (.) for class selector
const menu = document.querySelector(".menu");

bar.addEventListener("click", () => {
    menu.classList.toggle("show-menu"); // Use a hyphen (-) in class name
});
