// Write a function named `noOhs` that accepts a string as an argument. The functions should print the
// characters of the string one by one except the character 'o'. The function doesn't need to return
// any value. It should just print to the terminal.

function noOhs(str){
    let result = '';
    for(let i=0;i<str.length;i++){
        let char = str[i];
        if(char!='o'){
            result = result + char;
        }
    }
    console.log(result);
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
