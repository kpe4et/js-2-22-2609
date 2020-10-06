import Basket from './basket.js';
import Catalog from './catalog.js';
import ancientParent from "./ancient"

export default () => {
    let basket = new Basket();
    let catalog = new Catalog(basket);
}