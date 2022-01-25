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