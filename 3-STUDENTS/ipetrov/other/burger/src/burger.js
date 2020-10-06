export default class Burger {
    constructor(calories, prices) {
        
    }

    getCheckers() {

        let divs = document.querySelectorAll('div');
    
        let wannaBurger = {}
        divs.forEach(element => {
            let checker = [];
            for (let child of element.children) {
                console.log(child, child.checked);
                if (child.checked) {
                    checker.push(child.id);
                }
            }
            (element.id == 'size') ? this.size = checker : ((element.id =='toppings') ? this.toppings = checker : this.optToppings = checker);
//            this.element.id = checker; раньше этот метод был отдельной функцией
        })
        this.getPrice(prices);
        this.getCalories(calories);
    }

    getPrice (prices) {
        let total = 0;
        
        total += prices.size[this.size][0];
        
        this.toppings.forEach(element => {
            total += prices.toppings[element];
        });
        
        this.optToppings.forEach(element => {
            total += prices.optToppings[element];
        })
        
        console.log('Стоимость ' + total + ' рублей');
        this.price = total;
    }
    
    getCalories (calories) {
        let total = 0;
        
        total += calories.size[this.size][0];
        
        this.toppings.forEach(element => {
            total += calories.toppings[element];
        });
        
        this.optToppings.forEach(element => {
            total += calories.optToppings[element];
        })
        
        console.log('Энергетическая ценность ' + total + ' калорий');
        this.calories = total;
    }
}