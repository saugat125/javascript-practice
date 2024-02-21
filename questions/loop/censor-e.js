// Write a function `censorE` that accepts a string as an argument. The function should return the a new
// version of string where all characters that are 'e's are replaced with '*'s.

function censorE(str){
    let result = '';
    for(let i=0;i<str.length;i++){
        let char = str[i];
        if(char=='e'){
            result = result + '*';
        }
        else{
            result = result + char;
        }
    }
    return result;
}

console.log(censorE('speedy')); // 'sp**dy'
console.log(censorE('pending')); // 'p*nding'
console.log(censorE('scene')); // 'sc*n*'
console.log(censorE('heat')); // 'h*at'
