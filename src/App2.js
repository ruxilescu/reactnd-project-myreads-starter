import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelf from './components/BookShelf'
import Search from '../components/SearchBooksPage'
import './App.css'
 
class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: true
  }
 
  updateSearchState = (searchState) => {
    this.setState((state) => ({
      showSearchPage: searchState
    }))
    this.getBooks()
  }
 
  componentDidMount() {
    this.getBooks()
  }
 
  getBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
 
  updateShelf = (bookId, shelf) => {
    BooksAPI.update(bookId, shelf).then((res) => {
      this.getBooks()
    })
  }
 
 
  render() {
    console.log(this.state)
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search updateSearchState={this.updateSearchState} 
          onUpdateShelf={this.updateShelf}/>
        ) : (
            <div>
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <Shelf title="Currently Reading"
                    books={this.state.books.filter((book) => (book.shelf == "currentlyReading"))}
                    onUpdateShelf={this.updateShelf} />
                  <Shelf title="Read"
                    books={this.state.books.filter((book) => (book.shelf == "read"))}
                    onUpdateShelf={this.updateShelf} />
                  <Shelf title="Want to Read"
                    books={this.state.books.filter((book) => (book.shelf == "wantToRead"))}
                    onUpdateShelf={this.updateShelf} />
                </div>
              </div>
              <div className="open-search">
                <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
              </div>
            </div>
          )}
      </div>
    )
  }
}
 
export default BooksApp
