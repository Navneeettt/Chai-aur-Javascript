const score = 400
// console.log(score);

const balance = new Number(100)   //it will define Number
// console.log(balance);  //[Number: 100]

// console.log(balance.toString());   //cpnvert it to string
// console.log(balance.toString().length);  //3
// console.log(balance.toFixed(2));   //100.00

// const otherNumber = 23.8966    //23.9
// const otherNumber = 123.8966  //124
// const otherNumber = 1123.8966   //1.12e+3

// console.log(otherNumber.toPrecision(3));

const hundreds = 100000
// console.log(hundreds.toLocaleString());   //My computer supports by default Indian numeric system that shows 1,00,000
// console.log(hundreds.toLocaleString('en-US'));  //This shows US system that is 100,000



//************************************Maths**************************************

// console.log(Math);              //Object [Math] {}
// console.log(Math.abs(-4));      //4
// console.log(Math.round(4.4));   //4
// console.log(Math.ceil(4.5));    //5
// console.log(Math.floor(4.5));   //4
// console.log(Math.pow(4,5));   //1024
// console.log(Math.sqrt(4));      //2
// console.log(Math.min(4,5));      //4
// console.log(Math.max(4,5));      //5


console.log(Math.random());   //gives random no. between 0 to 0.9 
console.log(Math.random()*10);   //gives 0.1 to 9.9
console.log(Math.random()*10 + 1);   //gives atleast 1
console.log(Math.floor(Math.random()*10) + 1);    // roun off to previous value 

const min = 10
const max = 20

console.log(max-min+1);
console.log(Math.floor(Math.random() * (max-min+1)));  //It can give 0 also
console.log(Math.floor(Math.random() * (max-min+1)) +min);  //  This is used if we want atleast our given minimun value
