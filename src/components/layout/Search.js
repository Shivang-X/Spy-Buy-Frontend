import React, { useState } from "react";

const Search = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <form onSubmit={searchHandler}>
      <div class="search-container">
        <div class="searchInputWrapper">
          <input
            class="searchInput"
            type="text"
            placeholder="Search products"
            onChange={(event) => setKeyword(event.target.value)}
          />
            <i class="searchInputIcon fa fa-search"></i>
          {/* </input> */}
        </div>
      </div>
    </form>
  );
};

export default Search;
