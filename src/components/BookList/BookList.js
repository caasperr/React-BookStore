import React from 'react';
import Book from '../Book/Book';
import AddBook from '../AddBook/AddBook';

const BookList = () => {
  return (
    <>
          <Book title="The Hunger Games" author="Suzanne Collins" />
          <Book title="Dune" author="Frank Herbert" />
          <Book title="Capital in the Twenty-First Century" author="Suzanne Collins" />
    </>
  );
};

export default BookList;