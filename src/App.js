// 116268196204715506066
import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SearchForm from "./components/SearchForm/SearchForm";
import FilterMenu from "./components/FilterMenu/FilterMenu";
import BookList from "./components/BookList/BookList";

class App extends React.Component {

  APIkey = 'AIzaSyBdSdlBrQbrWuVbMNVelxvBZpMMiF5eRpg';

  state = {
    books: [],
    
  }

  fetchBooks = searchTerm  => {
    // fetch(URL)
  }



  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <SearchForm />
          <FilterMenu />
          <BookList />
        </main>
      </div>
    );
  }
}

export default App;
