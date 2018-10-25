import React, { Component} from 'react';
import { Link } from 'react-router-dom'
//import * as BooksAPI from './BooksAPI'
import BookShelf from '../components/BookShelf'
import FAB from '../components/FAB'
import {getAll} from  '../BooksAPI'

class MainPage extends React.Component {

     async componentDidMount() {
    try {
        
        const books = await getAll();
        this.props.addBooks(books);
    } catch(error) {
        console.log(error);
        }
}
 
    
render() {
    return (
          <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
        
      <div className="list-books-content">
        
    <BookShelf title="Currently Reading" books={this.props.currentlyReading} moveBook={this.props.moveBook}/>
    <BookShelf title="Want To read" books={this.props.wantToRead} moveBook={this.props.moveBook} />
    <BookShelf title="Read" books={this.props.read} moveBook={this.props.moveBook} />
        
      </div>
      <FAB />  
      </div>
        );
  }
}


export default MainPage;