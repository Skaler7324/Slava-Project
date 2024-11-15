'use strict'

const navOpenBtn = document.querySelector("[data-nav-open-btn")
const navbar = document.querySelector("[data-navbar]")
const navCloseBtn = document.querySelector("[data-nav-close-btn]")

const navElems = [navOpenBtn, navCloseBtn]

for (let i = 0; i < navElems.length; i++){
    navElems[i].addEventListener("click", function() {
        navbar.classList.toggle("active")
    })
}



console.log(navElems);
        