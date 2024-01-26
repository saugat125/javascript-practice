// Write a function `chooseDivisibles(numbers, target)` that accepts an array of numbers and a
// target number as arguments. The function should return an array containing elements of the original
// array that are divisible by the target.

function chooseDivisibles(numbers,target){
    let result = [];
    for(let i=0;i<numbers.length;i++){
        char = numbers[i];
        if(char%target===0){
            result.push(char);
        }
    }
    return result;
}

console.log(chooseDivisibles([40, 7, 22, 20, 24], 4)); // [40, 20, 24]
console.log(chooseDivisibles([9, 33, 8, 17], 3)); // [9, 33]
console.log(chooseDivisibles([4, 25, 1000], 10)); // [1000]
