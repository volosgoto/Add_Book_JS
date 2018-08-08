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
        <td><a href="">X</a></td>
    `;

    // Append to list
    list.appendChild(row);
}

// Show Alerts
Ui.prototype.showAlert = function (message, className) {
    // Create element
    let div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    let container = document.querySelector('.contaiter');
    // Get form
    let form = document.querySelector('#book-form');
    // Insert Alert
    container.insertBefore(div, form);
    // Timeout after 3 sec
    setTimeout(function () {
        document.querySelector('alert').remove();
    }, 3000);
}


// Clear fields
Ui.prototype.clearFields = function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
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

        // Validate
        if (title === '' || author === '' || isbn === '') {
            // Error alert;
            ui.showAlert('Please fill all fields', 'error');
            
        } else {

            // Add book to list
            ui.addBookToList(book);

            // Ui clear form fields
            ui.clearFields();

        }


        e.preventDefault();
    }
);