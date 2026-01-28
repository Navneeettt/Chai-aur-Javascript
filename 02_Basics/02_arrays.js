const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)   // this treats the whole DC array as a 4th element of marvel array which will be at 3rd index

console.log(marvel_heros);  // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]);  // flash  // DC is the at 3rd index of marvel array, and we want 1st index of DC array

// concat
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);  // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ] // for concat, we have to create a new variable

// spread operator
const all_new_heros = [...marvel_heros, ...dc_heros]   // It will create a new array and in which it will spread both the existing arrays
console.log(all_new_heros);

// flat function   // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(1)         //[ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]   // (1) is the depth
const real_another_array = another_array.flat(2)         //[ 1, 2, 3, 4, 5, 6, 7, 6, 7,  4, 5 ]
const real_another_array = another_array.flat(Infinity)  //[ 1, 2, 3, 4, 5, 6, 7, 6, 7,  4, 5 ]
console.log(real_another_array);