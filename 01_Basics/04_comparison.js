// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 >= 1);
// console.log(2 != 1);

console.log("2" > 1);  // comparision of diferent data types is not recommeded
console.log("02" > 1);

console.log(null > 0);  //false      //these are not recommeded
console.log(null == 0);  //false
console.log(null >= 0);  //true
 
// the reason is that an euality check == and comparisons > < >= <= work differently
// comparrison convert null to a number, treating it as 0
// thats why (3) null >= 0 is true and (1) null > 0 is false 

console.log(undefined == 0);  //false     // these are not recommeded
console.log(undefined > 0);   //false
console.log(undefined < 0);   //false

console.log("2" === 2); // it also checks the datatypes strictly
