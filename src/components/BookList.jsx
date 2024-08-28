import Book from "./Book";
import "./style.css";

const BookList = (props) => {
  return (
    <div className="book-list">
      {console.log(props)}
      {props.booksData.map((data) => (
        <Book bookDetails={data} key={data.id} />
      ))}
    </div>
  );
};

export default BookList;
