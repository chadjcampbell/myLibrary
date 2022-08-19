let myLibrary = [];
let booknumber = 0;


function Book(title, author, pages, read, booknumber) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.booknumber = booknumber;
}

function addBookToLibrary() {
    let addform = document.getElementById('addform');
    let formData = new FormData(addform);
    let title = formData.get('title');
    let author = formData.get('author');
    let pages = formData.get('pages');
    let read = formData.get('read');
    myLibrary.push(new Book(title, author, pages, read, booknumber));
    booknumber++;
    addform.reset();
    renderLibrary();
}

function renderLibrary() {
    const books = document.querySelector('#books');
        books.innerHTML = '';
    for (let x in myLibrary) {
        let checked = '';
        if (myLibrary[x].read == 1) {
            checked = 'checked'
        }
        books.innerHTML += `<div class="card">
        <div class="card-header">
          ${myLibrary[x].title}
        </div>
        <div class="card-body">
          <h7 class="card-title">${myLibrary[x].author}</h7>
          <p class="card-text">Pages: ${myLibrary[x].pages} </p>
          <div class="form-check form-switch">
            <input onclick="readornot(this)" class="form-check-input" type="checkbox" role="switch" name="cardread" data-read="${myLibrary[x].read}" data-id="${myLibrary[x].booknumber}" ${checked}>
            <label class="form-check-label" for="cardread">Read</label>
          </div>
          <button class="remove btn btn-primary">Remove</button>
        </div>
      </div>`
    }
}

function readornot(element) {
    let id = element.dataset.id;
    let read = element.dataset.read;
    if (read == 1) {
        myLibrary[id].read = 2;
    }
    else {
        myLibrary[id].read = 1;
    }
    renderLibrary();
}