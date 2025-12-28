let actors = ["akshay", "ranbir", "kartik","amitabh"]
let comedians = ["abhishek", "bassi", "samay", "gaurav"]

// console.log(actors)

// actors.push(comedians)
// console.log(actors)     //comedians are pushed as a single unit in actors

// console.log(actors[4])

// Fixes_01
const fixedArray = actors.concat(comedians) //Remember concat is used to merge to array 
console.log(fixedArray)

//Fixes_02
const anotherMethod = [...actors, ...comedians]
console.log(anotherMethod)

const anotherArray = [1, 2, 3, 4, [3,5,6], [4 , 56, 23, [23, 4, 7]], 9, 23]
console.log(anotherArray)
const correctedArray = anotherArray.flat(Infinity) //flat concatenes all sub-array elements
console.log(correctedArray)


let vari = "HANJI"
console.log(Array.isArray(vari))    //isArray
console.log(Array.from(vari))

console.log(Array.from({name: "HANJI"})) //it couldn't identify which key or value to change it to array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))     //of