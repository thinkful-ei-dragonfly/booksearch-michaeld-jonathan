import React from "react";

class FilterMenu extends React.Component {
  render() {
    return (
      <div id="filter-div">
        <p className="filter-menu">
          Print Type:
          <select
            type="text"
            id="print-type"
            onChange={(e) => this.props.byPrintType(e.target.value)}
          >
            <option selected value="no-filter">
              All
            </option>
            <option value="epub">E Pub</option>
            <option value="PDF">PDF</option>
          </select>
        </p>

        <p className="filter-menu">
          Sale Type:
          <select
            type="text"
            id="sale-type"
            onChange={(e) => this.props.bySaleType(e.target.value)}
          >
            <option selected value="no-filter">
              All
            </option>
            <option value="not-for-sale">Not For Sale</option>
            <option value="for-sale">For Sale</option>
          </select>
        </p>
      </div>
    );
  }
}

export default FilterMenu;
