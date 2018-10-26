import React from 'react'
import { Switch, Route } from 'react-router-dom'

import SearchBooksPage from './components/SearchBooksPage';
import MainPage from './components/MainPage';
import BookShelf from './components/BookShelf';
import Provider, { MyContext } from './Provider/';
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
      </div>
  );
  }
}


export default BooksApp;
