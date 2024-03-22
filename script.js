const books = [];
function Book(title,author,pages,published,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.published = published;
    this.read = read;
}
/*const it = new Book("IT","Stephen King","321","1986","true");
const radical = new Book("Radical","David Putt","140","2010","false");
const hobbit = new Book("The Hobbit","John Ronald","237","1937","true");
const silentPatient = new Book("The Silent Patient","Alex M","221","2019","true");
const steveJobs  = new Book("Steve Jobs","Walter Isaacson","170","2012","true");
const ikigai = new Book("Ikigai","Hector Garcia","240","2016","false");

books.push(it,radical,hobbit,silentPatient,steveJobs,ikigai);*/

const form = document.querySelector('.addForm');
form.addEventListener('submit',handleFormSubmit);
function handleFormSubmit(event){
    event.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const published = document.querySelector('#publish').value;
    const read = document.querySelector('#hasRead').value;

    const newBook = new Book(title,author,pages,published,read);
    books.push(newBook);
    const booklist = document.querySelector('.bookslist');
    const newBookDiv = document.createElement('div');
    newBookDiv.classList.add('book');
    newBookDiv.innerHTML = `
    <p><b>Title:</b> ${newBook.title}</p>
    <p><b>Author:</b> ${newBook.author}</p>
    <p><b>Pages:</b> ${newBook.pages}</p>
    <p><b>Published:</b> ${newBook.published}</p>
    <p class='readStatus'><b>Read:</b> ${newBook.read}</p>
    <button class='toggleRead'>Toggle Read</button>
    <button class='delete'>Delete</button>`;
    booklist.appendChild(newBookDiv);
    const toggleRead = document.querySelectorAll('.toggleRead');
    toggleRead.forEach((toggole)=> toggole.addEventListener('click',handleToggleRead));
    const deleteBook = document.querySelectorAll('.delete');
    deleteBook.forEach((deleteB)=> deleteB.addEventListener('click',handleDelete));
    form.reset();
}

function handleToggleRead(event){
    const readStatusElement = event.target.previousElementSibling;
    const readStatus = readStatusElement.textContent;
    if(readStatus === "Read: Yes"){
        readStatusElement.innerHTML = "<div class='readStatus'><b>Read:</b> No</div>";
    } else {
        readStatusElement.innerHTML = "<div class='readStatus'><b>Read:</b> Yes</div>";
    }
}

function handleDelete(event){
    const book = event.target.parentNode;
    book.remove();
}
