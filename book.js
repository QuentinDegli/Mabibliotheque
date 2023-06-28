

class Book{
    constructor(title, author, image) {
        this.title = title;
        this.author = author;
        this.image = image;
    }
    createBook(){

    let containerBook = document.createElement("div");
    containerBook.classList.add("col-md-3");

    let cardBook = document.createElement("div");
    cardBook.classList.add("card");
    cardBook.style.width = "200px";

    let imageBook = document.createElement("img");
    imageBook.classList.add("card-img-top");
    imageBook.src = this.image;
    imageBook.alt = "...";

    let cardInfo = document.createElement("div");
    cardInfo.classList.add("card-body");

    let titleBook = document.createElement("h3");
    titleBook.classList.add("card-title");
    titleBook.textContent = this.title;

    const authorBook = document.createElement("p");
    authorBook.classList.add("card-text");
    authorBook.textContent = this.author;

    cardInfo.appendChild(titleBook);
    cardInfo.appendChild(authorBook);

    cardBook.appendChild(imageBook);
    cardBook.appendChild(cardInfo);

    containerBook.appendChild(cardBook);

    return containerBook;
    
  }
}







export default Book;