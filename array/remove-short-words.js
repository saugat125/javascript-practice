// Write a function `removeShortWords` that accepts a sentence string as an argument. The function
// should return a new sentence where all of the words shorter than 4 characters are removed.

function removeShortWords(sen){
    let result =[];
    arr = sen.split(" ");
    for(let i=0;i<arr.length;i++){
        char = arr[i];
        if(char.length>=4){
            result.push(char);
        }
    }
    return result.join(" ");
}

console.log(removeShortWords('knock on the door will you')); // 'knock door will'
console.log(removeShortWords('a terrible plan')); // 'terrible plan'
console.log(removeShortWords('run faster that way')); // 'faster that'
