let array = [-1,4,9,-2,-7,25];

let result = array
.filter((num)=>num>0)
.map((num)=>Math.sqrt(num))

let sum = result.reduce((total,number)=>total+number,0);

console.log(sum);