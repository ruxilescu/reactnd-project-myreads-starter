import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import SearchBooksPage from './components/SearchBooksPage';
import MainPage from './components/MainPage';
import BookShelf from './components/BookShelf';
import Provider, { MyContext } from './components/Provider';
import './App.css';

class BooksApp extends React.Component {
       
      render() {
        return (
            
  
  <div className="app">
          <Provider>
          <Switch>
      
            <Route
              exact path="/"
              render={() => (
                <MyContext.Consumer>
                  {context => <MainPage {...context} />}
                </MyContext.Consumer>
              )}
            />
            <Route
              exact
              path="/search"
              exact
              render={() => (
                <MyContext.Consumer>
                  {context => <SearchBooksPage {...context} />}
                </MyContext.Consumer>
              )}
            />
      </Switch>
      </Provider>

<div className="open-search">
        <Link to="/search">
        Add a book
        </Link>
      </div> 
      </div>

  );
  }
}

export default BooksApp;
