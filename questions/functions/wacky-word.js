// Write a function `wackyWord` that accepts two strings as arguments. The function should return a new
// string containing the first three characters of the first string concatenated with the last two
// character of the second string.

// You can assume that the first argument has a length of at least three and the second argument has a
// length of at least two.

function wackyWord(s1,s2){
    let result = s1.slice(0,3) + s2.slice(s2.length-2);
    return result;
}

console.log(wackyWord('very', 'kindly')); // 'verly'
console.log(wackyWord('forever', 'sick')); // 'forck'
console.log(wackyWord('cellar', 'door')); // 'celor'
console.log(wackyWord('bagel', 'sweep')); // 'bagep'
