import Book from './book.js';

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let titleBookInput = document.querySelector('#bookTitle');
    let imageBookInput = document.querySelector('#urlimage');
    let authorBookInput = document.querySelector('#author');

    let title = titleBookInput.value;
    let author = authorBookInput.value;
    let image = imageBookInput.value;

    let book1 = new Book(title, author, image);
    let containerBook = book1.createBook();

    const container = document.querySelector('.row');
    container.appendChild(containerBook);


  titleBookInput.value = '';
  authorBookInput.value = '';
  imageBookInput.value = '';
  
});




