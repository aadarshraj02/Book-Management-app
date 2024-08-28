import BookList from "./components/BookList";
import { Books } from "./utils/mockData";
import "./index.css";

const App = () => {
  return (
    <div>
      <div className="search">
        <h2 className="search-header">Search Books</h2>
        <input type="text" className="search-input" />
        <button className="search-btn">Search</button>
      </div>
      <BookList booksData={Books} />
    </div>
  );
};

export default App;
