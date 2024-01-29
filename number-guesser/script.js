let submit = document.getElementById('submitbtn');
let result = document.getElementById('result');

let random_number = Math.floor(Math.random() * 100);
console.log(random_number);

submit.addEventListener('click', checkNumber);
let count = 1;

function checkNumber(){
    let userInput = document.getElementById('number').value;
    if(userInput>0){
        if (userInput == random_number) {
            result.innerHTML = 'Correct answer';
        } else if (userInput < random_number) {
            result.innerHTML = 'The number entered is lower';
            
        } else if (userInput > random_number) {
            result.innerHTML = 'The number entered is higher';
            
        }
        count = count + 1;
        if(count>3){
            result.innerHTML = "You only had 3 chances you lost. <br>The correct number was " + random_number;
        }
    }
    else{
        result.innerHTML = "Enter number from 1 to 100";
    }
}





