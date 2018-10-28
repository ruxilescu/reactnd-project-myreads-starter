import React from 'react';
import { update } from '../BooksAPI'



class Book extends React.Component {

    handleChange = async event => {
        try {
            const shelf = event.target.value;
            const book = this.props;
            const updateBookShelf = await update(book, shelf);
            this.props.moveBook(book, shelf, updateBookShelf);  // TODO moveBook can be undefined
        } catch(error) {
            console.log(error);
        }
    };

    render() {
        const { imageLinks, shelf, authors, title } = this.props;
        return(
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193,
                            backgroundImage: `url(${imageLinks && imageLinks.thumbnail})`
                        }} />

                        <div className="book-shelf-changer">
                            <select onChange={this.handleChange} value={shelf} >
                                <option value="move" disabled>
                                    Move to...
                                </option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>

                    <div className="book-title">{title}</div>
                    <div className="book-authors">{authors ? authors[0] : "No Author"}</div>
                </div>
            </li>

        );
    }
}
export default Book;
