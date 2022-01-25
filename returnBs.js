function returnBs(word){
    let stringLength = word.length
    let count = 0
    for (let i = 0; i < stringLength; i++) {
        if (word.charAt(i) == "B"){
            count++
        }  
    }
    console.log(count)
}
returnBs("BBcb");