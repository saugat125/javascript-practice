// Write a function named `noOhs` that accepts a string as an argument. The functions should print the
// characters of the string one by one except the character 'o'. The function doesn't need to return
// any value. It should just print to the terminal.

function noOhs(string){
    for(let i=0;i<string.length;i++){
        if(string[i]!=='o'){
            console.log(string[i]);
        }
    }
}

noOhs('code');
// prints
//  c
//  d
//  e

noOhs('school');
// prints
//  s
//  c
//  h
//  l
