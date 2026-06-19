# 📚 Online Library App

A single-page online library system built with **React (Vite)**, **Redux Toolkit**, and **React Router**, created for the *React Assignment 2 — Internshala Trainings*.

Browse books by category, search by title/author, view full book details, and add new books to the collection — all backed by a Redux store with dummy seed data.

---

## ✨ Features

| Page | What it does |
|---|---|
| **Home** (`/`) | Welcome hero section, list of book categories, and a "Popular Books" grid (first 4 books) with links to view more. |
| **Browse Books** (`/books`, `/books/:category`) | Lists all books, filterable by category via dynamic routing, plus a live search bar that matches title or author. |
| **Book Details** (`/books/:category/:id`) | Full details for one book — title, author, description, rating — with a "Back to Browse" link. |
| **Add Book** (`/add`) | A validated form to add a new book. On submit, the book is added to the **top** of the Redux store and the user is redirected to Browse Books, with a success alert ("New Book Added! 🎉") confirming the action. |
| **404** | Catches any undefined route, shows the invalid URL that was visited, and links back home. Rendered **without** the Navbar. |

### Tech Stack
- **React 19** + **Vite** — project setup & dev server
- **React Router v7** — routing, including dynamic `:category` and `:id` params
- **Redux Toolkit** + **React Redux** — global state for the book list
- **Plain CSS** (`App.css`) — no UI framework, fully custom styling
- **ESLint** — configured via `eslint.config.js`

---

## 📂 Project Structure

```
library-app/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/             # static assets
│   ├── components/
│   │   ├── BookCard.jsx    # reusable book card (Home + Browse pages)
│   │   ├── Layout.jsx      # Navbar + <Outlet /> wrapper for routed pages
│   │   ├── Navbar.jsx      # top navigation bar
│   │   └── Toast.jsx       # success/error alert notification
│   ├── data/
│   │   └── books.js        # dummy book catalog + category list
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── BrowseBooks.jsx
│   │   ├── BookDetails.jsx
│   │   ├── AddBook.jsx
│   │   └── NotFound.jsx
│   ├── store/
│   │   ├── store.js        # Redux store configuration
│   │   └── booksSlice.js   # library slice (addNewBook reducer)
│   ├── App.jsx              # route definitions
│   ├── App.css              # all app styling
│   ├── index.css            # base/reset styles
│   └── main.jsx              # entry point (renders <App /> with Redux <Provider>)
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

---

## 🚀 How to Run

**Prerequisites:** [Node.js](https://nodejs.org/) (v18 or newer) and npm installed.

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/library-app.git
   cd library-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open the app**
   Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Other available scripts
```bash
npm run build     # production build (outputs to /dist)
npm run preview   # preview the production build locally
npm run lint       # run ESLint over the codebase
```

---

## 🧭 How State Flows (Redux)

1. `src/data/books.js` exports the starter `bookCatalog` array.
2. `src/store/booksSlice.js` seeds Redux state (`state.library.items`) with that catalog and exposes one action, `addNewBook`, which adds a book to the **front** of the array.
3. Pages read books with `useSelector((state) => state.library.items)`.
4. `AddBook.jsx` dispatches `addNewBook(newBook)` on a valid form submit, then shows a `Toast` and navigates to `/books` — where the new book appears first.

---

## ✅ Notes for Reviewers

- All routes except the 404 page are nested under a shared `Layout` (`src/components/Layout.jsx`), which renders the `Navbar` once via `<Outlet />` — the 404 page is defined as a sibling route outside that layout, so it never gets a Navbar.
- Form validation in `AddBook.jsx` checks that every field is filled in and that rating is between 1–5, with inline error messages per field.
- The commit history reflects the actual build order: project scaffold → dependencies → Redux → routing → each page → a refactor pass (extracting `BookCard`) → the toast alert feature → 404 page → styling → docs.
