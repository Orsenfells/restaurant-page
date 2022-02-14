import header from "./header"

const loadAboutPage = function() {
    let page = document.querySelector('.content')
    let heading = document.createElement('h2')
    heading.textContent = 'About Us'
    page.appendChild(header())
    page.appendChild(heading)
}

export default loadAboutPage