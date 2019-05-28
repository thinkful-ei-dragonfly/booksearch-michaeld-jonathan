import React from "react";

class SearchForm extends React.Component {
  render() {
    return (
      <form>
        <p>
          Search: <input type="text" />
          <button type="submit">Submit</button>
        </p>
      </form>
    );
  }
}

export default SearchForm;
