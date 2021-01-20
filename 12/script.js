'use strict'

const calc = new Calculator(10);

function Calculator(basicNum) {
    this.base = basicNum;

    this.add = function (digit) {
        return (isDigitValid(digit)) ? (this.base += digit) : null;
    };
    this.sub = function (digit) {
        return (isDigitValid(digit)) ? (this.base -= digit) : null;    
        };
    this.mult = function (digit) {
        return (isDigitValid(digit)) ? (this.base *= digit) : null;
    };
    this.div = function (digit) {
        return (isDigitValid(digit)) ? (this.base /= digit) : null;
    };
    this.set = function (digit) {
        return (isDigitValid(digit)) ? (this.base = digit) : null;
    };
    this.get = function () {
        return this.base;
    };
}

function isDigitValid(num) {
    return !isNaN(num)
}