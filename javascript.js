const myLibrary = [];

function Book(title, author, pages, hasRead) {
  this.id = crypto.randomUUID(); // Generate a unique ID
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;

  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ` + 
           `${this.hasRead ? "already read" : "not read yet"}.`;
  };
}

function addBookToLibrary(title, author, pages, hasRead) {
  const newBook = new Book(title, author, pages, hasRead);
  myLibrary.push(newBook);
  renderLibraryTable();
}

function renderLibraryTable() {
  const tableBody = document.querySelector('#libraryTable tbody');
  tableBody.innerHTML = '';

  myLibrary.forEach(book => {
    const row = document.createElement('tr');

    const titleCell = document.createElement('td');
    titleCell.textContent = book.title;

    const authorCell = document.createElement('td');
    authorCell.textContent = book.author;

    const pagesCell = document.createElement('td');
    pagesCell.textContent = book.pages;

    const readCell = document.createElement('td');
    readCell.textContent = book.hasRead ? "Yes" : "No";

    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(pagesCell);
    row.appendChild(readCell);

    tableBody.appendChild(row);
  });
}

addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, false);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
addBookToLibrary("Moby-Dick", "Herman Melville", 635, false);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 214, true);