// Book.js

import React from 'react';

function Book({ title, author, genre }) {
  return (
    <div className="book">
      <h3>Title: {title}</h3>
      <p>Author: {author}</p>
      <p>Genre: {genre}</p>
    </div>
  );
}

export default Book;
