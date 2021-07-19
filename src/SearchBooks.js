import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book'

class ListBooks extends Component {
    state = {
        query: '',
        search: [],
        books: [],
        shelved: this.props.location.state.shelvedBooks
    }
    getAllBooks = () => {
        BooksAPI.getAll().then((all) => {
            this.setState({
                books: all
            })
        })
    }
    updateQuery = (event) => {
        if (event.target.value !== '') {
            this.setState({
                query: event.target.value
            }, this.searchAPI)
        } else {
            this.setState({
                query: ''
            })
        }
    }
    clearQuery = () => {
        this.setState({
            query: '',
            search: []
        })
    }
    searchAPI = () => {
        const query = this.state.query
        BooksAPI.search(query).then((search) => {
            this.setState({
                search: search
            })
        })
    }
    format(word) {
        const caps = word.charAt(0).toUpperCase() +
            word.slice(1)
        const formatted = caps.split(/(?=[A-Z])/).join(' ')
        return (formatted)
    }
    handleChange(book, event) {
        BooksAPI.update(book, event.target.value)
        const shelfName = this.format(event.target.value)
        alert(`Moving ${book.title} to ${shelfName}`)
    }
    render() {
        const {
            query
        } = this.state
        const {
            search
        } = this.state
        const allBooks = this.state.books
        let results = search === [] ?
            allBooks :
            search
        return (
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
                    results.map((item) => (
                        <Book 
                        key={item.id}
                        info={item}
                        shelvedBooks={this.state.shelved}
                        onChange={(item, event)=>{
                            this.handleChange(item, event)}}/>
                    ))}
                    </ol>
                </div>
            </div> 
          </div>
        )
    }
}

export default ListBooks