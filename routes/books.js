const express = require("express");
const router = express.Router();
const { books } = require("../data/books");

// Get all books
router.get("/", (req, res) => {
   res.json(books);
});

// Get book by ISBN
router.get("/isbn/:isbn", (req, res) => {
   const { isbn } = req.params;
   const book = books.find((b) => b.isbn === isbn);

   if (!book) {
      return res.status(404).json({ error: "Book not found" });
   }

   res.json(book);
});

// Get books by author
router.get("/author/:author", (req, res) => {
   const { author } = req.params;
   const authorBooks = books.filter((b) =>
      b.author.toLowerCase().includes(author.toLowerCase())
   );

   res.json(authorBooks);
});

// Get books by title
router.get("/title/:title", (req, res) => {
   const { title } = req.params;
   const titleBooks = books.filter((b) =>
      b.title.toLowerCase().includes(title.toLowerCase())
   );

   res.json(titleBooks);
});

// Get all books using async callback
router.get("/async-callback", (req, res) => {
   const getAllBooksCallback = (callback) => {
      setTimeout(() => {
         callback(null, books);
      }, 100);
   };

   getAllBooksCallback((err, data) => {
      if (err) {
         return res.status(500).json({ error: "Internal server error" });
      }
      res.json(data);
   });
});

// Search by ISBN using Promises
router.get("/isbn-promise/:isbn", (req, res) => {
   const { isbn } = req.params;

   const findBookByISBN = (isbn) => {
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            const book = books.find((b) => b.isbn === isbn);
            if (book) {
               resolve(book);
            } else {
               reject(new Error("Book not found"));
            }
         }, 100);
      });
   };

   findBookByISBN(isbn)
      .then((book) => res.json(book))
      .catch((err) => res.status(404).json({ error: err.message }));
});

// Search by Author
router.get("/author-search/:author", (req, res) => {
   const { author } = req.params;
   const authorBooks = books.filter((b) =>
      b.author.toLowerCase().includes(author.toLowerCase())
   );

   res.json({
      query: author,
      results: authorBooks,
      count: authorBooks.length,
   });
});

// Search by title
router.get("/title-search/:title", (req, res) => {
   const { title } = req.params;
   const titleBooks = books.filter((b) =>
      b.title.toLowerCase().includes(title.toLowerCase())
   );

   res.json({
      query: title,
      results: titleBooks,
      count: titleBooks.length,
   });
});

module.exports = router;
