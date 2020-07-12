import React, { Component } from 'react'

class Book extends Component{
    render() {
        const item = this.props.info
        return (
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
                    this.props.onChange(item, event)}>
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
        )
    }
}
export default Book