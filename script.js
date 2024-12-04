function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title,author,pages,read) {
    const newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
}

function addBookCard(book,index) {
    const bookCard = document.createElement('div');
    const title = document.createElement('h1');
    const author = document.createElement('h2');
    const totalPages = document.createElement('p');
    const read = document.createElement('p');
    const deleteBtn = document.createElement('button');
    const readBtn = document.createElement('button');

    bookCard.classList.add('book-card');
    bookCard.setAttribute('id',`card-${index}`);
    title.classList.add('title');
    author.classList.add('author');
    totalPages.classList.add('total-pages');
    read.classList.add('read-status');
    deleteBtn.setAttribute('data-index',`${index}`);
    readBtn.classList.add('change-read-status');
    
    title.textContent = book.title;
    author.textContent = book.author;
    totalPages.textContent = book.pages;
    read.textContent = book.read === 'read'? 'Finished Reading': 'Not Finished';
    deleteBtn.textContent = 'Delete';
    readBtn.textContent = read.textContent === 'Finished Reading'? 'Not Read': 'Read';
    deleteBtn.addEventListener('click',()=>{});
    readBtn.addEventListener('click',()=>{});

    bookCard.append(title,author,totalPages,read,deleteBtn,readBtn);
    booksContainer.append(bookCard);
}

const myLibrary = [];

addBookToLibrary('The Hobbit','J.R.R',295,'Reading');
addBookToLibrary('Wicked','Gregory Maguire',512,'Reading');
addBookToLibrary('Butter','Asako Yuzuki',464,'Reading');

const booksContainer = document.querySelector('.books');
const addBookBtn = document.querySelector('#new-book');

// Modal popup
const addBookModal = document.getElementById('add-book-modal');
const titleInput = addBookModal.querySelector('#title-input');
const authorInput = addBookModal.querySelector('#author-input');
const pagesInput = addBookModal.querySelector('#pages-input');
const readInput = addBookModal.querySelector('#read-input');
const closeBtn = addBookModal.querySelector('#close-modal');
const submitBtn = addBookModal.querySelector('#submit-modal');



addBookBtn.addEventListener('click', () => {
    addBookModal.showModal();
});

submitBtn.addEventListener('click',(event) => {
    event.preventDefault();
    const newBook = new Book(titleInput.value,authorInput.value,pagesInput.value,readInput.value);
    myLibrary.push(newBook);
    updateBookTable();
})

closeBtn.addEventListener('click',()=>{
    addBookModal.close();
});

function updateBookTable() {
    booksContainer.innerHTML = '';
    myLibrary.forEach(addBookCard);
}

updateBookTable();
// style the modal
// add button and cancel button functionality
// rename some of the html element class and ids
// adding new book should update the ui