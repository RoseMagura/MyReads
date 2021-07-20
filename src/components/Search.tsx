import React, { useState, useEffect } from 'react'
import * as BooksAPI from '../api/BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book'
import BookType from '../types/Book'
import { PropsForChild } from '../types/PropsForChild'

const Search = (props: PropsForChild) => {
    const { allBooks, changeShelf } = props;
    const [query, setQuery] = useState('');
    const [searchRes, setSearchRes] = useState<BookType[]>([]);
    const [books, setBooks] = useState<BookType[]>([]);

    const setUp = () => {
        setBooks(allBooks);
        if (searchRes.length === 0) {
            setSearchRes(allBooks);
        }
    }

    const searchApi = () => {
        console.log('searching');
    }

    const updateQuery = (subStr: string) => {
        setQuery(subStr);
        if (subStr !== '') {
            const searchRes = searchApi();
            // TODO: setSearchRes with searchRes
        }
    }

    const clearQuery = () => {
        setQuery('');
        setSearchRes(allBooks);
    }

    useEffect(setUp, [props.allBooks]);

    return (
        <div>
            <div className="app">
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link className="close-search" to='/'>Close</Link>
                        <div className="search-books-input-wrapper">
                            <input type="text"
                                placeholder="Search by title or author"
                                value={query}
                                onChange={(event) => updateQuery(event.target.value)} />
                        </div>
                    </div>
                    <div className="search-books-results">
                        {/* {JSON.stringify(searchRes)} */}
                        {searchRes.length > 0 && 
                            searchRes.map((item) => (
                                <Book
                                    key={item.id}
                                    info={item}
                                    onChange={changeShelf}
                                     />
                            ))
                        }
                        {searchRes.length === 0 &&  query.length > 0 && <div className='showing-books'>
                            <span> No results </span>
                            <button onClick={clearQuery}>Clear Search</button>
                        </div>}
                        {query.length > 0 && searchRes.length > 0 &&
                            <div className='showing-books'>
                                <span>Now showing {searchRes.length} books </span>
                                <button onClick={clearQuery}>Clear Search</button>
                            </div>}
                        <ol className="books-grid">
                            {query.length > 0 && searchRes.length > 0 &&
                                searchRes.map((item) => (
                                    <Book
                                        key={item.id}
                                        info={item}
                                        onChange={changeShelf}
                                         />
                                ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search