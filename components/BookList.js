// BookList.js

import React, { useEffect, useState } from 'react';

import Book from './Book';

function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Fetch data from your Django API here
        fetch('http://127.0.0.1:8000/api/books/') // Update the URL to match your API endpoint
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
