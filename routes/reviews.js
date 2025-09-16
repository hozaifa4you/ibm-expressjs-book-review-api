const express = require("express")
const router = express.Router()
const { reviews, books, users } = require("../data/books")

// Get book reviews
router.get("/:isbn", (req, res) => {
  const { isbn } = req.params

  // Check if book exists
  const book = books.find((b) => b.isbn === isbn)
  if (!book) {
    return res.status(404).json({ error: "Book not found" })
  }

  const bookReviews = reviews.filter((r) => r.isbn === isbn)
  res.json({
    isbn,
    book_title: book.title,
    reviews: bookReviews,
  })
})

// Add/modify book review
router.post("/", (req, res) => {
  const { isbn, username, review, rating } = req.body

  if (!isbn || !username || !review) {
    return res.status(400).json({ error: "ISBN, username, and review are required" })
  }

  // Check if book exists
  const book = books.find((b) => b.isbn === isbn)
  if (!book) {
    return res.status(404).json({ error: "Book not found" })
  }

  // Check if user exists
  const user = users.find((u) => u.username === username)
  if (!user) {
    return res.status(404).json({ error: "User not found" })
  }

  // Check if review already exists
  const existingReviewIndex = reviews.findIndex((r) => r.isbn === isbn && r.username === username)

  const reviewData = {
    isbn,
    username,
    review,
    rating: rating || 5,
    createdAt: new Date().toISOString(),
  }

  if (existingReviewIndex !== -1) {
    // Modify existing review
    reviews[existingReviewIndex] = { ...reviews[existingReviewIndex], ...reviewData }
    res.json({ message: "Review updated successfully", review: reviews[existingReviewIndex] })
  } else {
    // Add new review
    reviewData.id = reviews.length + 1
    reviews.push(reviewData)
    res.status(201).json({ message: "Review added successfully", review: reviewData })
  }
})

// Delete book review
router.delete("/", (req, res) => {
  const { isbn, username } = req.body

  if (!isbn || !username) {
    return res.status(400).json({ error: "ISBN and username are required" })
  }

  const reviewIndex = reviews.findIndex((r) => r.isbn === isbn && r.username === username)

  if (reviewIndex === -1) {
    return res.status(404).json({ error: "Review not found" })
  }

  reviews.splice(reviewIndex, 1)
  res.json({ message: "Review deleted successfully" })
})

module.exports = router
