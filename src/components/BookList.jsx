import Book from "./Book";

const BookList = (props) => {
  return (
    <>
      {console.log(props)}
      {props.booksData.map((data) => (
        <Book bookDetails={data} key={data.id} />
      ))}
    </>
  );
};

export default BookList;
