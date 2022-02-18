
import './about.css'
const loadAboutPage = function() {
    let content = document.querySelector('.content')
    let page = document.createElement('div')
    page.className = 'about-page' 
    let heading = document.createElement('h2')
    heading.textContent = 'About Us'
    page.appendChild(heading)
    content.appendChild(page)
}

export default loadAboutPage