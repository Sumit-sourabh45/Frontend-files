
// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

myArr.push(45)
console.log(myArr)
// myArr.push(7)
// myArr.pop()

myArr.unshift(9)    //adds element at the front
myArr.shift()    //removes ele from front

// console.log(myArr);
// console.log(myArr.includes(9)); //checks whether the element exist in the array or Not?
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("After slicing Array", myArr)
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("C -after splicing array becomes ", myArr);
