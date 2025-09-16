import { findBooksByAuthor } from "../../../../../lib/data.js"

// Task 3: Get books by author
export async function GET(request, { params }) {
  try {
    const { author } = params
    const books = findBooksByAuthor(decodeURIComponent(author))

    return Response.json({
      success: true,
      books: books,
    })
  } catch (error) {
    return Response.json({ success: false, message: "Failed to fetch books by author" }, { status: 500 })
  }
}
