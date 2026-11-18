import Book from "./Book.js";
import EBook from "./Ebook.js";


const book1 = new Book("The Lord of the Rings", "Tolkien", 1954);
const book2 = new Book("Harry Potter and the Philosopher's Stone", "Rowling", 1997);
const book3 = new Book("Harry Potter and the Goblet of Fire", "Rowling", 2000);
book1.printInfo();
book2.printInfo();
book3.printInfo();


const ebook = new EBook("The Hobbit", "Tolkien", 1937, "PDF");
ebook.printInfo();


console.log(book2.title);
book2.title = "Harry Potter and the Chamber of Secrets";
book2.year = 1998;
ebook.format = "Word";
book2.printInfo();
ebook.printInfo();


const oldest = Book.findOldest([book1, book2, book3, ebook]);
oldest.printInfo();


const converted = EBook.fromBook(book1, "TXT");
converted.printInfo();