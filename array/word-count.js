// Write a function `wordCount(sentence, targetWords)` that accepts a sentence string and an array of
// `targetWords`. The function should return a count of the number of words of the sentence that are
// in `targetWords`.

function wordCount(sentence,targetWords){
    let count = 0;
    let sen = sentence.split(" ");
    for(let i=0;i<sen.length;i++){
        char = sen[i];
        if(targetWords.includes(char)){
            count+=1;
        }
    }
    return count;
       
}

console.log(wordCount('open the window please', ['please', 'open', 'sorry'])); // 2
console.log(wordCount('drive to the cinema', ['the', 'driver'])); // 1
console.log(wordCount('can I have that can', ['can', 'I'])); // 3
