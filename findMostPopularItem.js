function findMostPopularItem(array){

    array.sort()
    let mostPopularItem = array[0]
    let counter = 1
    let maxReached = 1
    let arrayLength = array.length;

    for (let i = 1; i < arrayLength; i++) {
        if (array[i] == array[i-1]){
            counter++
        }else{
            if( counter > maxReached){
                maxReached = counter
                mostPopularItem = array[i - 1]
            }
            counter = 1
        }
        
    }
    if(counter > maxReached){
        maxReached = counter
        mostPopularItem = array[arrayLength - 1]
    }
    return mostPopularItem
}

console.log(findMostPopularItem([1,5,5,2,3,4,5,5,6,7,7,7]))
