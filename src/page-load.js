import './style.css'
import './tab-style.css'
import './pizza.jpg'
import header from './header.js'


const loadHomePage = function() {
    let content = document.querySelector('#content');
    content.appendChild(header())
    let page = document.createElement('div')
    page.className = 'home-page'
    
    let hero = document.createElement('div');
    let orderContainer = document.createElement('div')
    let div = document.createElement('div')
    let deliveryButton = document.createElement('button')
    let carryOutButton = document.createElement('button')
    let restaurantInfo = document.createElement('div');
    let h2 = document.createElement('h2')
    let p = document.createElement('p')
    hero.className = 'hero';
    restaurantInfo.className = 'restaurant-info';
    orderContainer.className = 'order-container';
    orderContainer.textContent = 'Order Online';
    deliveryButton.textContent = 'DELIVERY';
    carryOutButton.textContent = 'CARRY OUT';
    h2.textContent = 'About Pizza Restaurant';
    p.textContent = 'Here at Pizza Restaurant we make our specialty pizza with the fresh organic ingrediants that our customers have come to expect and love!'
    
    
    hero.appendChild(orderContainer)
    div.appendChild(deliveryButton)
    div.appendChild(carryOutButton)
    orderContainer.appendChild(div)
    restaurantInfo.appendChild(h2)
    restaurantInfo.appendChild(p)

    
    page.appendChild(hero)
    page.appendChild(restaurantInfo)
    content.appendChild(page)

}
export default loadHomePage