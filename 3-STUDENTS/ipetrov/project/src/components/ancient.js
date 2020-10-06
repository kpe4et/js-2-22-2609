function createBItemTemplate(item) {
    return `<div class="drop__box" data-id="${item.productId}">
    <a class="drop__img" href="single.html"><img src="${item.productImg}" alt="#" width="72" height="85"></a>
    <div class="drop__info">
            <a href="single.html" class="drop__title">${item.productName}</a>
            <img src="../src/assets/imgs/drop_cart/stars.png" alt="#">
            <div class="drop__price"><span class="drop__count" data-id="${item.productId}">${item.amount}</span><span class="drop__span">
            x
            </span>$${item.productPrice}</div>
        </div>
        <button class="drop__cancel fas fa-times-circle" data-id="${item.productId}" name="remove">
        </button>
    </div>`;
}

function createCItemTemplate(item) {
    return `<div class="catalog__item" id="${item.productId}">
    <button 
        class="catalog__bucket" 
        name="add"
        data-id="${item.productId}" 
        data-price="${item.productPrice}" 
        data-name="${item.productName}" 
        data-image="${item.productImg}"
    >
        <img class="catalog__hidden_img" 
        src="https://raw.githubusercontent.com/Eliseev88/geekbrains/3fdc76c4d5e84b1398b168e6239b8651dce01f6f/products/Forma_1_copy.svg" alt="#">
        <span class="catalog__hidden_text">Add to Cart</span>
    </button>
    <div class="catalog__photo">
        <img class="catalog__img" src="${item.productImg}" alt="#">
    </div>
    <div class="catalog__content">
        <a class="catalog__name" href="#">${item.productName}</a>
        <div class="catalog__price">$${item.productPrice}.00</div>
    </div>
</div>`
}

export default class ancientParent {
    constructor(url = '/basket.json', container = '#basket') {
        this.items = []; //+
        this.container = document.querySelector(container); //+
        this.url = 'https://raw.githubusercontent.com/kellolo/static/master/JSON' + url; //+
        this._init();
    }

    _init () {
        this._getData(this.url)
            .then((this.url.includes('basket'))?
            basket => {this.items = basket.content}:items => {this.items = items}) // криво, пока не понял, как сделать красиво
            .finally(() => {
                this._render();
                this._handleActions();
            })
    }

    _getData(url) {
        return fetch(url) //JSON
            .then(data => data.json()) // JSON >>> Obj/Array
    }

    _render() {
        let str = '';
        this.items.forEach(item => {
            str += (this.url.includes('basket'))?
            createBItemTemplate(item):createCItemTemplate(item);
        });
        this.url.includes('basket')?
        this.itemsContainer.innerHTML = str:this.container.innerHTML = str;
    }
};