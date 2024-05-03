const wrapper = document.querySelector('.wrapper');
const container = document.querySelector('.container');
const btnSignUp = document.querySelector('.btn-signUp');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btn-logIn');
const iconClose = document.querySelector('.icon-close');
const creators = document.querySelectorAll('.creator-img .creator');
var creatorCards = document.querySelectorAll('.creator-card');
const aboutLink = document.querySelector('a[href="#sec"]');
const homeLink = document.querySelector('a[href="#container"]');
const contactLink = document.querySelector('a[href="#foot"]');
const creatorLink = document.querySelector('a[href="#creators"]');
const homeLogo = document.querySelector('.logo');
const navBtn = document.querySelector('.nav-bar-btn');
const navMenu = document.querySelector('.nav-menu');
const navContent = document.querySelector('.nav-content');


registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
    }
);

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
    }
);

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    loginLink.click();
    });

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    });

btnSignUp.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    registerLink.click();
    });

    document.addEventListener('DOMContentLoaded', function () {
        // Get all elements with the class 'creator-card'
       
        // Add a click event listener to each 'creator-card'
        creatorCards.forEach(function (card) {
            card.addEventListener('click', function () {
                // Toggle the 'flipped' class on the clicked 'creator-card'
                this.classList.toggle('flipped');
            });
        });
    });

 // Add a click event listener to the 'About' link
 aboutLink.addEventListener('click', function (event) {
     event.preventDefault();

     // Get the target section ('sec')
     const aboutSection = document.querySelector('.sec');

     // Scroll to the target section
     aboutSection.scrollIntoView({
         behavior: 'smooth'
     });
 });

    // Add a click event listener to the 'Home' link
    homeLink.addEventListener('click', function (event) {
        event.preventDefault();

        // Get the target section ('container')
        const homeSection = document.querySelector('.container');

        // Scroll to the target section
        homeSection.scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Add a click event listener to the 'Contact' link
    contactLink.addEventListener('click', function (event) {
        event.preventDefault();

        // Get the target section ('contact')
        const contactSection = document.querySelector('.foot');

        // Scroll to the target section
        contactSection.scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Add a click event listener to the 'Creator' link
    creatorLink.addEventListener('click', function (event) {
        event.preventDefault();

        // Get the target section ('creator')
        const creatorSection = document.querySelector('.creators');

        // Scroll to the target section
        creatorSection.scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Add a click event listener to the 'Home' logo
    homeLogo.addEventListener('click', function (event) {
        event.preventDefault();

        // Get the target section ('container')
        const homeSection = document.querySelector('.container');

        // Scroll to the target section
        homeSection.scrollIntoView({
            behavior: 'smooth'
        });
    });

//Show nav-menu when nav-bar-btn is clicked
navBtn.addEventListener('click', () => {
    navContent.classList.toggle('active');
    }
);

navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('active');
});
