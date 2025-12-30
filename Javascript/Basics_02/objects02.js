const details = new Object()
// console.log(details)

details.name = "Sumit Sourabh"
details.email = "sumitsourabh9@gmail.com"
details.roll = 26
details.isLoggedIn = false
// console.log(details)

const nestedObjects = {
    email: "sumit@gmail.com",
    address: "Noida",
    userDetails: {
        username:{
        firstname: "sumit",
        lastname: "sourabh"
        }
    }

}

// console.log(Object.keys(nestedObjects.userDetails.username))
// console.log(Object.values(details))
// console.log(nestedObjects.userDetails?.username.firstname)  //this ? means it asks if it exists then proceed further 
// const obj1 = {1: "sumit", 2: "sourabh"}
// const obj2 = {3: "sanvi", 4: "gupta"}
// const obj3 = {...obj1, ...details, ...obj2}    //never spread string,num etc other than object cuz js treat it as iterable 
//                                            //of characters
// console.log(obj3)


const course = {
    coursename: "Js in hindi",
    coursePrice: 1000,
    courseteacher: "sumit"
}

const {courseteacher: teacher} = course     //this is called object destructer
console.log(teacher)
