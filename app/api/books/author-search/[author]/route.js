import { findBooksByAuthor } from "../../../../../lib/data.js"

// Task 12: Search by Author
export async function GET(request, { params }) {
  try {
    const { author } = params
    const books = findBooksByAuthor(decodeURIComponent(author))

    return Response.json({
      success: true,
      books: books,
      searchType: "author-search",
    })
  } catch (error) {
    return Response.json({ success: false, message: "Failed to search books by author" }, { status: 500 })
  }
}
