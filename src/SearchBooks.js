import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class ListBooks extends Component {
    state = {
        query: '',
        search: [],
        books: []
    }
    getAllBooks = () => {
        BooksAPI.getAll().then((all)=>{
            this.setState({books: all})
        })}
    updateQuery = (event) => {
        if (event.target.value !== ''){
        this.setState({
            query: event.target.value
        }, this.searchAPI)} else {
            this.setState({query: ''})
        }
    }
    clearQuery = () => {
        this.setState({query: '',
                       search: []})
    }
    searchAPI = () => {
        const query = this.state.query
        BooksAPI.search(query).then((search)=> 
            {this.setState({search: search})})
    }
    handleChange(book, event) {
        BooksAPI.update(book, event.target.value)
    }
    render() {
        const { query } = this.state
        const { search } = this.state
        const allBooks = this.state.books
        let results = search === []
            ? allBooks
            : search
       return(
        <div className="app">
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" 
                    placeholder="Search by title or author"
                    value={query}
                    onChange={(event)=> this.updateQuery(event)}/>
              </div>
            </div>
            <div className="search-books-results">
            {/* {console.log('query', query.length, 'results', results)} */}
            {results['error'] === 'empty query' && <div className='showing-books'>
                    <span> No results </span> 
                    <button onClick={this.clearQuery}>Clear Search</button>
                </div>}
                {query.length > 0 && results.length > 0 &&
                <div className='showing-books'>
                    <span>Now showing {results.length} books </span> 
                    <button onClick={this.clearQuery}>Clear Search</button>
                </div>}
              <ol className="books-grid">
                  
                  {query.length > 0 && results.length > 0 &&
                  results.map((book) => (
                    <li key={book.id}> 
                        <div className="book">
                        <div className="book-top">
                            {'imageLinks' in book &&
                            <div className="book-cover" style={{width: 128, height: 193,
                            backgroundImage: `url(${book.imageLinks['thumbnail']})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover'
                            }}></div>} 
                         <div className="book-shelf-changer">
                              <select value={this.state.value} onChange={(event) => this.handleChange(book, event)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title"> {book.title} </div>
                          {'authors' in book && 
                          <div className="book-authors"> 
                            {book.authors.join(', ')} 
                          </div>}                              
                        </div>
                    </li>))}
                    </ol>
                </div>
            </div> 
          </div>
        )                     
}}

export default ListBooks