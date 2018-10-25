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


// Removed from App.js


         <div className="bookshelf">
         <h2 className="bookshelf-title">{nameOfShelf[0]}</h2>
         <div className="bookshelf-books">
         <ol className="books-grid">
         {this.state.books.map((book) => {
            book.shelf === nameOfShelf[0] && 
            <li key={book.id}>
            
     