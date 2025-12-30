function one(){
    const username = "sumit"

    function two(){
        const age = 22
        console.log(username)
    }
    // console.log(age)
    two()
}
one()

//ONE INTRESTING FACT//

console.log(addOne(3))              //this is legit
function addOne(num){
    return num + 1
}

console.log(addTwo(4))              //here we r storing the function value
const addTwo = function(num){
    return num + 2
}