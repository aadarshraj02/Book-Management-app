import BookList from "./components/BookList";
import { Books } from "./utils/mockData";

const App = () => {
  return (
    <div>
      <div>
        <h2>Search Books</h2>
        <input type="text" />
        <button>Search</button>
      </div>
      <BookList booksData={Books} />
    </div>
  );
};

export default App;
