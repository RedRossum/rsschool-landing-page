import '../main.scss';
// import './menu.html';
import {products} from '../js/products.js';
import {Card} from '../js/card.js'
import {Modal} from '../js/modal.js'

const menu = document.querySelector('.menu');
menu.classList.toggle('active');

const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const blackout = document.querySelector('.blackout');

hamburger.addEventListener('click', function () {
    navigation.classList.toggle('active');
    hamburger.classList.toggle('open');
    blackout.classList.toggle('hidden');
    document.querySelector('body').classList.toggle('scroll-disabled');
    navigation.addEventListener('click', function (event) {
        if (event.target.classList.contains('navigation__link')) {
            hamburger.classList.remove('open');
            navigation.classList.remove('active');
            blackout.classList.add('hidden');
            document.querySelector('body').classList.remove('scroll-disabled');
        }
    });
    blackout.addEventListener('click', function (event) {
        if (event.target.classList.contains('blackout')) {
            hamburger.classList.remove('open');
            navigation.classList.remove('active');
            blackout.classList.add('hidden');
            document.querySelector('body').classList.remove('scroll-disabled');
        }
    });
});

//render cards
window.onload = function () {
    renderingMenuCards();
    addToolsClickHandler();
};

function renderingMenuCards() {
    let menuCards = getClearMenuCards();
    let actualProducts = getActualProducts();
    generateCardInstances(actualProducts).forEach(Card => {
        menuCards.append(Card.renderingCard())
    })
}

function getClearMenuCards() {
    let MenuCards = document.querySelector('.menu__cards');
    MenuCards.innerHTML = '';
    return MenuCards
}

function generateCardInstances(actualProducts) {
    let instances = [];
    actualProducts.forEach(prodObj => {
        instances.push(new Card(prodObj))
    });
    return instances;
}

//buttons menu category switch
const menuCategoryBTN = document.querySelector('.menu-buttons');
menuCategoryBTN.addEventListener('click', function (event) {
    if (event.target.classList.contains('menu__button')) {
        let BTN = document.querySelector('.menu__button_selected');
        BTN.classList.remove('menu__button_selected');
        event.target.classList.add('menu__button_selected');
        renderingMenuCards();
    }

})

function getActualProducts() {
    let category = document.querySelector('.menu__button_selected').innerHTML;
    return products.filter(obj => obj.category === category.toLowerCase());
}

let cardsBTN = document.querySelector('.cards-button');
const menuWrapper = document.querySelector('.grid-menu');
const menuCardsGrid = document.querySelector('.menu__cards-grid');
cardsBTN.addEventListener('click', function () {
    const cards = document.querySelectorAll('.menu__card');
    for (let card of cards) {
        card.style.display = 'flex';
    }
    menuWrapper.classList.toggle('grid-menu');
    menuWrapper.classList.toggle('grid-menu-s');
    menuCardsGrid.classList.toggle('menu__cards-grid');
    menuCardsGrid.classList.toggle('menu__cards-grid-s');
    cardsBTN.classList.add('display-none')
});