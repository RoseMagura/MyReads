import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class ShelveBooks extends Component {
    state = {
        books: []
    }
    sortBooks = (section) => {
        this.getAllBooks()
        const allBooks = this.state.books
        return(allBooks.filter((b) => (
            b.shelf.includes(section)
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
        )))
    }
    getAllBooks = () => {
        BooksAPI.getAll().then((all)=>{
            this.setState({books: all})
        })}
    handleChange = (book, event) => {
        console.log('book', book)
        console.log('event', event.target.value)
        BooksAPI.update(book, event.target.value)
    }    
    render(){
        this.getAllBooks()
        const allBooks = this.state.books
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
                      {this.sortBooks('currentlyReading')}
                      </ol>
                    </div>
                  </div>

                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                      {this.sortBooks('wantToRead')}
                      </ol>
                    </div>
                  </div>

                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                      {this.sortBooks('read')}
                      </ol>
                    </div>
                  </div>

                </div>
              </div>
              <div className="open-search">
                <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
              </div>
            </div>
          )
    )
}}
export default ShelveBooks