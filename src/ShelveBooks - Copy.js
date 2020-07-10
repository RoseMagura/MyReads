import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'

class ShelveBooks extends Component {
    state = {
        books: [],
    }
    displayBook(book){
        console.log(book.title)
        return <li>{book.title}</li> 
    }
    sortBooks = () => {
        // console.log('sort')
        const shelves = ['currentlyReading', 'wantToRead', 'read']
        const allBooks = this.state.books
        // const inShelf = shelves.map((section) => {allBooks.filter((b) => (
        //     (b.shelf === section)))})
        const inShelf = allBooks[0]['id']
        const book = this.state.books[0]
        console.log(book.id === inShelf)
        book.id === inShelf && this.displayBook(book)
         
        }
        // return(
            
           
        //     <li key={b.id}>
        //         <div className="book">
        //     <div className="book-top">
        //         {'imageLinks' in b &&
        //         <div className="book-cover" 
        //             style={{width: 128, height: 193,
        //             backgroundImage: `url(${b.imageLinks['thumbnail']})`,
        //             backgroundRepeat: 'no-repeat',
        //             backgroundPosition: 'center',
        //             backgroundSize: 'cover'
        //             }}></div>} 
        //      <div className="book-shelf-changer">
        //           <select value={b.shelf} onChange={(event) => 
        //             this.handleChange(b, event)}>
        //             <option value="move" disabled>Move to...</option>
        //             <option value="currentlyReading">Currently Reading</option>
        //             <option value="wantToRead">Want to Read</option>
        //             <option value="read">Read</option>
        //             <option value="none">None</option>
        //           </select>
        //         </div>
        //       </div>
        //       <div className="book-title"> {b.title} </div>
        //       {'authors' in b && 
        //       <div className="book-authors"> 
        //         {b.authors.join(', ')} 
        //       </div>}                              
        //     </div>   
        //     </li>
        
        // )
        // )
    // })})}
    getAllBooks = () => {
        BooksAPI.getAll().then((all)=>{
            this.setState({books: all}, this.sortBooks)
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
        // const shelves = ['currentlyReading', 'wantToRead', 'read']
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
                      {/* {this.sortBooks()} */}
                      </ol>
                    </div>
                  </div>

                  {/* <div className="bookshelf">
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
                  </div> */}

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