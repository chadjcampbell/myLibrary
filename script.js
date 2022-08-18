let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let addform = document.getElementById('addform');
    let formData = new FormData(addform);
    let title = formData.get('title');
    let author = formData.get('author');
    let pages = formData.get('pages');
    let read = formData.get('read');
    myLibrary.push(new Book(title, author, pages, read));
    addform.reset();
}

function renderLibrary() {
    for (Book in myLibrary) {
        
    }
}