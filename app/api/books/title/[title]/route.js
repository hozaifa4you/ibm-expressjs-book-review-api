import { findBooksByTitle } from "../../../../../lib/data.js"

// Task 4: Get books by title
export async function GET(request, { params }) {
  try {
    const { title } = params
    const books = findBooksByTitle(decodeURIComponent(title))

    return Response.json({
      success: true,
      books: books,
    })
  } catch (error) {
    return Response.json({ success: false, message: "Failed to fetch books by title" }, { status: 500 })
  }
}
