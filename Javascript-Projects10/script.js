const api_url = 'https://api.quotable.io/random';
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const newQuote = document.getElementById('new_quote');


async function getQuote(url){
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
    
}


getQuote(api_url);

