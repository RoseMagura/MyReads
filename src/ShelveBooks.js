import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'

class ShelveBooks extends Component {
    state = {
        books: []
    }
    sortBooks = (all, section) => {
        return(all.filter((b) => (
            b.shelf.includes(section)
        )).map((item)=>(
            <li key={item.id}>
                <div className="book">
            <div className="book-top">
                {'imageLinks' in item &&
                <div className="book-cover" 
                    style={{width: 128, height: 193,
                    backgroundImage: `url(${item.imageLinks['thumbnail']})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                    }}></div>} 
             <div className="book-shelf-changer">
                  <select onChange={(event) => 
                    this.handleChange(item, event)}>
                    <option value="">Move to...</option>
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
            this.setState({books: all})})}

    handleChange = (book, event) => {
        BooksAPI.update(book, event.target.value).then(this.getAllBooks)
    }    
    componentDidMount() {
        this.getAllBooks()
    }
    render(){
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
                      {this.sortBooks(this.state.books,'currentlyReading')}
                      </ol>
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                      {this.sortBooks(this.state.books, 'wantToRead')}
                      </ol>
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                      {this.sortBooks(this.state.books, 'read')}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <div className="open-search">
                <Link to='/search'className="open-search">Add Book</Link>
              </div>
            </div>
          )
    )
}}
export default ShelveBooks