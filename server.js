const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Import routes
const booksRoutes = require("./routes/books");
const authRoutes = require("./routes/auth");
const reviewsRoutes = require("./routes/reviews");

const app = express();
const PORT = process.env.PORT || 3333;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/books", booksRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/reviews", reviewsRoutes);

// Root endpoint
app.get("/", (req, res) => {
   res.json({
      message: "Book Shop API",
      endpoints: {
         books: {
            "GET /api/books": "Get all books",
            "GET /api/books/isbn/:isbn": "Get book by ISBN",
            "GET /api/books/author/:author": "Get books by author",
            "GET /api/books/title/:title": "Get books by title",
            "GET /api/books/async-callback":
               "Get all books using async callback",
            "GET /api/books/isbn-promise/:isbn":
               "Search by ISBN using Promises",
            "GET /api/books/author-search/:author": "Search by Author",
            "GET /api/books/title-search/:title": "Search by title",
         },
         auth: {
            "POST /api/auth/register": "Register new user",
            "POST /api/auth/login": "Login user",
         },
         reviews: {
            "GET /api/reviews/:isbn": "Get book reviews",
            "POST /api/reviews": "Add/modify book review",
            "DELETE /api/reviews": "Delete book review",
         },
      },
   });
});

// Error handling middleware
app.use((err, req, res, next) => {
   console.error(err.stack);
   res.status(500).json({ error: "Something went wrong!" });
});

// 404 handler
app.use("*", (req, res) => {
   res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
   console.log(`Book Shop API server running on port ${PORT}`);
});

module.exports = app;
