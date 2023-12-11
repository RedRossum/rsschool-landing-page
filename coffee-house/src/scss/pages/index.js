import '../main.scss';
// import './menu.html';

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