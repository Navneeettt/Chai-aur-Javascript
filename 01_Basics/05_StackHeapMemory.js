// Stack(Primitive),  Heap (Non-Primitive)

let myYoutubename = "Navneetschannel"

let anothername = myYoutubename
anothername = "mishrachannel"

console.log(myYoutubename);
console.log(anothername);  //changes happened in copy

let userOne ={
    email: "name@gmail.com",
    upi: "user@upi"
}

let userTwo = userOne

userTwo.email = "Navneet@gmail.com"  // changes happened in both the users, if we change email of user two then user one email also will change

console.log(userOne.email);
console.log(userTwo.email);


