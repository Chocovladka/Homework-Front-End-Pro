'use strict'

const calc = new Calculator(10);

function Calculator(basicNum) {
    this.add = function (digit) {
        return (isDigitValid(digit)) ? (basicNum += digit) : null;
    };
    this.sub = function (digit) {
        return (isDigitValid(digit)) ? (basicNum -= digit) : null;    
        };
    this.mult = function (digit) {
        return (isDigitValid(digit)) ? (basicNum *= digit) : null;
    };
    this.div = function (digit) {
        return (isDigitValid(digit)) ? (basicNum /= digit) : null;
    };
    this.set = function (digit) {
        return (isDigitValid(digit)) ? (basicNum = digit) : null;
    };
    this.get = function () {
        return basicNum;
    };
}

function isDigitValid(basicNum) {
    return !isNaN(basicNum)
}