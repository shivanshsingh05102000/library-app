// Full detail view for a single book, reached via /books/:category/:id
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();
  const books = useSelector((state) => state.library.items);
  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return (
      <div className="not-found-book">
        <h2>Book not found! 😔</h2>
        <Link to="/books" className="btn-primary">Back to Browse</Link>
      </div>
    );
  }

  return (
    <div className="book-details">
      <div className="details-cover">📖</div>

      <div className="details-info">
        <h1>{book.title}</h1>
        <p className="details-author">✍️ Author: {book.author}</p>
        <p className="details-category">🏷️ Category: {book.category}</p>
        <p className="details-rating">⭐ Rating: {book.rating} / 5</p>
        <p className="details-description">{book.description}</p>

        <Link to="/books" className="btn-primary">
          ← Back to Browse
        </Link>
      </div>
    </div>
  );
}

export default BookDetails;
