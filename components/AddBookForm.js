// AddBookForm.js

import React, { useState } from 'react';

function AddBookForm() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://127.0.0.1:8000/api/books/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Book added:', data);
        setFormData({
          title: '',
          author: '',
          genre: '',
        });
      })
      .catch((error) => console.error('Error adding book:', error));
  };

  return (
    <form onSubmit={handleSubmit} className="add-book-form">
      <h2>Add a New Book</h2>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={formData.author}
        onChange={handleChange}
      />
      <input
        type="text"
        name="genre"
        placeholder="Genre"
        value={formData.genre}
        onChange={handleChange}
      />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBookForm;
