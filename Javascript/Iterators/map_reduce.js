const dataValues = [1, 2, 4, 5, 6, 7, 34, 8]
// const printValues = dataValues.map( (num) => {return num + 10})
// console.log(printValues)

const printValues = dataValues.map((num) => num * 10)                       //we can do chaining as well like this
                                            .map((num) => num + 1)
                                            .filter((num) => num >= 25)
                                            // console.log(printValues)

const boom = dataValues.reduce(function (acc, currentVal){
    // console.log(`accumulator is ${acc} and currval is ${currentVal}`)
    return acc+currentVal
}, 0)
// console.log(boom)

const booom = dataValues.reduce((acc,currval) => (acc + currval), 0)
console.log(booom)

//using arrow fn
const arrowfn = [{
    cource: "javascript",
    price: 2000
},
{
    course: "css",
    price: 200
},
{
    course: "html",
    price: 2000
}
]
const here = arrowfn.reduce((price, items) => (price + items.price), 0)
console.log(here)