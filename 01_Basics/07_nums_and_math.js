const score = 400
console.log(score);

const balance = new Number(100)   //it will define Number
console.log(balance);  //[Number: 100]

console.log(balance.toString());   //cpnvert it to string
console.log(balance.toString().length);  //3
console.log(balance.toFixed(2));   //100.00

// const otherNumber = 23.8966    //23.9
// const otherNumber = 123.8966  //124
const otherNumber = 1123.8966   //1.12e+3

console.log(otherNumber.toPrecision(3));

const hundreds = 100000
console.log(hundreds.toLocaleString());   //My computer supports by default Indian numeric system that shows 1,00,000
console.log(hundreds.toLocaleString('en-US'));  //This shows US system that is 100,000
