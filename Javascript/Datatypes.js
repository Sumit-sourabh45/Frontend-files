// alert (3 + 3) We are using Node js not browser

console.log( 3 + 3); //code readability is the priority

let score = "hitesh"    //on writing inside " " this changes it to string 
console.log(typeof score)

let checknull = null
console.log(typeof checknull)   //DATATYPE OF NULL IS OBJECT & UNDEFINED IS UNDEFINED




// let scoreinNum = Number(score) //we r converting the datatype of score from string to number
// console.log(typeof scoreinNum)
// console.log(scoreinNum)

let booleantest = ""
let checkBoolean = Boolean(booleantest)
console.log(checkBoolean)
//1 => true, 0 => false
//" " => false, "sumit" => true

// NOTES: Datatypes are categorised in 2 types on the basis of how data are stored and access from memory
// 1. Primitive

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId); //Symbol stores unique id
