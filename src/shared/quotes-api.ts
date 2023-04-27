import { Quote } from './quote';

export class QuotesApi {
  private apiUrl = 'https://api.quotable.io';

  async fetchRandomQuote(): Promise<Quote> {
    const response = await fetch(`${this.apiUrl}/random`);
    if (!response.ok) {
      throw new Error('Failed to fetch quote from API');
    }
    const json = await response.json();
    return Quote.fromJSON(json);
  }
}
