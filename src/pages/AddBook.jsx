// Form for adding a new book to the library.
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewBook } from "../store/booksSlice";
import { bookCategories } from "../data/books";

const emptyForm = {
  title: "",
  author: "",
  description: "",
  rating: "",
  category: "",
};

// Pulled out of the component so it's easy to unit test in isolation
// and so handleSubmit doesn't get cluttered with validation rules.
function validateForm(formData) {
  const errors = {};

  if (!formData.title.trim()) errors.title = "Title is required!";
  if (!formData.author.trim()) errors.author = "Author is required!";
  if (!formData.description.trim()) errors.description = "Description is required!";
  if (!formData.category) errors.category = "Category is required!";

  if (!formData.rating) {
    errors.rating = "Rating is required!";
  } else if (formData.rating < 1 || formData.rating > 5) {
    errors.rating = "Rating must be between 1 and 5!";
  }

  return errors;
}

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear that field's error as soon as the user edits it again.
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newBook = {
      id: Date.now(),
      title: formData.title.trim(),
      author: formData.author.trim(),
      description: formData.description.trim(),
      rating: parseFloat(formData.rating),
      category: formData.category,
    };

    // addNewBook unshifts the book, so it shows up first on Browse Books.
    dispatch(addNewBook(newBook));
    navigate("/books");
  };

  return (
    <div className="add-book">
      <h1>Add New Book 📝</h1>

      <form className="add-book-form" onSubmit={handleSubmit}>
        {/* Title field */}
        <div className="form-group">
          <label>Book Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter book title"
            value={formData.title}
            onChange={handleChange}
          />
          {errors.title && <span className="error">{errors.title}</span>}
        </div>

        {/* Author field */}
        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            name="author"
            placeholder="Enter author name"
            value={formData.author}
            onChange={handleChange}
          />
          {errors.author && <span className="error">{errors.author}</span>}
        </div>

        {/* Description field */}
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            placeholder="Enter book description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
          />
          {errors.description && <span className="error">{errors.description}</span>}
        </div>

        {/* Category field */}
        <div className="form-group">
          <label>Category</label>
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="">Select a category</option>
            {bookCategories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          {errors.category && <span className="error">{errors.category}</span>}
        </div>

        {/* Rating field */}
        <div className="form-group">
          <label>Rating (1-5)</label>
          <input
            type="number"
            name="rating"
            placeholder="Enter rating (1-5)"
            value={formData.rating}
            onChange={handleChange}
            min="1"
            max="5"
            step="0.1"
          />
          {errors.rating && <span className="error">{errors.rating}</span>}
        </div>

        <button type="submit" className="btn-primary">
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;
