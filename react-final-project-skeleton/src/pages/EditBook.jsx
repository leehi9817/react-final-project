import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useBookContext } from "../context/BookContext";
import Loading from "../components/Loading";
import BookForm from "../components/BookForm";

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useBookContext();
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const response = await fetch(`http://localhost:3000/books/${id}`);
      if (response.ok) {
        const data = await response.json();
        setBookData(data);
      }
    };
    fetchBook();
  }, [id]);

  const handleUpdateBook = async (updatedBook) => {};

  if (!bookData) {
    return <Loading />;
  }

  return (
    <div>
      <h1>Edit Book</h1>
      <BookForm initialData={bookData} onSubmit={handleUpdateBook} />
    </div>
  );
};

export default EditBook;
