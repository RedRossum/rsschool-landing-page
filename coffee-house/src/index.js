import './scss/main.scss';
import './index.html';
import './scss/pages/second.html';

const linkPage = document.querySelector('.our-page')

function moveLocation() {
    window.location.href = "./src/scss/pages/second.html'"
}

linkPage.addEventListener('click', moveLocation)