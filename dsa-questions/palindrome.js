function palindrome(num){
    let reversed = num.toString().split('').reverse().join('');
    if(reversed == num){
        return true;
    }
    else{
        return false;
    }
}

console.log(palindrome(101));

