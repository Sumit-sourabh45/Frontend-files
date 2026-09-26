console.log("Hello world");
let a = 45;
let b = 54;
// let sum = "sum is: "+  (a + b);

let sum = `sum is: ${a + b} rupees`
console.log(sum);

//HW
let light = "Yellow";
if(light == `Yellow`){
    console.log(`Slow Down Laadle`)
}
else if(light == `Green`){
    console.log(`Go Ahead`)
}
else{
    console.log(`STOP!!`)
}

function g(){
    var b = 5;
    c();
    function c(){
        console.log(b)
    }
}
g()
//this is lexical scope + funciton Executio context example
// step 1:
// g() is called so it creates b(undefined), c() {...}
// then execution phase after creation phase

// step 2:
// b is assigned 5 after that

// stet 3: 
// c() is called
// c's creation phase - console.log(b), it first check c local memory 
// then JS goes outer lexical enviro and get's as value 5

