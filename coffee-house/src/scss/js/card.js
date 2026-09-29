export class Card {
    constructor({name, description, price, category, sizes}) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
    }

    renderingCard() {
        let template = '';
        let card = document.createElement('div');
        card.className = 'menu__card';
        template += `<div class="menu__box"><img class="menu__img" src="assets/${this.name}.png" alt="${this.name}"></div>`;
        template += `<div class="menu__card-content">
          <h3 class="menu__title">${this.name}</h3>
          <p class="menu__text">${this.description}</p>
          <p class="menu__price">${this.price}</p></div>
        </div>`;
        card.innerHTML = template;
        return card;
    };
}