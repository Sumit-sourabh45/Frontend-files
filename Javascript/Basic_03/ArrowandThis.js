const user = {
    username: "sumit",
    price: 2100,
    welcome: function(){
        // console.log(`${this.username} welcome to website`)       //this refers to current context
        // console.log(this)
    }
}
user.welcome()
user.username = "sam"
user.welcome()

// console.log(this)
function chai(){                    //remeber, this cannot be used in function & arrow fn but it can be used in Objects
    let username = "sumit"
    console.log(this.username)
}
chai()

const code = () =>{
    let username = "sumit"
    console.log(this.username);
}
code()

const addNum = (num1, num2) => (num1 + num2)        //1st way


// const addNum = (num1, num2) => {         //2nd way
//     return num1 + num2
// }
console.log(addNum(4,5))

const addOne = (num1, num2) => ({       //we need to wrap object in parenthesis () to execute if execute without return statement 
    num1: 23,
    num2: 45
    
})
console.log(addOne(4,6))


