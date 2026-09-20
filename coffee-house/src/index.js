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