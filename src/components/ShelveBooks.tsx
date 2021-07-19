import React, { Component } from 'react'
import * as BooksAPI from '../api/BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book'

// class ShelveBooks extends Component {
//   state = {
//     books: []
//   }
//   //Sort the books into the three shelves and update on change
//   sortBooks = (all, section) => {
//     return (all.filter((b) => (
//       b.shelf.includes(section)
//     )).map((item) => (
//       <Book
//         key={item.id}
//         info={item}
//         onChange={(item, event) => {
//           this.handleChange(item, event)
//         }} />
//     )))
//   }
//   //call to the API and set the state accordingly
//   getAllBooks = () => {
//     BooksAPI.getAll().then((all) => {
//       this.setState({
//         books: all
//       })
//     })
//   }

//   handleChange = (book, event) => {
//     BooksAPI.update(book, event.target.value).then(this.getAllBooks)
//   }
//   componentDidMount() {
//     this.getAllBooks()
//   }
//   render() {
//     return (
//       (
//         <div className="list-books">
//           <div className="list-books-title">
//             <h1>MyReads</h1>
//           </div>
//           <div className="list-books-content">
//             <div>
//               <div className="bookshelf">
//                 <h2 className="bookshelf-title">Currently Reading</h2>
//                 <div className="bookshelf-books">
//                   <ol className="books-grid">
//                     {this.sortBooks(this.state.books, 'currentlyReading')}
//                   </ol>
//                 </div>
//               </div>
//               <div className="bookshelf">
//                 <h2 className="bookshelf-title">Want to Read</h2>
//                 <div className="bookshelf-books">
//                   <ol className="books-grid">
//                     {this.sortBooks(this.state.books, 'wantToRead')}
//                   </ol>
//                 </div>
//               </div>
//               <div className="bookshelf">
//                 <h2 className="bookshelf-title">Read</h2>
//                 <div className="bookshelf-books">
//                   <ol className="books-grid">
//                     {this.sortBooks(this.state.books, 'read')}
//                   </ol>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="open-search">
//             <Link to={{
//               pathname: '/search',
//               state: {
//                 shelvedBooks: this.state.books
//               }
//             }}
//               className="open-search">Add Book</Link>
//           </div>
//         </div>
//       )
//     )
//   }
// }

const ShelveBooks = () => {
  return(
    <div>
      <h1>Book Shelf</h1>
    </div>
  )
}
export default ShelveBooks