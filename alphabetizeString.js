function alphabetizeString(phrase){
    let cleanString = phrase.replaceAll(" ", "")
    return cleanString.split('').sort().join('')
}

console.log(alphabetizeString("Lorem ipsum"))