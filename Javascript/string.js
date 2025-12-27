const gameName = new String("Sumit")
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('t'))

let newString = gameName.substring(0,4)
console.log(newString)      //NOTE: substring prints only from to (till - 1)

let anotherString = gameName.slice(-4,3)
console.log(anotherString)


let removeSpace = "     Sumit Sourabh       "
console.log(removeSpace)
console.log(removeSpace.trim())     //here trin fn removed all unnecessary spaces

let useSplit = "hanji-to-kaise-hain-aaplog"
console.log(useSplit.split('-'))