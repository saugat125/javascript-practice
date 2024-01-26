// Write a function `reverseArray` that accepts an array as an argument. The function should return a
// array containing the elements of the original array in reverse order.

function reverseArray(arr){
    let result = [];
    for(let i=arr.length-1;i>=0;i--){
        char = arr[i];
        result.push(char);
    }
    return result;
}

console.log(reverseArray(['zero', 'one', 'two', 'three'])); // ['three', 'two', 'one', 'zero']
console.log(reverseArray([7, 1, 8])); // [8, 1, 7]
