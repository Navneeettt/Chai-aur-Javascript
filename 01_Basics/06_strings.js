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

const newString = profileName.substring(0, 4);
console.log(newString);

const anotherString = profileName.slice(-7, 4);
console.log(anotherString);









