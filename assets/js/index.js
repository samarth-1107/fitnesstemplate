// <!-- Template by Samarth Subhash Chitley

// Website Link : samarthsubhash-chitley.web.app

// Fitness Template - Gym Trainer, Gymnasium, Personal Trainer

// Order for other templates - samarthsubhashchitley@gmail.com
// Happy Developing..!!!

// HAMBURGER
burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.navbar-nav');
burger.addEventListener('click', () => {
    navbar.classList.toggle('h-nav-resp');
    navlist.classList.toggle('v-class-resp');
})