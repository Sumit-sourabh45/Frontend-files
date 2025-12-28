let value = 45
let negValue = -value
console.log(negValue)


console.log("1" + 2 + 2)    //here the compiler comprehend that after the 1st string are also strings
console.log(2 + 2 + "1")    // but this does not happen in cases of number

console.log("2" > 1)    //incase of comparison js converts strings to num for comparison
console.log("2sum" > 1)  //but in this case js couldn't convert 2sum and this return NaN and on comparison obv it'll return false