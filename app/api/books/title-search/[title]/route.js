import { findBooksByTitle } from "../../../../../lib/data.js"

// Task 13: Search by title
export async function GET(request, { params }) {
  try {
    const { title } = params
    const books = findBooksByTitle(decodeURIComponent(title))

    return Response.json({
      success: true,
      books: books,
      searchType: "title-search",
    })
  } catch (error) {
    return Response.json({ success: false, message: "Failed to search books by title" }, { status: 500 })
  }
}
