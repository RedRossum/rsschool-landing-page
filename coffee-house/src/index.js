import './scss/main.scss';
import './index.html';
// import './scss/pages/menu.html';


const linkPage = document.querySelector('.our-page');
const linkPageS = document.querySelector('.animation');

function moveLocation() {
    window.location.href = 'menu.html';
}

linkPage.addEventListener('click', moveLocation);
linkPageS.addEventListener('click', moveLocation);
//burger
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

//slider
const sliderControlRight = document.querySelector('.right');
const sliderControlLeft = document.querySelector('.left');
const carousel = document.querySelector('.carousel')
const rightCard = document.querySelector("#right-card");
const leftCard = document.querySelector("#left-card");
const activeCard = document.querySelector('#active-card');


function moveRight() {
    carousel.classList.add('move-right');
    sliderControlRight.removeEventListener('click', moveRight);
    sliderControlLeft.removeEventListener('click', moveLeft);
}

function moveLeft() {
    carousel.classList.add('move-left');
    sliderControlLeft.removeEventListener('click', moveLeft);
    sliderControlRight.removeEventListener('click', moveRight);
}

sliderControlRight.addEventListener('click', moveRight);
sliderControlLeft.addEventListener('click', moveLeft);


carousel.addEventListener('animationend', function (event) {
    let stage;
    if (event.animationName === 'roll-right') {
        carousel.classList.remove('move-right');
        stage = activeCard.innerHTML;
        activeCard.innerHTML = rightCard.innerHTML;
        rightCard.innerHTML = leftCard.innerHTML;
        leftCard.innerHTML = stage;
    } else {
        carousel.classList.remove('move-left');
        stage = activeCard.innerHTML;
        activeCard.innerHTML =  leftCard.innerHTML;
        leftCard.innerHTML = rightCard.innerHTML;
        rightCard.innerHTML = stage;
    }

    sliderControlRight.addEventListener('click', moveRight);
    sliderControlLeft.addEventListener('click', moveLeft);
});