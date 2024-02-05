const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
      this.title = title,
      this.author = author,
      this.pages = pages,
      this.read = read;
  }
}

function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book)
}
addBookToLibrary("harry potter")
console.log(myLibrary);