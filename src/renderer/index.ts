import { QuotesApi } from '../shared/quotes-api';

const quoteElement = document.getElementById('quote') as HTMLElement;
const authorElement = document.getElementById('author') as HTMLElement;
const updateQuoteButton = document.getElementById('update-quote') as HTMLButtonElement;

const quotesApi = new QuotesApi();

function updateQuote() {
  quotesApi.fetchRandomQuote().then(quote => {
    quoteElement.textContent = quote.text;
    authorElement.textContent = `— ${quote.author}`;
  });
}

updateQuoteButton.addEventListener('click', () => {
  updateQuote();
});

// Fetch an initial quote when the app starts
updateQuote();