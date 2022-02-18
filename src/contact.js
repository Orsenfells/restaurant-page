
import './contact.css'
const contactInfo = function() {
    let container = document.createElement('div')
    container.className = 'contact-content'
    let infoContainer = document.createElement('div')
    let operatingHoursContainer = document.createElement('div');
    let hoursHeader = document.createElement('h3')
    let contactInfoHeader = document.createElement('h3')
    let hours = document.createElement('div')
    let number = document.createElement('div')
    contactInfoHeader.textContent = 'Contact Info'
    number.textContent = '(469) 281-4830'
    hours.textContent = '3:30pm - 12pm'
    hoursHeader.textContent = 'Hours of operation'
    infoContainer.appendChild(contactInfoHeader)
    infoContainer.appendChild(number)
    operatingHoursContainer.appendChild(hoursHeader)
    operatingHoursContainer.appendChild(hours)
    container.appendChild(infoContainer)
    container.appendChild(operatingHoursContainer)
    return container
}

const contact = function() {
    let containerDiv = document.createElement('div')
    containerDiv.className = 'contact-container'
    let contactHeader = document.createElement('h2')
    contactHeader.textContent = 'Reach Out!'
    containerDiv.appendChild(contactHeader)
    containerDiv.appendChild(contactInfo())
    return containerDiv
}

const loadContactPage = function() {
    let content = document.querySelector('#content');
    let page = document.createElement('div')
    page.className = 'contact-page'
    
    page.appendChild(contact())
    content.appendChild(page)
}

export default loadContactPage