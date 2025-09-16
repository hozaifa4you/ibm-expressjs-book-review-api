// In-memory data store for books
const books = [
  {
    isbn: "9780134685991",
    title: "Effective Java",
    author: "Joshua Bloch",
    publication_date: "2017-12-27",
    publisher: "Addison-Wesley Professional",
    pages: 416,
    language: "English",
    genre: "Programming",
  },
  {
    isbn: "9780596517748",
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    publication_date: "2008-05-08",
    publisher: "O'Reilly Media",
    pages: 176,
    language: "English",
    genre: "Programming",
  },
  {
    isbn: "9780321125217",
    title: "Domain-Driven Design",
    author: "Eric Evans",
    publication_date: "2003-08-30",
    publisher: "Addison-Wesley Professional",
    pages: 560,
    language: "English",
    genre: "Software Architecture",
  },
  {
    isbn: "9780201633610",
    title: "Design Patterns",
    author: "Gang of Four",
    publication_date: "1994-10-31",
    publisher: "Addison-Wesley Professional",
    pages: 395,
    language: "English",
    genre: "Software Design",
  },
  {
    isbn: "9780132350884",
    title: "Clean Code",
    author: "Robert C. Martin",
    publication_date: "2008-08-01",
    publisher: "Prentice Hall",
    pages: 464,
    language: "English",
    genre: "Programming",
  },
]

const users = []
const reviews = []

module.exports = { books, users, reviews }
