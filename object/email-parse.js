// Create a function `emailParse` that accepts an email address string as an argument. The function
// should return an object containing `username` and `domain` as keys. See the examples.
// You can assume that the argument will be a valid email address.

function emailParse(str){
    let result = {};
    arr = str.split("@");
    result.username = arr[0];
    result.domain = arr[1];
    return result;
}

console.log(emailParse('coolcoder42@goodmail.com'));
// { username: 'coolcoder42', domain: 'goodmail.com' }

console.log(emailParse('az@woohoomail.com'));
// { username: 'az', domain: 'woohoomail.com' }

console.log(emailParse('1337pr0graMmer@coldmail.edu'));
// { username: '1337pr0graMmer', domain: 'coldmail.edu' }
