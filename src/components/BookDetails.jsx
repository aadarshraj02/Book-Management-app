import { useParams } from "react-router-dom";

const BookDetails = () => {
  const params = useParams();

  return <div>{`Book Details for Book with ID ${params.id}`}</div>;
};

export default BookDetails;
