import React from 'react'
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI'
import Book from '././Book';
import {search} from  '../BooksAPI'
import {getAll} from  '../BooksAPI'

class SearchBooksPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            books:[]  
        };
    }
    
    async componentDidMount() {
    try {
        
        const books = await getAll();
        this.props.addBooks(books);
    } catch(error) {
        console.log(error);
        }
      }

 
    
    handleChange = async event => {
       try {
           const query = event.target.value;
            this.setState({query});
           
           if(query.trim()) {
          
           const outcome =await search(query);
           if(outcome.error) {
            this.setState({ books:[] });
           } 
               else {
                   
            this.setState({books: outcome});  
           }
        } else {
            this.setState({books: [] })
        }
          
       } catch(error) {
         console.log(error);  
       }
    };

    render() {  
        return(
    <div>
        
        <div className="search-books">
          <div className="search-books-bar">
            <Link 
            className="close-search" 
            to="/"
            >
            Close
            </Link>
 
            <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={this.handleChange} value={this.state.query} />

          </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
            
            {this.state.books.length > 0 && 
            this.state.books.map(book => {
            const newShelf = this.props.books.find(
            searchBook => searchBook.id === book.id
        );
        
       if(newShelf) {
           book.shelf =newShelf.shelf;
       } else {
           book.shelf = "none";
       }
       
       
        return  (
        <Book
         key={book.id} 
         {...book} 
         moveBook={this.props.moveBooks}
            /> 
        );
            
            })}
            {this.state.books.length === 0 && (
            <h2 style={{textAlign: "center"}}>no results found</h2>
)}
            </ol>
          </div>
        </div>
}

</div>
);
}
}

export default SearchBooksPage;