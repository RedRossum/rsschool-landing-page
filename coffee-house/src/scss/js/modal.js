export class Modal {
    modalCard = null;
    priceElement = null;
    currentSize = 's';
    selectedAdditives = [];

    constructor({ name, description, price, category, sizes, additives }) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.sizes = sizes;
        this.additives = additives;
    }

    buildModal() {
        const template = document.getElementById('modal-card-template');
        this.modalCard = template.content.cloneNode(true);
        //image
        const imageElement = this.modalCard.querySelector('.modal-card__image');
        imageElement.src = `./assets/${this.name}.png`;
        imageElement.alt = this.name;
        //title, descr
        const titleElement = this.modalCard.querySelector('.modal-card__title');
        titleElement.textContent = this.name;
        const descElement = this.modalCard.querySelector('.modal-card__description');
        descElement.textContent = this.description;
        //price
        this.priceElement = this.modalCard.querySelector('.js-total-price');
        this.priceElement.textContent = `$${Number(this.price).toFixed(2)}`;
        //close-btn
        const closeBTN = this.modalCard.querySelector('.modal-card__close-btn');

        closeBTN.addEventListener('click', function (event) {
            if (event.target.classList.contains('modal-card__close-btn')) {
                document.querySelector('.blackout').classList.add('hidden');
                document.querySelector('body').classList.remove('scroll-disabled');
            }
        });
        //size
        const sizeButtons = this.modalCard.querySelector('.js-size-options');
        const sizeButtonsList = this.modalCard.querySelectorAll('.js-size-options .modal-card__option-btn');
        const sizeKeys = ['s', 'm', 'l'];

        sizeButtonsList.forEach((button, index) => {
            const key = sizeKeys[index];
            const sizeData = this.sizes[key];
            button.lastChild.nodeValue = ` ${sizeData.size}`;
        });

        sizeButtons.addEventListener('click', (event) => {
            const button = event.target.closest('.modal-card__option-btn');
            if (!button) return;

            sizeButtons.querySelectorAll('.modal-card__option-btn').forEach(btn =>
                btn.classList.remove('modal-card__option-btn--active')
            );

            button.classList.add('modal-card__option-btn--active');

            const index = Array.from(sizeButtonsList).indexOf(button);
            this.currentSize = sizeKeys[index];

            this.updatePriceOnScreen();
        });
        //additive
        const additiveOptions = this.modalCard.querySelector('.js-additives-options');
        const additiveButtonsList = this.modalCard.querySelectorAll('.js-additives-options .modal-card__option-btn');

        additiveButtonsList.forEach((button, index) => {
            const additiveData = this.additives[index];
            button.lastChild.nodeValue = ` ${additiveData.name}`;
        });

        additiveOptions.addEventListener('click', (event) => {
            const button = event.target.closest('.modal-card__option-btn');
            if (!button) return;
            button.classList.toggle('modal-card__option-btn--active');
            const index = Array.from(additiveButtonsList).indexOf(button);
            if (button.classList.contains('modal-card__option-btn--active')) {
                this.selectedAdditives.push(index);
            } else {
                this.selectedAdditives = this.selectedAdditives.filter(i => i !== index);
            }

            this.updatePriceOnScreen();
        });

        return this.modalCard;
    }

    updatePriceOnScreen() {
        const finalPrice = this.calculatePrice();
        if (this.priceElement) {
            this.priceElement.textContent = `$${finalPrice.toFixed(2)}`;
        }
    }

    calculatePrice() {
        let totalPrice = Number(this.price);
        const activeSizeData = this.sizes[this.currentSize];
        totalPrice += Number(activeSizeData['add-price']);
        this.selectedAdditives.forEach(index => {
            const additiveData = this.additives[index];
            totalPrice += Number(additiveData['add-price']);
        });

        return totalPrice;
    }
}
