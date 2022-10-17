import menu from '../menu.json';

import cardsTemplate from '../templates/food-card.hbs';

const markup = cardsTemplate(menu);

const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', markup);