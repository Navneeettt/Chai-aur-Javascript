// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

let myDate = new Date()
// console.log(myDate);                     //2026-01-26T17:15:17.319Z
// console.log(myDate.toString());          //Mon Jan 26 2026 22:45:17 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());       //Mon Jan 26 2026
// console.log(myDate.toISOString());        //2026-01-26T17:15:17.319Z
// console.log(myDate.toJSON());               //2026-01-26T17:15:17.319Z
// console.log(myDate.toLocaleDateString());    //26/1/2026
// console.log(myDate.toLocaleString());         //26/1/2026, 10:45:17 pm

// console.log(typeof myDate);       //object

let myCreatedDate = new Date(2023, 0, 18, 13, 25, 37, 400)   //year, monthIndex, day, hour, minute, second, ms
// console.log(myCreatedDate);   //2023-01-18T07:55:37.400Z
// console.log(myCreatedDate.toString());   // ed Jan 18 2023 13:25:37 GMT+0530 (India Standard Time)

// let myCreatedDate = new Date("2023-01-23")   //another way to define date as a string (YY-MM-DD)
// console.log(myCreatedDate.toLocaleString());   //23/1/2023, 5:30:00 am

let myTimeStamp = Date.now()

// console.log(myTimeStamp);              // It will calculate and give time stamp from 1st Jan 1970 to current time in miliseconds count
// console.log(myCreatedDate.getTime());   // It will calculate and give time stamp from 1st Jan 1970 to given time/date in miliseconds count
// console.log(Math.floor(Date.now()/1000))   // It will calculate and give time stamp from 1st Jan 1970 to current time in seconds count

let anotherDate = new Date()
console.log(anotherDate);
console.log(anotherDate.getMonth());  // 0-Jan
console.log(anotherDate.getDay());    // 1-Mon
console.log(anotherDate.getDate());    //26

anotherDate.toLocaleString(`default`, {
    weekday: "long",
})
