const myObj = {
    js: "javascript",
    cpp: "c++",
    azure: "azure by microsoft"
}
for (const key in myObj) {
    // console.log(`${key} : ${myObj[key]}`)   //myObj[key] this is used for values    
}

//for in loop for array
const myarr = ["hello", 3, 5, "sumit"]
for (const output in myarr) {
    const element = myarr[output];
    // console.log(element)
}

//for in loop for map
const mapp = new Map()      //map is not iterable in for in loop
mapp.set("IN", "India")
mapp.set("US", "United States of America")
mapp.set("UAE", "United Arab Emirates")
mapp.set("UAE", "United Arab Emirates")
for (const [key] in mapp) {
    console.log(key)
}