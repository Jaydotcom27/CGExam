function truncateWords(phrase, words){
    return phrase.split(" ").splice(0, words).join(" ")
}

console.log(truncateWords("Chiks Gold is your destination to buy, sell, boost or swap your video game assets.", 3))
