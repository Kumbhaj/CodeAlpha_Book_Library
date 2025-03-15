let books = [
    { title: "1984", category: "fiction" },
    { title: "Sapiens", category: "non-fiction" },
    { title: "To Kill a Mockingbird", category: "fiction" },
    { title: "Educated", category: "non-fiction" }
];
let borrowHistory = [];

function displayBooks(filteredBooks) {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = "";
    filteredBooks.forEach((book, index) => {
        let bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        bookDiv.innerHTML = `${book.title} <button onclick="borrowBook(${index})">Borrow</button>`;
        bookList.appendChild(bookDiv);
    });
}

function searchBooks() {
    let query = document.getElementById("search").value.toLowerCase();
    let filtered = books.filter(book => book.title.toLowerCase().includes(query));
    displayBooks(filtered);
}

function showCategory(category) {
    if (category === "all") {
        displayBooks(books);
    } else {
        let filtered = books.filter(book => book.category === category);
        displayBooks(filtered);
    }
}

function addBook() {
    let title = document.getElementById("book-title").value;
    let category = document.getElementById("book-category").value;
    if (title) {
        books.push({ title, category });
        displayBooks(books);
        document.getElementById("book-title").value = "";
    }
}

function borrowBook(index) {
    let book = books[index];
    borrowHistory.push(book.title);
    updateBorrowHistory();
}

function updateBorrowHistory() {
    const historyList = document.getElementById("borrow-history");
    historyList.innerHTML = "";
    borrowHistory.forEach(title => {
        let listItem = document.createElement("li");
        listItem.textContent = title;
        historyList.appendChild(listItem);
    });
}

document.addEventListener("DOMContentLoaded", () => displayBooks(books));
