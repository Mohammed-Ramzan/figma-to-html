//for mobile and tablet menu
const hamburger = document.querySelector('.humburger');
let menu = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    menu.classList.toggle("toggle");
});

