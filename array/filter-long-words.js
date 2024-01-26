// Write a function `filterLongWords` that accepts an array of strings as an argument. The function
// should return a new array containing only the strings that are less than 5 characters long.

function filterLongWords(arr){
    let result = [];
    for(let i=0;i<arr.length;i++){
        char = arr[i];
        if(char.length<5){
            result.push(char)
        }
    }
    return result;
}

console.log(filterLongWords(['kale', 'cat', 'retro', 'axe', 'heirloom']));
// ['kale', 'cat', 'axe']

console.log(filterLongWords(['disrupt', 'pour', 'trade', 'pic']));
// ['pour', 'pic']
