import loadHomePage from "./page-load";
import loadContactPage from "./contact"
import loadAboutPage from "./about";
import loadHeader from "./header"
loadHeader()
let homeTab = document.querySelector('.home-tab')
let contactTab = document.querySelector('.contact-tab')
let aboutTab = document.querySelector('.about-tab')
let tabArr = [homeTab, contactTab, aboutTab]

// tabArr.forEach(tab => {
//     tab.addEventListener('click', () => {
//         console.log(tab.dataset.tabTarget)
//         let target = tab.dataset.tabTarget
//         // let openTab = document.querySelector(e.target.dataset.tabTarget)
//         // openTab.style.display = 'none'
//     })
// })