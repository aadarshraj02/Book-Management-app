import "./style.css";

const Book = (props) => {
  return (
    <div className="book-card">
      <img
        src={props.bookDetails.cover_image}
        alt=""
        width="200px"
        height="200px"
        className="book-cover"
      />
      <div>
        <h2 className="book-title">{props.bookDetails.title}</h2>
        <p className="book-author">{props.bookDetails.author}</p>
        <p className="book-description">{props.bookDetails.description}</p>
      </div>
    </div>
  );
};

export default Book;
