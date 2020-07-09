import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'

class ShelveBooks extends Component {
    state = {
        books: [],
        reload: false
    }
    sortBooks = (section) => {
        const allBooks = this.state.books
        return(allBooks.filter((b) => (
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
                  <select value={item.shelf} onChange={(event) => 
                    this.handleChange(item, event)}>
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
            // return(all)
        })}
    handleChange = (book, event) => {
        console.log('book', book)
        console.log('event', event.target.value)
        BooksAPI.update(book, event.target.value)
        this.getAllBooks()
        // this.sortBooks()
        // window.location.reload(false)
        // this.setState({reload: true})
    }    
    componentDidMount() {
        this.getAllBooks()
    }
    render(){
        const shelves = ['currentlyReading', 'wantToRead', 'read']
        // const headings = ['Currently Reading']
    return (     
        (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                    {/* {shelves.map((shelf)=>{
                        console.log(shelf)
                    })} */}
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
                <Link to='/search'className="open-search">Add Book</Link>
              </div>
            </div>
          )
    )
}}
export default ShelveBooks