// let score = "33"       // value= 33 
 let score = "Navneet"  // value = Nan
// let score = "33sdfv"   // value= NaN
// let score = null       //value= 0
// let score = undefined  //value=Nan
// let score = true        // value= 1
// let score = false        // value = 0
// console.log(typeof score); //there are two methods of writing typeof, one is without parenthesis and is with 
// console.log(typeof (score)); 

let valueInNumber = Number(score) // it will convert the datatype to Number

// console.log(typeof valueInNumber); //it checks the type
// console.log(valueInNumber) //it checks the number, if the type is number, but here there is not a number, there is 33sdfv, so it will show Not A Number

let isLoggedIn = null
let convert = Boolean(isLoggedIn)
// console.log(convert)

/* 
null = false
undefined = false
"" = false
0 = false
"Navneet" = true
1 = true
any number greater than 0 = true
*/

let someNumber = 22
let convertToString = String (someNumber)
// console.log(convertToString);
// console.log(typeof convertToString)

// *********operations*********

// goto tc39.es,  =>7, abstract operations

let value = 3
let negvalue = -value
// console.log(negvalue);
 
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%3);

let str1 = "Hello"
let str2 = " Navneet"
let str3 = str1 + str2
console.log(str3)

console.log("1" + 2);  // 12
console.log(1 + "2");  // 12
console.log("1" + "2");  //12
console.log("1" + 2 + 2);  //122
console.log(1 + 2 +"2");   //32

