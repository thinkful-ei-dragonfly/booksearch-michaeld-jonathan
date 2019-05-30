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
    error: null,
    displayBooks: []
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
        this.setState({books,displayBooks:books})
        console.log(this.state)
      }
      )
      
      .catch(error => this.setState({error}))
  }

  byPrintType = printType => {
    console.log(printType)
    const filteredBooks = this.state.books.filter(book => {
      if (printType === 'epub') {
        return book.accessInfo.epub.isAvailable
      } else if (printType === 'PDF') {
        return book.accessInfo.pdf.isAvailable
      } else {
        return book
      }
    })
    this.setState({ displayBooks:filteredBooks })
    console.log(filteredBooks)
  }

  bySaleType = saleType => {
    console.log(saleType)
    const filteredBooks = this.state.books.filter(book => {
      if (saleType === 'not-for-sale') {
        return (book.saleInfo.saleability === "NOT_FOR_SALE") 
      } else if (saleType === 'for-sale') {
        return (book.saleInfo.saleability === "FOR_SALE")
      } else {
        return book 
      }
    })
    this.setState({ diplaybooks:filteredBooks })
    console.log(filteredBooks)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <SearchForm fetchBooks={this.fetchBooks} />
          <FilterMenu byPrintType={this.byPrintType} bySaleType={this.bySaleType} />
          <BookList books={this.state.displayBooks} />
        </main>
      </div>
    );
  }
}

export default App;
