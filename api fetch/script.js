async function DataFetch(){
    let api_url = 'https://api.quotable.io/random';
    let response = await fetch(api_url);
    let data = await response.json();
    let quote = data['content'];
    console.log(quote);
}

DataFetch();
