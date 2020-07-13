import React, {Component} from 'react'

class Book extends Component {
    state = {
        shelf: ''
    }
    setShelf = () => {
        const shelvedBooks = this.props.shelvedBooks
        shelvedBooks.map((book)=>{
            this.props.info.id === book.id && 
            this.setState({shelf: book.shelf})
        })
    }
    componentDidMount(){
        this.props.shelvedBooks && this.setShelf()
    }
    render() {
        //get the book object from ShelveBooks
        const item = this.props.info
        return (
            <li key={item.id}>
                    <div className="book">
                    <div className="book-top">
                     {/* in case object doesn't include image, prevent
                     crashing*/}
                    {'imageLinks' in item &&
                    <div className="book-cover" 
                        style={{width: 128, height: 193,
                        backgroundImage: `url(${item.imageLinks['thumbnail']})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                        }}></div>} 
                    <div className="book-shelf-changer">
                    <select value={this.state.shelf || 'none'} 
                        onChange={(event) => 
                        this.props.onChange(item, event)}>
                        <option value="" disabled>Move to...</option>
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