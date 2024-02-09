const content = document.querySelector("#content-container");
const booksContainer = document.querySelector("#books-container");
const form = document.querySelector("#form");
const addBtn = document.querySelector("#add-btn");
const modalBtn = document.querySelector("#modal-btn");
const closeBtn = document.querySelector("#close-btn");

let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    (this.title = title),
      (this.id = Date.now()),
      (this.author = author),
      (this.pages = pages),
      (this.read = read);
  }
}

function eventListeners() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("input[name='read']:checked").value;

    book = new Book(title, author, pages, read);
    addBookToLibrary(book);
    clearHTML();
    renderLibrary();
    form.reset();
  });
  modalBtn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);
  booksContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("read")) {
      if (e.target.textContent === "Read") {
        e.target.classList.add("hover:text-red-500");
        e.target.classList.remove("hover:text-teal-500");
        e.target.textContent = "Not Read";
      } else {
        e.target.classList.add("hover:text-teal-500");
        e.target.classList.remove("hover:text-red-500");
        e.target.textContent = "Read";
      }
    }
  });
  booksContainer.addEventListener("mouseover", (e) => {
    const book = e.target.closest(".bg-stone-500");

    if (book) {
      const deleteButton = book.querySelector(".delete");
      deleteButton.classList.remove("hidden");
    }
  });
  booksContainer.addEventListener("mouseout", (e) => {
    const book = e.target.closest(".bg-stone-500");
    try {
      if (book) {
        const deleteButton = e.target.querySelector(".delete");
        deleteButton.classList.add("hidden");
      }
    } catch (error) {
      return;
    }
  });
  booksContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const id = e.target.parentNode.dataset.id;
      myLibrary = myLibrary.filter((book) => book.id != id);
      clearHTML();
      renderLibrary();
    }
  });
}

function openModal() {
  form.classList.add("scale-100");
  form.classList.remove("scale-0");
  content.classList.add("blur-sm");
}

function closeModal() {
  form.classList.add("scale-0");
  form.classList.remove("scale-100");
  content.classList.remove("blur-sm");
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  closeModal();
}

function renderLibrary() {
  myLibrary.forEach((book) => {
    const bookDiv = document.createElement("DIV");
    const bookTitle = document.createElement("H3");
    const bookAuthor = document.createElement("P");
    const bookPages = document.createElement("P");
    const bookRead = document.createElement("P");
    const deleteBtn = document.createElement("BUTTON");

    bookTitle.textContent = book.title;

    bookAuthor.textContent = book.author;
    bookPages.textContent = book.pages + " pages";
    bookRead.textContent = book.read === "true" ? "Read" : "Not Read";

    bookRead.classList.add("cursor-pointer", "transition-colors", "read");

    if (bookRead.textContent === "Read") {
      bookRead.classList.add("hover:text-teal-500");
    } else {
      bookRead.classList.add("hover:text-red-500");
    }
    bookDiv.dataset.id = book.id;
    bookDiv.classList.add(
      "flex",
      "flex-col",
      "gap-2",
      "bg-stone-500",
      "text-2xl",
      "text-white",
      "p-5",
      "shadow-xl",
      "hover:bg-stone-600",
      "select-none",
      "self-start"
    );
    deleteBtn.classList.add(
      "p-1",
      "bg-red-500",
      "rounded-lg",
      "hover:bg-red-400",
      "cursor-pointer",
      "transition-colors",
      "delete",
      "hidden",
      "text-lg",
      "text-white",
      "font-semibold",
      "text-center"
    );
    deleteBtn.textContent = "Delete";

    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookPages);
    bookDiv.appendChild(bookRead);
    bookDiv.appendChild(deleteBtn);

    booksContainer.appendChild(bookDiv);
  });
}

function clearHTML() {
  while (booksContainer.firstChild) {
    booksContainer.removeChild(booksContainer.firstChild);
  }
}
eventListeners();
renderLibrary();
