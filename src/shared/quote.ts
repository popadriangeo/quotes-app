export class Quote {
    constructor(public text: string, public author: string) {}
  
    static fromJSON(json: any): Quote {
      return new Quote(json.text, json.author);
    }
  }