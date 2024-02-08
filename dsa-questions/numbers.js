function natural(n){
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}

console.log(natural(3));

function countDigits(num){
    let count = 0;
    let number_array = num.toString().split('');
    count = number_array.length;
    return count;
}

console.log(countDigits(24568));
