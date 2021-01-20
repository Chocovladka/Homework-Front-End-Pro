'use strict'

Hamburger.SMALL_SIZE = {
    price: 50,
    callories: 20
};

Hamburger.MEDIUM_SIZE = {
    price: 75,
    callories: 30
};

Hamburger.BIG_SIZE = {
    price: 100,
    callories: 40
};

Hamburger.TOPPING_CHEESE = {
    price: 10,
    callories: 20
};

Hamburger.TOPPING_SALAD = {
    price: 20,
    callories: 5
};

Hamburger.TOPPING_POTATO = {
    price: 15,
    callories: 10
};

Hamburger.TOPPING_SPICE = {
    price: 15,
    callories: 0
};

Hamburger.TOPPING_MAYO = {
    price: 20,
    callories: 5
};

function Hamburger(size) {
    this.size = size;
    this.burgerSet = [this.size];
};

let hamburger = new Hamburger(Hamburger.SMALL_SIZE);
let hamburger2 = new Hamburger(Hamburger.MEDIUM_SIZE);

Hamburger.prototype.addTopping = function (topping) {
    return this.burgerSet.push(topping);
};

Hamburger.prototype.getPrice = function () {
    let arrPrice = this.burgerSet.map(function (item) {
        return item.price;
    })
    return arrPrice.reduce((sum, current) => sum + current, 0);
};

Hamburger.prototype.getCallories = function () {
    let arrCallories = this.burgerSet.map(function (item) {
        return item.callories;
    })
    return arrCallories.reduce((sum, current) => sum + current, 0);
}

// Hamburger.prototype.getPrice = function () {
//     return Hamburger.calcSum(this.burgerSet, 'price');
// };

// Hamburger.prototype.calcSum = function (arr, prop) {
//     return (arr.reduce((sum, item) => sum + item[prop], 0));
// }
