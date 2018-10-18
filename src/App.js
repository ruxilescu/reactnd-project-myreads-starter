import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksApp from './App.js'
import SearchPage from '../SearchPage'



class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
      books: []
  }
componentDidMount() {
    BooksAPI.getAll().then((books) => {
         console.log(books);
        this.setState({books})
    })
  
}

  render() {
      
      let booksValue = false;
      const{books} = this.state.books
      if(books !== undefined && books !== null && books.length > 0) {
          booksValue = true
      }
      
      let nameOfShelves = [
                        "currentlyReading", 
                        "wantToRead", 
                        "read"  
                        ]
      
    return (  
      <div className="app">
        {this.state.showSearchPage ? (
  
   <SearchPage/>
       

 
        ) : (
            
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            
             <div className="list-books-content">
              <div>
                
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{shelfTitle}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
           
            
            { books.map((book, index) => (
        (book.shelf === nameOfShelves[0]) && (<li key={book.id}>
                                              
        
            
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
            
                            <div className="book-shelf-changer">
            
                              <select>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
            
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
))                  
            
                      </ol>
                      </div>
                      </div>


<div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
           
            
            {books.map((book, index) => (
        (book.shelf === nameOfShelves[1]) && (<li key={index}>
        
            
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
            
                            <div className="book-shelf-changer">
            
                              <select>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
            
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
        
        ))                  
            }
                      </ol>
                      </div>
                      </div>


<div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
           
            
            {books.map((book, index) => (
        (book.shelf === shelves[2]) && (<li key={index}>
        
            
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
            
                            <div className="book-shelf-changer">
            
                              <select>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
            
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li> 
))
}
           
                      </ol>

                      </div>
                      </div>
                      </div>
                      </div>


            
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
         
            
        )}}
  
export default BooksApp;
