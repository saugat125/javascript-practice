// Write a function `funnyPhrase` that accepts a sentence string as an argument. The function should
// return the sentence where every other word has its vowels repeated twice consecutively.
// Vowels are the letters a, e, i, o, u.

function funnyPhrase(sen){
    let result = "";
    words = sen.split(" ");
    for(let i=0;i<words.length;i++){
        word = words[i];
        for(let j=0;j<word.length;j++){
            if('aeiou'.includes(word[j])){
                result = result+word[j]+word[j];
            }
            else{
                result = result+word[j];
            }
        }
        result=result+" ";
    }
    return result;
}

console.log(funnyPhrase('she dreamed of being a runner')); // 'she dreeaameed of beeiing a ruunneer'
console.log(funnyPhrase('park near the stoplight')); // 'park neeaar the stoopliight'
console.log(funnyPhrase('we need many gardeners')); // 'we neeeed many gaardeeneers'
