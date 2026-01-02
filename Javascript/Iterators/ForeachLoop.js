const myarr = ["hanji", "sumit", "javascript", "cpp"]
myarr.forEach(function (values){
    // console.log(values)
})

//Does for each loop return values?
const values = myarr.forEach(function (items){
    // console.log(items)
    return items        //even after trying to return- for each loop doesn't return anything
})
console.log(values) //NO, for each doesn't return any values


//through arrow fn
myarr.forEach((item) =>{
//  console.log(item)
})

// through bymade fn
function printValues(items){
    // console.log(items)
}
myarr.forEach(printValues);

//more of arrow fn
myarr.forEach((item, index, arr ) =>{
//  console.log(item, index, arr)
})

//accessing values of object inside an array
const phones = [
    {
        phoneName: "Apple",
        phonePrices: 49999
    },
    {
        phoneName: "Samsung",
        phonePrices: 36000
    },
    {
        phoneName: "Redmi",
        phonePrices: 12000
    }
]
phones.forEach((detials) =>{
    // console.log(detials.phonePrices)
})