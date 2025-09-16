export default function Home() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Book Shop API</h1>
      <p>API is running. Use the following endpoints:</p>

      <h2>Book Operations</h2>
      <ul>
        <li>GET /api/books - Get all books</li>
        <li>GET /api/books/isbn/[isbn] - Get book by ISBN</li>
        <li>GET /api/books/author/[author] - Get books by author</li>
        <li>GET /api/books/title/[title] - Get books by title</li>
        <li>GET /api/books/async-callback - Get all books (async callback)</li>
        <li>GET /api/books/isbn-promise/[isbn] - Search by ISBN (Promise)</li>
        <li>GET /api/books/author-search/[author] - Search by author</li>
        <li>GET /api/books/title-search/[title] - Search by title</li>
      </ul>

      <h2>Authentication</h2>
      <ul>
        <li>POST /api/auth/register - Register new user</li>
        <li>POST /api/auth/login - Login user</li>
      </ul>

      <h2>Reviews</h2>
      <ul>
        <li>GET /api/reviews/[isbn] - Get book reviews</li>
        <li>POST /api/reviews - Add/modify book review</li>
        <li>DELETE /api/reviews - Delete book review</li>
      </ul>
    </div>
  )
}
