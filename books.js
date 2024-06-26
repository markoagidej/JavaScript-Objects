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
    let bookFound = false;
    if (choice.toLowerCase() == "title") {
        for (const book of books) {
            if (name == book.title) {
                book.display();
                bookFound = true;
            }
        }
        if (!bookFound) {
            console.log("No book found with that title.")
        }
    } else if (choice.toLowerCase() == "author") {
        for (const book of books) {
            if (name == book.author) {
                book.display();
                bookFound = true;
            }
        }
        if (!bookFound) {
            console.log("No book found with that author.")
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

function addLabels1(book) {
    book.title = "Title: " + book.title;
    book.author = "Author: " + book.author;
}

function addLabels() {
    return books.map(book => ({
        title: `Title: ${book.title}`,
        author: `Author: ${book.author}`
    }));
}

addBook("Title1", "Author1", 99);
addBook("Title2", "Author2", 100);
addBook("Title3", "Author3", 101);
addBook("Title4", "Author4", 102);

searchBook("TITLE", "Title1");
searchBook("author", "Author4");
searchBook("TITLE", "Title5");

filterLessThan100Pages();