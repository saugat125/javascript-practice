// Write a function `total` that accepts an array of numbers as an argument. The function should return
// the total sum of all elements of the array.

let total = function(arr){
    let sum = 0;
    for(i=0;i<arr.length;i++){
        char = arr[i];
        sum = sum + char;
    }
    return sum;
}

console.log(total([3, 2, 8])); // 13
console.log(total([-5, 7, 4, 6])); // 12
console.log(total([7])); // 7
console.log(total([])); // 0
