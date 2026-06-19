// Lists every book, with optional category filtering (from the URL)
// and a free-text search box (matches title or author).
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { bookCategories } from "../data/books";
import BookCard from "../components/BookCard";

function BrowseBooks() {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState("");

  const books = useSelector((state) => state.library.items);

  const visibleBooks = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return books.filter((book) => {
      const matchesCategory = !category || book.category === category;
      const matchesSearch =
        !term ||
        book.title.toLowerCase().includes(term) ||
        book.author.toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });
  }, [books, category, searchTerm]);

  return (
    <div className="browse">
      <h1>Browse Books 📚</h1>

      <div className="category-filters">
        <Link to="/books" className={`filter-btn ${!category ? "active" : ""}`}>
          All
        </Link>
        {bookCategories.map((cat) => (
          <Link
            key={cat}
            to={`/books/${cat}`}
            className={`filter-btn ${category === cat ? "active" : ""}`}
          >
            {cat}
          </Link>
        ))}
      </div>

      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <div className="books-grid">
        {visibleBooks.length === 0 ? (
          <p className="no-books">No books found! 😔</p>
        ) : (
          visibleBooks.map((book) => <BookCard key={book.id} book={book} />)
        )}
      </div>
    </div>
  );
}

export default BrowseBooks;
