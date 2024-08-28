import BookList from "./components/BookList";
import { Books } from "./utils/mockData";
import "../src/components/style.css";
import { useState } from "react";

const App = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {};

  return (
    <div>
      <div className="search">
        <h2 className="search-header">Search Books</h2>
        <input
          type="text"
          className="search-input"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
      <BookList booksData={Books} />
    </div>
  );
};

export default App;
