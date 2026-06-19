// Reusable card used both on the Home page (popular books) and the
// Browse page (full/filtered list), so the markup only lives in one place.
import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div className="book-card">
      <div className="book-cover">📖</div>
      <h3>{book.title}</h3>
      <p className="author">by {book.author}</p>
      <p className="category-tag">{book.category}</p>
      <p className="rating">⭐ {book.rating}</p>
      <Link to={`/books/${book.category}/${book.id}`} className="btn-details">
        View Details
      </Link>
    </div>
  );
}

export default BookCard;
