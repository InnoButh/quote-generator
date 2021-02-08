const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')

// Get Quote From API
async function getQuote() {
    const apiUrl = 'https://type.fit/api/quotes/?method=getQuote&lang=en&format=json';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        let number = Math.floor(Math.random() * data.length);
        let quote;
        if (data[number].author === null) {
            quote = data[number];
            quote.author = "Unknown";
        } else {
            quote = data[number];
        }
        console.log(quote)
    } catch (error) {
        console.log('whoops, no quote', error);
    }
}


// On Load
getQuote();

// NEXT STEPS ARE TO APPEND QUOTES FROM API AND LOAD ON SCREEN