// function firstProblem(number){
//     let indicator = false;
//         if ((number%2 == 0) && (number%3 == 0) && (number%5 == 0) && (number%7 == 0)){
//             indicator = true
//             console.log(`2, 3, 5 and 7 are multiples of ${number}`)
//         } else{
//             console.log(`2, 3, 5 and 7 are not multiples of ${number}`)
//         }
// }
// firstProblem(210)

// function FizzBuzz(){
//     for (let i = 1; i <= 100; i++) {
//         if (i%15 === 0){
//             console.log("FizzBuzz")
//         }else if (i%5 === 0){
//             console.log("Buzz")
//         } else if (i%3 === 0){
//             console.log("Fizz");
//         } else {
//             console.log(i)
//         }
//     }
// }
// FizzBuzz()

// function returnBs(word){
//     let stringLength = word.length
//     let count = 0
//     for (let i = 0; i < stringLength; i++) {
//         if (word.charAt(i) == "B"){
//             count++
//         }  
//     }
//     console.log(count)
// }
// returnBs("BBcb");

// function getFactorial(number){
//     if ( number === 0){
//         return 1;
//     } else {
//         return (number * getFactorial(number - 1)) 
//     }
// }
// console.log(getFactorial(5))

// function convertToOrdinal(number){
//     let lastDigit = number.toString().slice(-1)
//     if((number === 12  || number === 13  )){
//         console.log(`${number}th`)
//     } 
//     else if((lastDigit === '1' && number != 11)){
//         console.log(`${number}st`)
//     } else if ((lastDigit === '2' && number != 12)){
//         console.log(`${number}nd`)
//     } else if ((lastDigit === '3' && number != 13)){
//         console.log(`${number}rd`)
//     } 
//     else {
//         console.log(`${number}th`)
//     }
// }

// convertToOrdinal(1)
// convertToOrdinal(2)
// convertToOrdinal(3)
// convertToOrdinal(11)
// convertToOrdinal(12)
// convertToOrdinal(13)
// convertToOrdinal(21)
// convertToOrdinal(22)
// convertToOrdinal(23)
// convertToOrdinal(123)


// PENDING REVIEW

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

function range2(start, end, step = 0){
    let rangeArray = []
    for (let i = start; i <= end; i++) {
        rangeArray.push(i)
    }
    return rangeArray;
}

console.log(range1(2,8))
console.log(arraySum(range1(2,8)))
console.log(range2(2,8,3))

