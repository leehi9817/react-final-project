import { Link } from "react-router-dom";
import { useBookContext } from "../context/BookContext";
import Loading from "./Loading";
import Error from "./Error";
import { renderStars, getBookEmoji } from "../utils";
import styles from "./BookList.module.css";

const BookList = () => {
  const { books, dispatch, loading, error } = useBookContext();

  if (loading) return <Loading />;
  if (error) return <Error />;

  return <section className={styles.list}></section>;
};

export default BookList;
