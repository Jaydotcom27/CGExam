function reverseArray(array){
    let temporalArray = []
    for (let i = array.length - 1; i >= 0; i--) {
        temporalArray.push(array[i])
    }
    array = temporalArray
    return array
}

function reverseArrayInPlace(array){
    return array.reverse()
}

console.log(reverseArrayInPlace([1,2,3]))
console.log(reverseArray([1,2,3]))