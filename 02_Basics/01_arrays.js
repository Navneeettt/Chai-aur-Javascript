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

myArr.push(6)        // It will add the element in last
console.log(myArr);   //[0, 1, 2, 3,4, 5, 6]
myArr.pop()         // It will remove the last element
console.log(myArr); //[ 0, 1, 2, 3, 4, 5 ]

myArr.unshift(9)    // It will add the element in front/first position
console.log(myArr);  
myArr.shift()       // It will remove the first element

console.log(myArr.includes(10)); // It checks whether the array element is present or not and gives otput as true or false
console.log(myArr.includes(2,1)); // first value is the number means the element itself, and second value is from which index we want to start the search with and gives the true if it is present in this range of index
console.log(myArr.indexOf(2)); // It will show the index of given element

const newArr = myArr.join()  // It will bind the array and convert it to string
console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]
console.log(newArr);  //0,1,2,3,4,5
console.log(typeof newArr);  // string

// slice, splice

// slice extract a portion of array anddo not modifies the original array
// splice modifies the original array

console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)  // first value is the index and second value is how many values from that index is to be extracted
console.log("C", myArr);
console.log(myn2);



