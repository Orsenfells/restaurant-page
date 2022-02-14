
const tab = function() {
    
    let tabContainer = document.createElement('ul');
    let homeTab = document.createElement('li');
    let contactTab = document.createElement('li');
    let aboutTab = document.createElement('li');
    tabContainer.className = 'tab-container'
    homeTab.textContent = 'HOME';
    homeTab.className = 'home-tab'
    homeTab.dataset.tabTarget = '.home-page'
    contactTab.textContent = 'CONTACT';
    contactTab.className = 'contact-tab'
    contactTab.dataset.tabTarget = '.contact-page'
    aboutTab.textContent = 'ABOUT';
    aboutTab.className = 'about-tab'
    aboutTab.dataset.tabTarget = '.about-page'
    tabContainer.appendChild(homeTab);
    tabContainer.appendChild(contactTab);
    tabContainer.appendChild(aboutTab);
    return tabContainer
}
const header = function() {
    let header = document.createElement('div');
    let heading = document.createElement('h1');
    heading.textContent = 'Pizza Restaurant';
    header.appendChild(heading)
    header.appendChild(tab())
    return header
}

export default header