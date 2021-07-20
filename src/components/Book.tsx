import React, { Component } from 'react'
import BookType, { FixMeLater } from '../types/Book';
import { useState, useEffect } from 'react';
import Cover from './Cover';

// class Book extends Component {
//     state = {
//         shelf: ''
//     }
//     setShelf() {
//         const { shelvedBooks } = this.props;
//         shelvedBooks.map((book) => {
//             this.props.info.id === book.id &&
//                 this.setState({ shelf: book.shelf })
//             return (book.shelf)
//         })
//     }
//     componentDidMount() {
//         this.props.shelvedBooks && this.setShelf()
//     }
//     render() {
//         //get the book object from ShelveBooks
//         const item: string = this.props.info
//         return (
//             <li key={item.id}>
//                 <div className="book">
//                     <div className="book-top">
//                         {/* in case object doesn't include image, prevent
//                      crashing*/}
//                         {'imageLinks' in item ?
//                             <div className="book-cover"
//                                 style={{
//                                     width: 128, height: 193,
//                                     backgroundImage: `url(${item.imageLinks['thumbnail']})`,
//                                     backgroundRepeat: 'no-repeat',
//                                     backgroundPosition: 'center',
//                                     backgroundSize: 'cover'
//                                 }}></div>
//                             : <div className="book-cover"
//                                 style={{
//                                     width: 128, height: 193,
//                                     backgroundImage: `url(http://via.placeholder.com/128x193?text=No%20Cover)`
//                                 }}></div>
//                         }
//                         <div className="book-shelf-changer">
//                             <select value={this.state.shelf || item.shelf || 'none'}
//                                 onChange={(event) => {
//                                     this.setState({ shelf: event.target.value })
//                                     this.props.onChange(item, event)
//                                 }}>
//                                 <option value="" disabled>Move to...</option>
//                                 <option value="currentlyReading">Currently Reading</option>
//                                 <option value="wantToRead">Want to Read</option>
//                                 <option value="read">Read</option>
//                                 <option value="none">None</option>
//                             </select>
//                         </div>
//                     </div>
//                     <div className="book-title"> {item.title} </div>
//                     {'authors' in item &&
//                         <div className="book-authors">
//                             {item.authors.join(', ')}
//                         </div>}
//                 </div>
//             </li>
//         )
//     }
// }

const Book = (props: FixMeLater) => {
    const { info } = props;
    const [shelf, setShelf] = useState(info.shelf);

    return (
        <div className='book'>
            <div className='book-top'>
                 <Cover {...info.imageLinks}/>
            </div>
            <h2>{info.title}</h2>
        </div>
    )
}
export default Book;