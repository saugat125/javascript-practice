// Write a function `stringIterate` that accepts a string as an argument. The function should print out
// each character of the string, one by one. The function doesn't need to return any value. It should
// just print to the terminal.

function stringIterate(s){
    for(let i=0;i<s.length;i++){
        console.log(s[i]);
    }
}

stringIterate('celery');
// prints
//  c
//  e
//  l
//  e
//  r
//  y

stringIterate('hat');
// prints
//  h
//  a
//  t
