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

let sampleTest = [1,2,3,11,12,13,21,22,23,123,456]
for (let i = 0; i < sampleTest.length; i++) {
    convertToOrdinal(sampleTest[i])
}
