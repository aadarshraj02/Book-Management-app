import BookList from "./components/BookList";
import { Books } from "./utils/mockData";
import "../src/components/style.css";

const App = () => {
  const handleSearch = () => {};

  return (
    <div>
      <div className="search">
        <h2 className="search-header">Search Books</h2>
        <input
          type="text"
          className="search-input"
          onChange={() => handleSearch()}
        />
        <button className="search-btn">Search</button>
      </div>
      <BookList booksData={Books} />
    </div>
  );
};

export default App;
