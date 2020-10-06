import Burger from './burger.js';
import prices from './prices.js';
import calories from './calories.js';

function getSomeBurger() {
    console.log('меня кликнули!');
    let burger = new Burger(calories, prices);
    burger.getCheckers();
}

document.getElementById('gimmyToEat').addEventListener("click", getSomeBurger())