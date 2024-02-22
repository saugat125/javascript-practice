// Write a function `alternatingCaps` that accepts a sentence string as an argument. The function should
// return the sentence where words alternate between lowercase and uppercase.

function alternatingCaps(sen){
    let result = '';
    let arr = sen.split(' ');
    for(let i=0;i<arr.length;i++){
        let word = arr[i];
        if(i%2===0){
            result = result + word.toLowerCase() + ' ';
        }
        else{
            result = result + word.toUpperCase() + ' ';
        }
    }
    return result;
}

console.log(alternatingCaps('take them to school')); // 'take THEM to SCHOOL'
console.log(alternatingCaps('What did ThEy EAT before?')); // 'what DID they EAT before?'
