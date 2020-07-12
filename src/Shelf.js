import React, { Component } from 'react'
// import { handleChange } from './ShelveBooks'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'

class Shelf extends Component {
    // static propTypes = {
    //     books: PropTypes.array.isRequired,
    //     section: PropTypes.string.isRequired
    // }
    state = {
        books: []
    }
    getAllBooks = () => {
        console.log('fetching')
        BooksAPI.getAll().then((all)=>{
            console.log('These are ', all)
            this.setState({books: all})})}
    handleChange = (book, event) => {
        BooksAPI.update(book, event.target.value).then(BooksAPI.getAll)
    }    
    componentDidMount() {
        this.getAllBooks()
    }
    render(){
        const { all } = this.state
        const section = this.props.section
        console.log(all)
        return('working')
    // return(all.filter((b) => (
    //     b.shelf.includes(section)
    // )).map((item)=>(
    //     <li key={item.id}>
    //         <div className="book">
    //     <div className="book-top">
    //         {'imageLinks' in item &&
    //         <div className="book-cover" 
    //             style={{width: 128, height: 193,
    //             backgroundImage: `url(${item.imageLinks['thumbnail']})`,
    //             backgroundRepeat: 'no-repeat',
    //             backgroundPosition: 'center',
    //             backgroundSize: 'cover'
    //             }}></div>} 
    //      <div className="book-shelf-changer">
    //           <select onChange={(event) => 
    //             this.handleChange(item, event)}>
    //             <option value="">Move to...</option>
    //             <option value="currentlyReading">Currently Reading</option>
    //             <option value="wantToRead">Want to Read</option>
    //             <option value="read">Read</option>
    //             <option value="none">None</option>
    //           </select>
    //         </div>
    //       </div>
    //       <div className="book-title"> {item.title} </div>
    //       {'authors' in item && 
    //       <div className="book-authors"> 
    //         {item.authors.join(', ')} 
    //       </div>}                              
    //     </div>   
    //     </li>
    // )))
}}
export default Shelf