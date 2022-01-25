function multiplesOf(number){
    let indicator = false;
        if ((number%2 == 0) && (number%3 == 0) && (number%5 == 0) && (number%7 == 0)){
            indicator = true
            console.log(`2, 3, 5 and 7 are multiples of ${number}`)
        } else{
            console.log(`2, 3, 5 and 7 are not multiples of ${number}`)
        }
}
multiplesOf(210)