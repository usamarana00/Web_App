// BookList.js

import React, { useEffect, useState } from 'react';
import '//styles.css';
import Book from 'harrypotter/frontend/src/components/Book.js';

function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Fetch data from your Django API here
        fetch('/api/books/') // Update the URL to match your API endpoint
            .then((response) => response.json())
            .then((data) => setBooks(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="book-list">
            <h2>Book List</h2>
            {books.map((book) => (
                <Book
                    key={book.id}
                    title={book.title}
                    author={book.author}
                    genre={book.genre}
                />
            ))}
        </div>
    );
}

export default BookList;
