function getFactorial(number){
    if ( number === 0){
        return 1;
    } else {
        return (number * getFactorial(number - 1)) 
    }
}
console.log(getFactorial(5))