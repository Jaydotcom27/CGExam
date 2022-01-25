function range1(start, end){
    let rangeArray = []
    for (let i = start; i <= end; i++) {
        rangeArray.push(i)
    }
    return rangeArray;
}

function arraySum(array){
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i] 
    }
    return sum
}

function range2(start, end, step = 1){
    let rangeArray = []
    for (let i = start; i <= end; i+=step) {
        // while(i < end)
        rangeArray.push(i)
    }
    return rangeArray;
}

console.log(range1(2,8))
console.log(arraySum(range1(2,8)))
console.log(range2(2,8,2))