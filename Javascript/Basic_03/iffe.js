//IMMEDIATELY INVOKED FUNCTION EXPRESSION---IIFE

(function welcome(){
    console.log("Hey There")
})();                               //always remeber it ends with semicolon to let know the fn ends to run other iife 

//likewise we use arrow operator as well
((name) => {
    console.log(`There we go! ${name}`)
})("sumit")