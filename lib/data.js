// In-memory data store for books, users, and reviews
export const books = [
  {
    isbn: "978-0-123456-78-9",
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    price: 29.99,
    description: "A comprehensive guide to JavaScript programming",
  },
  {
    isbn: "978-0-987654-32-1",
    title: "Node.js in Action",
    author: "Mike Cantelon",
    price: 39.99,
    description: "Learn server-side JavaScript with Node.js",
  },
  {
    isbn: "978-0-456789-12-3",
    title: "Express.js Guide",
    author: "Azat Mardan",
    price: 34.99,
    description: "Building web applications with Express.js",
  },
  {
    isbn: "978-0-321654-98-7",
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 44.99,
    description: "A handbook of agile software craftsmanship",
  },
]

export const users = []

export const reviews = []

// Helper functions
export const findBookByISBN = (isbn) => {
  return books.find((book) => book.isbn === isbn)
}

export const findBooksByAuthor = (author) => {
  return books.filter((book) => book.author.toLowerCase().includes(author.toLowerCase()))
}

export const findBooksByTitle = (title) => {
  return books.filter((book) => book.title.toLowerCase().includes(title.toLowerCase()))
}

export const findUserByUsername = (username) => {
  return users.find((user) => user.username === username)
}

export const getReviewsByISBN = (isbn) => {
  return reviews.filter((review) => review.isbn === isbn)
}
