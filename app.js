// Book Construtor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI COnstrucror
function Ui() {   
}


// Event listeners
document.getElementById('book-form').addEventListener('submit', 
    function (e) {
        
        let title = document.getElementById('title').value;
        let author = document.getElementById('author').value;
        let isbn = document.getElementById('isbn').value;
        console.log(title, author, isbn);

        e.preventDefault();
    }
);