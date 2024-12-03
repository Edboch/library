function Book(title,author,pages,hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

function addBookToLibrary(title,author,pages,hasRead) {
    const newBook = new Book(title,author,pages,hasRead);
    myLibrary.push(newBook);
}

const myLibrary = [];

addBookToLibrary('The Hobbit','J.R.R',295,false);
addBookToLibrary('Wicked','Gregory Maguire',512,false);
addBookToLibrary('Butter','Asako Yuzuki',464,false);

console.log(myLibrary);

const booksContainer = document.querySelector('.books');
const addBookBtn = document.querySelector('.add-book');



function addBookCard(book) {
    const bookCard = document.createElement('div');
    const title = document.createElement('h1');
    const author = document.createElement('h2');
    const totalPages = document.createElement('p');
    const hasRead = document.createElement('p');

    bookCard.classList.add('book-card');
    title.classList.add('title');
    title.textContent = book.title;

    author.classList.add('author');
    author.textContent = book.author;
    totalPages.classList.add('total-pages');
    totalPages.textContent = book.pages;
    hasRead.classList.add('has-read');
    hasRead.textContent = book.hasRead? 'Finished Reading':'Not Read';

    bookCard.append(title,author,totalPages,hasRead);
    booksContainer.append(bookCard);
}

addBookBtn.addEventListener('click', () => {
    // build form
})

myLibrary.forEach(addBookCard);