import { useNavigate } from "react-router-dom";
import { useBookContext } from "../contexts/BookContext";
import BookForm from "../components/BookForm";

const AddBook = () => {
  const navigate = useNavigate();
  const { dispatch } = useBookContext();

  const handleAddBook = async (newBook) => {};

  return (
    <div>
      <h1>Add New Book</h1>
      <BookForm onSubmit={handleAddBook} />
    </div>
  );
};

export default AddBook;
