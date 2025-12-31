const username = ""                     //in truthy and falsyit is let that aisa hoga hi
if(username){
    console.log("I have the username")
}
else{
    console.log("I don't have the username")
}
// truthy values
// [],{},function(){},"0",' ',"false"

// falsy value
// "",'',0,false,-0,BigInt ,0n,null, undefined

//Nullis Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10 
console.log(val1)

var1 = undefined ?? 15
console.log(var1)

//Terniary Operator
//condition ? true: false
const teaPrice = 50
teaPrice >= 40 ? console.log("Yes, Price is greater than 40") : console.log("No, Price is not greater than 40")