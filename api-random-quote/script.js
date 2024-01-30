let submit = document.getElementById('submitbtn');
let display = document.getElementById('display');

submit.addEventListener('click',getQuote);

async function getQuote(){
    let api_url = 'https://api.quotable.io/random';
    let response = await fetch(api_url);
    let data = await response.json();
    let quote = data['content'];
    display.innerHTML = quote;
}


