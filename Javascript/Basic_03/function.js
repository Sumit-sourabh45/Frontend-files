function heythere(){
    console.log(23)
}

function addTwoNum(number1, number2){
    // console.log(number1 + number2)

    const result = number1 + number2
    return result
}
const result = addTwoNum(5,6)
// console.log(addTwoNum(3,4)) //this gives result but fn ain't returning any value so it's return undefined
console.log(result)

function loginUserMessage(username){
    if(username === undefined){
        console.log(`enter name pls`)
        return
    }

    return `${username} just logged in`
}
console.log(loginUserMessage('sumit'))

function addingItemsToCart(val1, ...num1){        //rest operator is used to add n no. of input to array
    return num1
}
console.log(addingItemsToCart(100,400,24))

//HANDLING OBJECT THROUGH FUNCTION
const user = {
    purchasaeItem: "Milk",
    price: 200
}
function accessingUserObject(anyobject){
    console.log(`the purchase item is: ${anyobject.purchasaeItem} and it's price is: ${anyobject.price}`);
    
}
accessingUserObject(user)   //calling fn

accessingUserObject({       //we can also pass object directly
    purchasaeItem: "sumit",
    price: 9999999999999999
})

const array = [12, 34, 5]
function returnarray(getarray){
    return getarray
}
console.log(array)