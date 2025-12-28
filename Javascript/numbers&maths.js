let num = 100
console.log(num.toString()) 
console.log(num.toString().length)

const otherNum = 123.456
console.log(otherNum.toFixed(2)) //round off to two integers

console.log(otherNum.toPrecision(3)) //it gives precise value till that place and after it makes it to exponential


// ******************* Maths ******************

console.log(Math.abs(-56))
console.log(Math.round(56.58))
console.log(Math.floor(56.9))
console.log(Math.ceil(56.2))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

//EXPLORING random()
console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)