const Book = (props) => {
  return (
    <div>
      <img src={props.cover_image} alt="" width="200px" height="200px" />
      <div>
        <h2>{props.title}</h2>
        <p>{props.author}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Book;
