booksContainer = document.querySelector('#books-container');
addBtn = document.querySelector('#add-btn'); 

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
  myLibrary.push(book);
}

function renderLibrary() {
  myLibrary.forEach(book => {
    const bookDiv = document.createElement('DIV');
    const bookTitle = document.createElement('H3');
    const bookAuthor = document.createElement('P');
    const bookPages = document.createElement('P');
    const bookRead = document.createElement('P');

    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookPages.textContent = book.pages;
    bookRead.textContent = book.read ? "Read" : "Not read";

    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookPages);
    bookDiv.appendChild(bookRead);

    booksContainer.appendChild(bookDiv);
  });
}

theHobbit = new Book("The Hobbit", "J.R.R Tolkien", "295", false);
addBookToLibrary(theHobbit)
console.log(myLibrary);

renderLibrary()