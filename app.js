function reverse_string (word) {
    // loop thru each letter
    let wordArray = []
    for (let i = word.length-1; i >= 0 ; i-=1) {
        wordArray.push(word[i])
        
    }
    // console.log(wordArray)
    return wordArray.join("")
}

// console.log("Reverse hello: ", reverse_string('hello'))
// console.log("should be: olleh")


module.exports = reverse_string;
