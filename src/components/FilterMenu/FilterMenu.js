import React from "react";

function FilterMenu(props) {


  if ()

  return (
    <div>
      <p className="filter-menu" id="print-type">
        Print Type:
        <select>
          <option selected value="All">
            All
          </option>
          <option value="epub">E Pub</option>
          <option value="PDF">PDF</option>
        </select>
      </p>

      <p className="filter-menu" id="book-type">
        Book type:
        <select>
          <option selected value="No Filter">
            No Filter
          </option>
          <option value="Filter">Filter</option>
          <option value="Different Filter">Different Filter</option>
        </select>
      </p>
    </div>
  );
}

export default FilterMenu;
