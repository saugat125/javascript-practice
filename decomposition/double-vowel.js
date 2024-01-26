// Write a function `doubleVowel` that accepts a string as an argument. The function should return
// the string where every occurrence of a vowel in the original string is repeated twice consecutively.
// Vowels are the letters a, e, i, o, u.

function doubleVowel(str){
    let result = "";
    let vowels = "aeiou";
    for(let i=0;i<str.length;i++){
        char = str[i];
        if(vowels.includes(char)){
            result = result+char+char;
        }
        else{
            result = result+char;
        }
    }
    return result;
}

console.log(doubleVowel('runner')); // 'ruunneer'
console.log(doubleVowel('stoplight')); // 'stoopliight'
console.log(doubleVowel('gardener')); // 'gaardeeneer'
