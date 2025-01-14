class Book {
    constructor(title,author,pages,read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

const booksContainer = document.querySelector('.books');
const addBookBtn = document.querySelector('#new-book');
const addBookModal = document.getElementById('add-book-modal');
const addBookForm = document.getElementById('add-book-form');
const titleInput = addBookForm.querySelector('#title-input');
const authorInput = addBookForm.querySelector('#author-input');
const pagesInput = addBookForm.querySelector('#pages-input');
const readInput = addBookForm.querySelector('#read-input');
const closeBtn = addBookForm.querySelector('#close-modal');

function addBookToLibrary(title,author,pages,read) {
    const newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
}

function changeRead(event) {
    const index = event.target.parentNode.parentNode.getAttribute('data-index');
    const book = myLibrary[index]
    const bookCard = document.querySelector(`div[data-index='${index}']`);
    console.log(bookCard)
    const readStatus = bookCard.querySelector('.read-status');
    const readChangeBtn = bookCard.querySelector('.read-change-btn');

    book.read = !book.read;
    readStatus.textContent = book.read?'Finished Reading': 'Not Finished';
    readChangeBtn.textContent = book.read? 'Not Read': 'Finished';
}

function deleteCard(event) {
    const index = event.target.parentNode.parentNode.getAttribute('data-index');
    console.log(index);
    myLibrary.splice(index,1);
    updateBookTable();
}

function updateBookTable() {
    booksContainer.innerHTML = '';
    myLibrary.forEach(addBookCard);
}

function clearModal() {
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    readInput.checked = false;  
}

function addBookCard(book,index) {
    const bookCard = document.createElement('div');
    const title = document.createElement('h1');
    const author = document.createElement('h3');
    const totalPages = document.createElement('p');
    const read = document.createElement('p');
    const cardBtns = document.createElement('div');
    const deleteBtn = document.createElement('button');
    const readChangeBtn = document.createElement('button');

    bookCard.classList.add('book-card');
    bookCard.setAttribute('data-index',`${index}`);
    title.classList.add('title');
    author.classList.add('author');
    totalPages.classList.add('total-pages');
    read.classList.add('read-status');
    cardBtns.classList.add('card-btns');
    deleteBtn.classList.add('delete-btn');
    readChangeBtn.classList.add('read-change-btn');
    
    title.textContent = book.title;
    author.textContent = book.author;
    totalPages.textContent = "Number of pages: " + book.pages;
    read.textContent = book.read? 'Finished Reading': 'Not Finished';
    deleteBtn.textContent = 'Delete';
    readChangeBtn.textContent = book.read? 'Not Read': 'Read';
    deleteBtn.addEventListener('click',deleteCard);
    readChangeBtn.addEventListener('click',changeRead);


    cardBtns.append(deleteBtn,readChangeBtn);
    bookCard.append(title,author,totalPages,read,cardBtns);
    booksContainer.append(bookCard);
}

// Initial Library
const myLibrary = [];

addBookToLibrary('The Hobbit','J.R.R',295,true);
addBookToLibrary('Wicked','Gregory Maguire',512,false);
addBookToLibrary('Butter','Asako Yuzuki',464,true);

updateBookTable();

// Event Listeners
addBookBtn.addEventListener('click', () => {
    addBookModal.showModal();
});

closeBtn.addEventListener('click',()=>{
    addBookModal.close();
});

pagesInput.addEventListener('input', () => {
    pagesInput.setCustomValidity('');
    if (pagesInput.validity.patternMismatch) {
        pagesInput.setCustomValidity('Only Numbers');
    }
})

addBookForm.addEventListener('submit',() => {
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const read = readInput.checked
    const newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
    clearModal();
    addBookModal.close();
    updateBookTable();
})