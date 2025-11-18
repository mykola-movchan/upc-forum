const menuToggle = document.querySelector('#menu-toggle');
const menu = document.querySelector('.menu');

function showMenu() {
    menu.dataset.visible = menu.dataset.visible === "no" ? "yes" : "no";
}

menuToggle.addEventListener('click', showMenu)