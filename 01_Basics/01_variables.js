const accountId = 144553  // only constant
let accountEmail = "navneet@gmail.com" // do not change outside scope
var accountPassword = "12345" // changes outside scope, thats the problem
accountCity = "Jaipur" // we may define variable without using "var"
let accountState; //its output is undefined because we didnt initialize its value

// accountId = 2 // not allowed

accountEmail = "hb@gmail.com"
accountPassword = "58493"
accountCity = "Bangluru"

console.log(accountId);
/*
Prefer not to use "var"
Because of block scope and functional scope problem
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])