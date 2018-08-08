// Book Construtor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI COnstrucror
function Ui() {   
}

// Add book to list
Ui.prototype.addBookToList = function(book) {
    let list = document.getElementById('book-list');

    // Create table row
    let row = document.createElement('tr');
    
    // Insert colls
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
    `;
    
    console.log(row);
    
}


// Event listeners
document.getElementById('book-form').addEventListener('submit', 
    function (e) {
        // Get form values
        let title = document.getElementById('title').value;
        let author = document.getElementById('author').value;
        let isbn = document.getElementById('isbn').value;

        // Instanciate book
        let book = new Book(title, author, isbn);

        // Instanciate Ui
        let ui = new Ui();

        // Add book to list
        ui.addBookToList(book);


        e.preventDefault();
    }
);