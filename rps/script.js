let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

let user_display = document.getElementById('userChoice');
let computer_display = document.getElementById('computerChoice');
let result = document.getElementById('result');
let computer_choice;
let user_choice;

rock.addEventListener('click',()=>{
    user_choice = 'Rock';
    user_display.innerHTML = 'Your Choice : '+ user_choice ;
    startGame();
})
paper.addEventListener('click',()=>{
    user_choice = 'Paper';
    user_display.innerHTML = 'Your Choice : ' + user_choice;
    startGame();
})
scissors.addEventListener('click',()=>{
    user_choice = 'Scissors';
    user_display.innerHTML = 'Your Choice : ' + user_choice;
    startGame();
})

function ComputerChoice(){
    let choices = ['Rock','Paper','Scissors'];
    computer_choice = choices[Math.floor(Math.random() * choices.length)];
    computer_display.innerHTML = "Computer Choice : "+ computer_choice;
}

function startGame(){
    ComputerChoice();
    showResult();
}

function showResult(){
    let Result;
    if (computer_choice===user_choice) {
        Result = "It's a draw"; 
    }
    if(computer_choice==='Rock' && user_choice==='Paper'){
        Result = "You Win";
    }
    else if(computer_choice==='Rock' && user_choice==='Scissors'){
        Result = "Computer Wins";
    }
    else if(computer_choice==='Paper' && user_choice==='Rock'){
        Result = "Computer Wins";
    }
    else if(computer_choice==='Paper' && user_choice==='Scissors'){
        Result = "You Win";
    }
    else if(computer_choice==="Scissors" && user_choice==='Rock'){
        Result = "You Win";
    }
    else if(computer_choice==='Scissors' && user_choice==='Paper'){
        Result = "Computer Wins";
    } 
    result.innerHTML = Result;
}

