import React from 'react'
import SearchBooks from './SearchBooks'
import ShelveBooks from './ShelveBooks'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  state = {
  }
  componentDidMount(){
      BooksAPI.getAll()
          .then((books)=>{
            this.setState(()=> ({
                books
            }))
          } 
      
          )}       
  render() {
    return (
        <div>
            <Route exact path='/' render={() => (
            <ShelveBooks/>
            )}/>
            <Route path='/search' component={SearchBooks}/>
            
        </div>

    )
  }
}

export default BooksApp
