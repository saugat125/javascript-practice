let display = document.getElementById('counter-display');
let increase = document.getElementById('plus');
let decrease = document.getElementById('minus');
let reset = document.getElementById('reset');
let count = 0;

increase.addEventListener('click',()=>{
    count = count+1;
    display.innerHTML = count;
});

decrease.addEventListener('click',()=>{
    count = count-1;
    display.innerHTML = count;
});

reset.addEventListener('click',()=>{
    count = 0;
    display.innerHTML = count;
});