import React from 'react'
import * as BooksAPI from '../api/BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book'
import BookType from '../types/Book';
import { useState, useEffect } from 'react';

const ShelveBooks = () => {
  const [books, setBooks] = useState<BookType[]>([]);

  const getAllBooks = (): void => {
    BooksAPI.getAll().then(all => setBooks(all));
  }

  const updateCategory = (bookToUpdate: BookType, category: string): void => {
    setBooks(
      books.map(book =>
        book.id === bookToUpdate.id
          ? { ...book, shelf: category }
          : book)
    )
  }

  const sortBooks = (books: BookType[], category: string) => {
    return (books.filter(b =>
      b.shelf.includes(category)
    )).map(item => <Book
      key={item.id}
      info={item}
      onChange={updateCategory}
    />
    )
  }

  useEffect(getAllBooks, []);

  return (
    (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {sortBooks(books, 'currentlyReading')}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {sortBooks(books, 'wantToRead')}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {sortBooks(books, 'read')}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to={{
            pathname: '/search',
          }}
            className="open-search">Add Book</Link>
        </div>
      </div>
    )
  )
}
export default ShelveBooks