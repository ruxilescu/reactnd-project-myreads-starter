import React from 'react';

export const MyContext = React.createContext();


class Provider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            currentlyReading: [],
            wantToRead:[],
            read:[],
            addBooks: books => {
                const currentlyReading = books.filter(book => book.shelf === "currentlyReading");
                const wantToRead = books.filter(book => book.shelf === "wantToRead");
                const read = books.filter(book => book.shelf === "read");
                this.setState({books, currentlyReading, wantToRead, read});
            },
            moveBook: (book, newShelf, allShelves) => {
                let updatedBooks;
                if (newShelf === "none") { // we remove the book
                    updatedBooks = this.state.books.filter(updatedBook => updatedBook.id !== book.id);
                } else { // else normal move operation
                    updatedBooks = this.state.books.map(updatedBook => {
                        const foundID = allShelves[newShelf].find(bookID => bookID === updatedBook.id);
                        if(foundID) {
                            updatedBook.shelf = newShelf;
                        }
                        return updatedBook;
                    });
                }
                this.state.addBooks(updatedBooks);
            }
        };
    }

    render()  {
        return (
            <MyContext.Provider value={{...this.state}}>
                {this.props.children}
            </MyContext.Provider>)
    }
}

export default Provider;
