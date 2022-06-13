//Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {
        let ret = title + ' by ' + author + ', ' + pages + ' pages, ';
        return (read) ? ret + 'you have read the book.' : ret + 'you havent read the book';
    };
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}
//------------------------------------------------------

function populateRow(book) {
    let row = document.createElement('tr');

    let cel1 = document.createElement('th');
    let cel2 = document.createElement('th');
    let cel3 = document.createElement('th');
    let cel4 = document.createElement('th');

    cel1.textContent = book.title;
    cel2.textContent = book.author;
    cel3.textContent = book.pages;
    cel4.textContent = book.read;

    row.appendChild(cel1);
    row.appendChild(cel2);
    row.appendChild(cel3);
    row.appendChild(cel4);

    return row;
}

function populateTable(t) {
    myLibrary.forEach(book => {
        t.appendChild(populateRow(book));
    });
    amount.textContent = myLibrary.length;
}

function createNewBook() {
    let t = title.value;
    let a = author.value;
    let p = pages.value;
    let r = read.checked;

    return new Book(t, a, p, r);
}

function inputsComplete(){
    return title.value != '' && author.value != '' && pages.value != '';
}

function restartInputs(){
    title.value = '';
    author.value = '';
    pages.value = '';
    read.checked = false;
}

//-------------------------------

let myLibrary = [];

let a = new Book('Libro AAA', 'Autor A', 100, true);
let b = new Book('Libro BBB', 'Autor B', 200, false);
let c = new Book('Libro CCC', 'Autor C', 300, false);
let d = new Book('Libro DDD', 'Autor D', 400, true);
let e = new Book('Libro EEE', 'Autor E', 500, false);

addBookToLibrary(a);
addBookToLibrary(b);
addBookToLibrary(c);
addBookToLibrary(d);
addBookToLibrary(e);

//--------------------------------

const tbl = document.querySelector(".bookRows");
const amount = document.querySelector('.amount');
const btn = document.querySelector('.newBtn');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');

window.addEventListener('load', populateTable(tbl));

btn.addEventListener('click', (event) => {
    if(inputsComplete()){
        let newBook = createNewBook();
        addBookToLibrary(newBook);
        tbl.appendChild(populateRow(newBook));
        amount.textContent = myLibrary.length;
        restartInputs();
        event.preventDefault();
    }
});
