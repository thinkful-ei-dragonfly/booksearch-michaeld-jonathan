import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SearchForm from "./components/SearchForm/SearchForm";
import FilterMenu from "./components/FilterMenu/FilterMenu";
import BookList from "./components/BookList/BookList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <SearchForm />
          {/* <FilterMenu />
          <BookList /> */}
        </main>
      </div>
    );
  }
}

export default App;
