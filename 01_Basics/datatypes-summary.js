// Javascript is a Dynamically Typed Language

// Primitive : These datatypes are call by their value, when we call it, we get the copy of that value, all changes happened in its copy, not in the original one

/*
7 Types:
String
Number
Boolean
Null
Undefined
Symbol
BigInt
*/

const score = 100  // TYpe= Number
const scoreValue = 100.3  // Type= Number

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const Id = Symbol('123')
const anotherId = Symbol('123')
console.log(Id === anotherId);  // False

const bigNumber = 6567217379129128389834534n  // If we place 'n' after the number then javascript will consider it as a BigInt datatype, If not then it will consider it as a number
console.log(bigNumber);  // 6567217379129128389834534n
console.log(typeof bigNumber);  // BigInt



// Reference (Non Primitive) :

/*
Array
Object
Functions
*/

// Array
const heros = ["Army", "Ranbir", "Akshay"]

// Object
let myObj = {
    name: "Navneet",
    age: 22
}

// Functions
const myFunction = function(){
    console.log("This is a function");    
    
}

console.log(typeof );

// https://262.ecma-international.org/5.1/#sec-11.4.3

