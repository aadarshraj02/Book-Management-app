const Book = (props) => {
  return (
    <div>
      <img
        src={props.bookDetails.cover_image}
        alt=""
        width="200px"
        height="200px"
      />
      <div>
        <h2>{props.bookDetails.title}</h2>
        <p>{props.bookDetails.author}</p>
        <p>{props.bookDetails.description}</p>
      </div>
    </div>
  );
};

export default Book;
