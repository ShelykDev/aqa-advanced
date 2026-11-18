import Book from "./Book.js";

export default class EBook extends Book  {
  constructor(title, author, year, format) {
    super(title, author, year);
    this.format = format;
  }

  get format() {
    return this._format;
  }
  set format(value) {
    if (!value) throw new Error("Format not be empty");
    this._format = value;
  }

  printInfo() {
    console.log(`${this.title}, ${this.author}, ${this.year}, ${this.format}`);
  }

  static fromBook(book, format) {
    return new EBook(book.title, book.author, book.year, format);
  }
}