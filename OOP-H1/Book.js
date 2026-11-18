export default class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  get title() {
    return this._title;
  }
  set title(value) {
    if (!value) throw new Error("Title not be empty");
    this._title = value;
  }

  get author() {
    return this._author;
  }
  set author(value) {
    if (!value) throw new Error("Author not be empty");
    this._author = value;
  }

  get year() {
    return this._year;
  }
  set year(value) {
    if (value <= 0) throw new Error("Year should be a positive number");
    this._year = value;
  }

  printInfo() {
    console.log(`${this.title}, ${this.author}, ${this.year}`);
  }

  static findOldest(books) {
    let oldest = books[0];
    for (const book of books) {
      if (book.year < oldest.year) oldest = book;
    }
    return oldest;
  }
}