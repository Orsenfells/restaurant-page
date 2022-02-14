import loadHomePage from "./page-load";
import loadContactPage from "./contact"
import loadAboutPage from "./about";

loadHomePage()
let homeTab = document.querySelector('.home-tab')
let contactTab = document.querySelector('.contact-tab')
let aboutTab = document.querySelector('.about-tab')
let tabArr = [homeTab, contactTab, aboutTab]

tabArr.forEach(tab => {
    tab.addEventListener('click', (e) => {
        console.log(e.target)
    })
})