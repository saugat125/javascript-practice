let letters = 'ABCDEF01234556789';

let color = '#';

for(let i=0;i<6;i++){
    let random = letters[Math.floor(Math.random()*letters.length)];
    color = color + random;
}
console.log(color);