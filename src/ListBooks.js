import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'
import { Link } from 'react-router-dom'

class ListBooks extends Component {
    // state = {
    //     books: []
    // }
    // getAllBooks = () => {
    //     BooksAPI.getAll().then((all)=>{
    //         this.setState({books: all})})}

    // handleChange = (book, event) => {
    //     BooksAPI.update(book, event.target.value).then(this.getAllBooks)
    // }    
    // componentDidMount() {
    //     this.getAllBooks()
    // }
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
                            <Shelf 
                            section='currentlyReading'/>
                      </ol>
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                      <Shelf 
                      section='wantToRead'
                      />
                      </ol>
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                      <Shelf 
                      section='read'/>
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
export default ListBooks