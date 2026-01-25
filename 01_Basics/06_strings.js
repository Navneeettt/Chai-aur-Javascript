const name = "Navneet"
const repocount = 10

// console.log(name + repocount + "Value");  // not recommeded

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);  // recommeded with backtick(``)

const profileName = new String ("Hiteshhc")
console.log(profileName[0]);
console.log(profileName.__proto__);

console.log(profileName.length);
console.log(profileName.toUpperCase());
console.log(profileName.charAt(2));
console.log(profileName.indexOf(`e`));

const newString = profileName.substring(0, 4);  //Hite
console.log(newString);

const anotherString = profileName.slice(-7, 4);  //ite
console.log(anotherString);
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
const newStringOne = "   Navneet     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://navneet.com/navneet%20mishra"

console.log(url.replace('%20', '-'));

console.log(url.includes('hitesh'));

const newName = new String("Navneet-Mishra-Value-Depend")

console.log(newName.split('-'));
console.log(newName.split('-',2));















