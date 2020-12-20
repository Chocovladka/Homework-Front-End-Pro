const calc = createCalculator(10);



function createCalculator(num) {
    let result = num;
    return {
        add: (digit) => (!(isNaN(digit))) ? (result += digit) : null,
        sub: (digit) => (!(isNaN(digit))) ? (result -= digit) : null,
        mult: (digit) => (!(isNaN(digit))) ? (result *= digit) : null,
        div: (digit) => (!(isNaN(digit))) ? (result /= digit) : null,
        set: (digit) => (!(isNaN(digit))) ? (num = digit) : null
    }
}

// function fn(digit) {
//     let result = 0;
//     if (!(isNaN(digit))) {
//         return result += digit
//     } else {
//         return null
//     }
// }

