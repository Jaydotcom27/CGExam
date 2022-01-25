function convertToOrdinal(number){
    let lastDigit = number.toString().slice(-1)
    if((number === 12  || number === 13  )){
        console.log(`${number}th`)
    } 
    else if((lastDigit === '1' && number != 11)){
        console.log(`${number}st`)
    } else if ((lastDigit === '2' && number != 12)){
        console.log(`${number}nd`)
    } else if ((lastDigit === '3' && number != 13)){
        console.log(`${number}rd`)
    } 
    else {
        console.log(`${number}th`)
    }
}

convertToOrdinal(1)
convertToOrdinal(2)
convertToOrdinal(3)
convertToOrdinal(11)
convertToOrdinal(12)
convertToOrdinal(13)
convertToOrdinal(21)
convertToOrdinal(22)
convertToOrdinal(23)
convertToOrdinal(123)
convertToOrdinal(849)