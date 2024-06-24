// Task 1: Create a constructor function for the Book object with properties for title, author, and pages.
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    
}

// Task 2: Implement a method within the Book object to display book information.
Book.prototype.display = function() {
    console.log("Title: " + this.title + ", Author: " + this.author + ", Pages: " + this.pages);
}

// Task 3: Create an array to store book objects and implement functions to add new books and search for books by title or author.
let books = [];

function addBook(title, author, pages) {
    books.push(new Book(title, author, pages));
}

function searchBook(choice, name) {
    if (choice.toLowerCase() == "title") {
        for (const book in books) {
            if (name == book.title) {
                book.display();
            }
        }
    } else if (choice.toLowerCase() == "author") {
        for (const book in books) {
            if (name == book.author) {
                book.display();
            }
        }
    } else {
        console.log("Select a valid choice!");
    }
}

// Task 4: Create functions that utilize the filter method to filter out books that contain more than 100 pages and the map method to add "Title: " and "Author: " to the book's title and author properties respectably.
function filterLessThan100Pages() {
    let booksFiltered = books.filter(book => book.pages > 100);
    console.log("Books with more than 100 pages:")
    console.log(booksFiltered)
}

function addLabels(book) {
    book.title = "Title: " + title;
    book.title = "Author: " + author;
}
