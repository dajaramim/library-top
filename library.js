booksContainer = document.querySelector('#books-container');
form = document.querySelector('#form');
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

function eventListeners() {
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const pages = document.querySelector('#pages').value
    const read = document.querySelector("input[name='read']:checked").value

    book = new Book(title, author, pages, read)
    addBookToLibrary(book)
    clearHTML()
    renderLibrary()
    form.reset()
  })
}

function addBookToLibrary(book) {
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
    bookRead.textContent = book.read === "true" ? "Read" : "Not Read";

    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookPages);
    bookDiv.appendChild(bookRead);

    booksContainer.appendChild(bookDiv);
  });
}

function clearHTML() {
  while (booksContainer.firstChild) {
    booksContainer.removeChild(booksContainer.firstChild)
  }
}

theHobbit = new Book("The Hobbit", "J.R.R Tolkien", "295", false);
addBookToLibrary(theHobbit)
eventListeners() 
renderLibrary()