import Book from "./Book";

const BookList = (props) => {
  return (
    <>
   {   console.log(props)}
      <Book bookDetails={props.booksData[0]} />
    </>
  );
};

export default BookList;
