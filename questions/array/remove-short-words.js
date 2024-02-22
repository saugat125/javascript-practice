// Write a function `removeShortWords` that accepts a sentence string as an argument. The function
// should return a new sentence where all of the words shorter than 4 characters are removed.

function removeShortWords(sen){
    let result = '';
    let arr = sen.split(' ');
    for(let i=0;i<arr.length;i++){
        let word = arr[i];
        if(word.length>=4){
            result = result + word + ' ';
        }
    }
    return result;
}

console.log(removeShortWords('knock on the door will you')); // 'knock door will'
console.log(removeShortWords('a terrible plan')); // 'terrible plan'
console.log(removeShortWords('run faster that way')); // 'faster that'
