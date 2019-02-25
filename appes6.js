// class Book {
//   constructor(title, author, isbn) {
//     this.title = title;
//     this.author = author;
//     this.isbn = isbn;
//   }
// }

// class UI {
//   addBookToList(book) {
//     const list = document.getElementById("book-list");
//     // Create tr element
//     const row = document.createElement("tr");
//     // Insert cols
//     row.innerHTML = `
//       <td>${book.title}</td>
//       <td>${book.author}</td>
//       <td>${book.isbn}</td>
//       <td><a href="#" class="delete">X<a></td>
//     `;

//     list.appendChild(row);
//   }

//   showAlert(message, className) {
//     // Create div
//     const div = document.createElement("div");
//     // Add classes
//     div.className = `alert ${className}`;
//     // Add text
//     div.appendChild(document.createTextNode(message));
//     // Get parent
//     const container = document.querySelector(".container");
//     // Get form
//     const form = document.querySelector("#book-form");
//     // Insert alert
//     container.insertBefore(div, form);

//     // Timeout after 3 sec
//     setTimeout(function() {
//       document.querySelector(".alert").remove();
//     }, 3000);
//   }

//   deleteBook(target) {
//     if (target.className === "delete") {
//       target.parentElement.parentElement.remove();
//     }
//   }

//   clearFields() {
//     document.getElementById("title").value = "";
//     document.getElementById("author").value = "";
//     document.getElementById("isbn").value = "";
//   }
// }

// // Local Storage Class
// class Store {
//   static getBooks() {
//     let books;
//     if (localStorage.getItem("books") === null) {
//       books = [];
//     } else {
//       books = JSON.parse(localStorage.getItem("books"));
//     }

//     return books;
//   }

//   static displayBooks() {
//     const books = Store.getBooks();

//     books.forEach(function(book) {
//       const ui = new UI();

//       // Add book to UI
//       ui.addBookToList(book);
//     });
//   }

//   static addBook(book) {
//     const books = Store.getBooks();

//     books.push(book);

//     localStorage.setItem("books", JSON.stringify(books));
//   }

//   static removeBook(isbn) {
//     const books = Store.getBooks();

//     books.forEach(function(book, index) {
//       if (book.isbn === isbn) {
//         books.splice(index, 1);
//       }
//     });

//     localStorage.setItem("books", JSON.stringify(books));
//   }
// }

// // DOM Load Event
// document.addEventListener("DOMContentLoaded", Store.displayBooks);

// // Event Listener for add book
// document.getElementById("book-form").addEventListener("submit", function(e) {
//   // Get form values
//   const title = document.getElementById("title").value,
//     author = document.getElementById("author").value,
//     isbn = document.getElementById("isbn").value;

//   // Instantiate book
//   const book = new Book(title, author, isbn);

//   // Instantiate UI
//   const ui = new UI();

//   console.log(ui);

//   // Validate
//   if (title === "" || author === "" || isbn === "") {
//     // Error alert
//     ui.showAlert("Please fill in all fields", "error");
//   } else {
//     // Add book to list
//     ui.addBookToList(book);

//     // Add to LS
//     Store.addBook(book);

//     // Show success
//     ui.showAlert("Book Added!", "success");

//     // Clear fields
//     ui.clearFields();
//   }

//   e.preventDefault();
// });

// // Event Listener for delete
// document.getElementById("book-list").addEventListener("click", function(e) {
//   // Instantiate UI
//   const ui = new UI();

//   // Delete book
//   ui.deleteBook(e.target);

//   // Remove from LS
//   Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

//   // Show message
//   ui.showAlert("Book Removed!", "success");

//   e.preventDefault();
// });

// ES6

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class Ui {
  addBookToList(book) {
    let list = document.getElementById("book-list");

    // Create table row
    let row = document.createElement("tr");

    // Insert colls
    row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
        `;

    // Append to list
    list.appendChild(row);
  }

  showAlert(message, className) {
    // Create element
    let div = document.createElement("div");
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    let container = document.querySelector(".contaiter");
    // Get form
    let form = document.querySelector("#book-form");
    // Insert Alert
    container.insertBefore(div, form);
    // Timeout after 3 sec
    setTimeout(function() {
      document.querySelector(".alert").remove();
    }, 3000);
  }

  deleteBook(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
}

// Local storage class
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }

  static displayBooks() {
    const books = Store.getBooks();

    books.forEach(function(book) {
      const ui = new Ui();
      ui.addBookToList(book);
    });
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  static removeBook(isbn) {
    // console.log(isbn);
    const books = Store.getBooks();

    books.forEach(function(book, index) {
      if (book.isbn == isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
  }
}

// DOM Load event
document.addEventListener("DOMContentLoaded", Store.displayBooks());

// Event listeners for add book
document.getElementById("book-form").addEventListener("submit", function(e) {
  // Get form values
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let isbn = document.getElementById("isbn").value;

  // Instanciate book
  let book = new Book(title, author, isbn);
  // Instanciate Ui
  let ui = new Ui();
  // Validate
  if (title === "" || author === "" || isbn === "") {
    // Error alert;
    ui.showAlert("Please fill all fields", "error");
  } else {
    // Add book to list
    ui.addBookToList(book);

    //Add to Local storage
    Store.addBook(book);

    // Show success alert
    ui.showAlert("Book added!", "success");

    // Ui clear form fields
    ui.clearFields();
  }
  e.preventDefault();
});

//Event listener fot delete
document.getElementById("book-list").addEventListener("click", function(e) {
  // Instanciate Ui
  let ui = new Ui();

  // Delete book
  ui.deleteBook(e.target);

  // Remove from Local storage
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  ui.showAlert("Book removed!", "success");

  e.preventDefault();
});
