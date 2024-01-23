// App.js

import React from 'react';
import './styles.css'; // Import your CSS file if you have one
import BookList from './components/BookList';
import AddBookForm from './components/AddBookForm'; // Import the AddBookForm component

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Book Catalogue</h1>
      </header>

      {/* Render the AddBookForm component */}
      <section className="add-book-section">
        <AddBookForm />
      </section>

      {/* Render the BookList component */}
      <section className="book-list-section">
        <BookList />
      </section>

      {/* Other components or content */}
    </div>
  );
}

export default App;
