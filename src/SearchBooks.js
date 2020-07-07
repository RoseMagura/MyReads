import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI' //remove later?
// import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

class ListBooks extends Component {
    state = {
        query: '',
        search: [],
        books: []
    }
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
    getAllBooks = () => {
        const allBooks = BooksAPI.getAll().then((all)=>{
            this.setState({books: all})
        })
    }
    searchAPI = () => {
        const query = this.state.query
        BooksAPI.search(query).then((search)=> 
            {this.setState({search: search})})
    }
    handleChange(book, event) {
        console.log('book', book)
        console.log('event', event.target.value)
        BooksAPI.update(book, event.target.value)
    }
    render() {
        const { query } = this.state
        const { search } = this.state
        this.getAllBooks()
        const allBooks = this.state.books
        // console.log(allBooks)
        let results = search === []
            ? allBooks
            : search
       return(
        <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                <input type="text" 
                    placeholder="Search by title or author"
                    value={query}
                    onChange={(event)=> this.updateQuery(event)}/>
              </div>
            </div>
            <div className="search-books-results">
                {query.length > 0 && results.length > 0 &&
                <div className='showing-books'>
                    <span>Now showing {results.length} books</span> 
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
        ) : (
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
                    {allBooks.filter((b) => (
                        b.shelf.includes('currentlyReading')
                    )).map((item)=>(
                        <li key={item.id}>
                             {item.title}   
                        </li>
                    ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {allBooks.filter((b) => (
                        b.shelf.includes('wantToRead')
                    )).map((item)=>(
                        <li key={item.id}>
                             {item.title}   
                        </li>
                    ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {allBooks.filter((b) => (
                        b.shelf.includes('read')
                    )).map((item)=>(
                        <li key={item.id}>
                            <div className="book">
                        <div className="book-top">
                            {'imageLinks' in item &&
                            <div className="book-cover" style={{width: 128, height: 193,
                            backgroundImage: `url(${item.imageLinks['thumbnail']})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover'
                            }}></div>} 
                         <div className="book-shelf-changer">
                              <select value={this.state.value} onChange={(event) => this.handleChange(item, event)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title"> {item.title} </div>
                          {'authors' in item && 
                          <div className="book-authors"> 
                            {item.authors.join(', ')} 
                          </div>}                              
                        </div>   
                        </li>
                    ))}
                        
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>

       ) 
    }
}

export default ListBooks