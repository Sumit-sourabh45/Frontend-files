// const arr = []
// const arr = [{}, {}, {}]

//for of over an array
const arr = [1, 2, 3, 5, 6, 34]
for (const element of arr) {
    console.log(element)
}

//For of over a string 
const iterate = "hanji"
for (const value of iterate) {
    console.log(value)
}

//for of over map
const mapp = new Map()
mapp.set("IN", "India")
mapp.set("US", "United States of America")
mapp.set("UAE", "United Arab Emirates")
mapp.set("UAE", "United Arab Emirates")
// console.log(mapp)
for (const [key,value] of mapp) {
    console.log(key, ":", value)
}

//for of loop over object
const myObj = {
    js: "javascript",
    cpp: "c++",
    azure: "azure by microsoft"
}
for (const element of myObj) {          //so here we can see objects are not iterable through for of loops
    // console.log(element)
}