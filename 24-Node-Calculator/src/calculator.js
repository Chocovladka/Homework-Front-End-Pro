let sum = require('./add');
let diff = require('./sub');
let mult = require('./mult');
let quot = require('./div');

module.exports = {
    add: sum.add,
    sub: diff.sub,
    mult: mult.mult,
    div: quot.div
}