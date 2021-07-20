import React from 'react'
import BookType from '../types/Book';
import { useState } from 'react';
import Cover from './Cover';

const Book = (props: {info: BookType, onChange: Function}) => {
    const { info } = props;
    const [shelf, setShelf] = useState(info.shelf);

    return (
        <div className='book'>
            <div className='book-top'>
                <Cover {...info.imageLinks} />
            </div>
            <div 
                // TODO: Fix issue with position: absolute CSS
                // className="book-shelf-changer"
            >
                <select value={shelf || 'none'}
                    onChange={(event) => {
                        setShelf(event.target.value);
                        props.onChange(info, event.target.value);
                    }}>
                    <option value="" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
            <div className="book-title"> {info.title} </div>
            {'authors' in info &&
                <div className="book-authors">
                    {info.authors.join(', ')}
                </div>
            }
        </div>

    )
}
export default Book;