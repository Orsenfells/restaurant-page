import loadHomePage from "./page-load";
import loadContactPage from "./contact"
import loadAboutPage from "./about";
import loadHeader from "./header"
loadHeader()
loadHomePage()
loadAboutPage()
loadContactPage()
let homeTab = document.querySelector('.home-tab')
let contactTab = document.querySelector('.contact-tab')
let aboutTab = document.querySelector('.about-tab')
let tabArr = [homeTab, contactTab, aboutTab]

tabArr.forEach(tab => {
    tab.addEventListener('click', () => {
        let target = tab.dataset.tabTarget
        tabArr.forEach(tab => {
            let page = document.querySelector(tab.dataset.tabTarget)
            page.style.display = 'none'
        })
        let page = document.querySelector(tab.dataset.tabTarget)
        page.style.display = 'block'
        // let openTab = document.querySelector(e.target.dataset.tabTarget)
        // openTab.style.display = 'none'
    })
})