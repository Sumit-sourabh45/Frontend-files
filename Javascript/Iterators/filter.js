const list = [1, 3, 5, 6, 35, 23, 66]
// const newNums = list.filter((num) =>{
//     return num > 4                      //always remember to return while doing inside a scope '{}'
// })
// console.log(newNums)   

//same. using for each loop
const newNums = []
list.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
})
console.log(newNums)
