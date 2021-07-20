import React from 'react'
import Search from './Search';
import ShelveBooks from './ShelveBooks'
import { Route } from 'react-router-dom'
import '../assets/css/App.css'
import { useState, useEffect } from 'react';
import BookType from '../types/Book';
import * as BooksAPI from '../api/BooksAPI'

const BooksApp = () => {
    const [books, setBooks] = useState<BookType[]>([]);

    const getAllBooks = (): void => {
        BooksAPI.getAll().then((all: BookType[]) => setBooks(all));
    }

    const updateCategory =
        async (bookToUpdate: BookType, category: string): Promise<void> => {
            await BooksAPI.update(bookToUpdate, category);
            getAllBooks();
        }

    useEffect(getAllBooks, []);

    return (
        <div>
            <Route exact path='/' render={() => (
                <ShelveBooks
                    allBooks={books}
                    changeShelf={updateCategory} />
            )} />
            <Route path='/search'>
                <Search
                    allBooks={books}
                    changeShelf={updateCategory}
                />
            </Route>
        </div>
    )
}


export default BooksApp