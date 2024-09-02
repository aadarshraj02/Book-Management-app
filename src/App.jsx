import BookList from "./components/BookList";
import { Books } from "./utils/mockData";
import "../src/components/style.css";
import { useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredBook, setFilteredBook] = useState(Books);

  const handleSearch = () => {
    const filterBooks = Books.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredBook(filterBooks);
  };

  return (
    <div>
      <Header />
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
      <BookList booksData={filteredBook} />
    </div>
  );
};

export default App;
