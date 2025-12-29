//object literals

//object literals are not singleton but constructors are

const mySum = Symbol("key1")

const user = {
    name: "Sumit",
    "full name": "Sumit Sourabh",
    [mySum]: "kya baawa",
    age: 20,
    location: "Varanasi",
    email: "sumitsourabh9@gmail.com",
    isLoggedIn: false

}
console.log(typeof user.age)
console.log( user["age"]) //both returns the same datatypes and outputs it's just 2 ways of representing

console.log(user["full name"])       //there's no way to print words with space without this method

console.log(typeof user[mySum]) //we printed symbol as a key

user.name = "Sourabh"
console.log(user)
// Object.freeze(user) //freezes the further changes
user.name = "chotu"
console.log(user)

user.greeting = function(){
    console.log(`Hey there ${this.name}`);
}
console.log(user.greeting())