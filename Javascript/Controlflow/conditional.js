const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(loggedInFromGoogle || userLoggedIn){
    console.log("User is Logged in")
}
if(loggedInFromEmail && loggedInFromGoogle){
    console.log("user is logged in from Google")
}