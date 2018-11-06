export class Message {
  constructor(author: string, text: string) {
    this.author = author;
    this.text = text;
  }

  public author: string;
  public text: string;
}
