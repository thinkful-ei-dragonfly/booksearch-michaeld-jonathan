import React from "react";

class SearchForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.fetchBooks(e.target.searchTerm.value);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          Search: <input type="text" id="searchTerm" />
          <button type="submit">Submit</button>
        </p>
      </form>
    );
  }
}

export default SearchForm;
