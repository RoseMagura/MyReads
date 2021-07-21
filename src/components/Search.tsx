import React, { useState } from 'react'
import * as BooksAPI from '../api/BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book'
import BookType from '../types/Book'
import { PropsForChild } from '../types/PropsForChild'

const Search = (props: PropsForChild) => {
    const { allBooks, changeShelf } = props;
    const [query, setQuery] = useState('');
    const [searchRes, setSearchRes] = useState<BookType[]>([]);

    const updateQuery = async (subStr: string) => {
        setQuery(subStr);
        subStr !== '' && setSearchRes(await BooksAPI.search(subStr));
    }

    const clearQuery = () => {
        setQuery('');
        setSearchRes([]);
    }

    const findShelf = (id: string): string => {
        const selectedBooks = allBooks.filter(book => book.id === id);
        if(selectedBooks.length > 0){
            return selectedBooks[0].shelf;
        }
        return 'none';
    }
    
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
                        <ol className='books-grid'>
                            {searchRes.length > 0
                                ? query.length > 0 && searchRes.map((item) => {
                                    item.shelf = findShelf(item.id);
                                    return <Book
                                        key={item.id}
                                        info={item}
                                        onChange={changeShelf}
                                    />
                                })
                                : query.length > 0
                                    ? <div className='showing-books'>
                                        <span> No results </span>
                                        <button onClick={clearQuery}>Clear Search</button>
                                    </div>
                                    : <div>
                                        <span>Please input search term above</span>
                                    </div>
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
