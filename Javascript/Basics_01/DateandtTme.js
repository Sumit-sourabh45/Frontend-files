let myDate =  Date()
// console.log(myDate) //return a string type in readablle format = myDate.toString()
// // console.log(myDate.toLocaleString())  --> see here even after using methods we gettin exact same output no change
// console.log(typeof myDate)

// THERE WE GO IT IS A STRING TYPE

let yourDate = new Date()
// console.log(yourDate.toString())
// console.log(yourDate.toISOString())
// console.log(yourDate.toLocaleString())  //so without new keyword we cannot use object's method

// console.log(typeof yourDate) //IT IS A OBJECT TYPE DUE TO new  KEYWORD

// let createdDate = new Date(2023,8,4,3)
let createdDate = new Date("07-01-2025") //mm-dd-yy
console.log(createdDate.toLocaleString())

let newDate = new Date()
console.log(newDate.getMonth() + 1) //0 means January 1->Feb likewise
console.log(newDate.getDay()) //0 means sunday 1-> Monday...likewise
console.log(newDate.toLocaleString())

console.log(`Today's date is ${newDate.getDate()} and day is ${newDate.getDay()} and time is ${newDate.toLocaleTimeString()}`)

newDate.toLocaleString('default', {
    weekday: "short"        //control + spacebar to access methods
})