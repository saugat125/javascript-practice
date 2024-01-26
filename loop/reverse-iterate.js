// Write a function `reverseIterate` that accepts a string as an argument. The function should print
// the characters of the string one by one, in reverse order. The function doesn't need to return any
// value. It should just print to the terminal.

function reverseIterate(string){
    for(let i=string.length-1;i>=0;i--){
        console.log(string[i]);
    }
}

reverseIterate('carrot');
// prints
//  t
//  o
//  r
//  r
//  a
//  c

reverseIterate('box');
// prints
//  x
//  o
//  b
