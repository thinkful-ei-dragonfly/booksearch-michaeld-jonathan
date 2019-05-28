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
    error: null
    
  }

  fetchBooks = searchTerm  => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${this.APIkey}`)
      .then(
        res => { 
          console.log(res)
          return res.ok ? res.json() : Promise.reject('Something went wrong')
        }
      )
      
      .then(
        res => {
        console.log(res)
        return res.items
      }
      )
      .then(
        books => {
        console.log(books)
        this.setState({books})
        console.log(this.state)
      }
      )
      
      .catch(error => this.setState({error}))
  }



  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <SearchForm fetchBooks={this.fetchBooks} />
          <FilterMenu />
          <BookList />
        </main>
      </div>
    );
  }
}

export default App;
