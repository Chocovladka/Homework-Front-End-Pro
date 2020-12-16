let digit = getDigit(); 

function getDigit() {
    return +prompt('Enter a digit please');
}

// function calcDigitsSum(n) {
//     let sum;
//     sum = (n - 1) + n;
//     console.log(sum);
//     if (--n > 0) {
//         return sum = calcDigitsSum(n);
//     }
//     return sum
// }

function calcDigitsSum(n) {
    let sum;
    if (n == 0) {
    return n;
    } else {
        return n + calcDigitsSum(n - 1); 
  }
}
// function calcDigitsSum(n) {
//     if (--n > 0) {
//         console.log((n - 1) + calcDigitsSum(n));
//     } else {
//         console.log(n)
//     }
// }

console.log(calcDigitsSum(digit));