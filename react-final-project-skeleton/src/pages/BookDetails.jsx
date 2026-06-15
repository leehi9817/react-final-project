import BookDetail from "../components/BookDetail";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Book Details</h1>
      <BookDetail bookId={id} />
    </div>
  );
};

export default BookDetails;
