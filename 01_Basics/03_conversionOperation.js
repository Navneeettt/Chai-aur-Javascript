// let score = "33" // value= 33 
// let score = "33sdfv" // value= NaN
// let score = null //value= 0
// let score = undefined //value=Nan
 let score = true // value= 1

console.log(typeof score); //there are two methods of writing typeof, one is without parenthesis and is with 
console.log(typeof (score)); 

let valueInNumber = Number(score) // it will convert the datatype to Number

console.log(typeof valueInNumber); //it checks the type
console.log(valueInNumber) //it checks the number, if the type is number, but here there is not a number, there is 33sdfv, so it will show Not A Number

