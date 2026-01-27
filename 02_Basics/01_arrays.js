// array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr);  // this shows the array
console.log(myArr[0]);  // this shows the index

const myHeros = ["Jatt", "Ajay"]
const myArr2 = new Array(1,2,3,4)
console.log(myArr2[1]);      //2
console.log(myArr2.length);   //4

// Array Methods

myArr.push(6)  // It will add the element in last
console.log(myArr);   //[0, 1, 2, 3,4, 5, 6]
myArr.pop()   // It will remove the last element
console.log(myArr); //[ 0, 1, 2, 3, 4, 5 ]

myArr.unshift(9)  // It will add the element in front/first position
console.log(myArr);  
myArr.shift()   // It will remove the first element

console.log(myArr.includes(10)); // It checks whether the array element is present or not and gives uotput as true or false
console.log(myArr.indexOf(2)); // It will show which value is present at this index