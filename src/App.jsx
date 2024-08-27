import BookList from "./components/BookList";
import { Books } from "./utils/mockData";

const App = () => {
  return (
    <div>
      <BookList booksData={Books} />
    </div>
  );
};

export default App;
