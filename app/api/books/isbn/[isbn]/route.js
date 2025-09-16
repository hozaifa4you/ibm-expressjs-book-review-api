import { findBookByISBN } from "../../../../../lib/data.js"

// Task 2: Get book by ISBN
export async function GET(request, { params }) {
  try {
    const { isbn } = params
    const book = findBookByISBN(isbn)

    if (!book) {
      return Response.json({ success: false, message: "Book not found" }, { status: 404 })
    }

    return Response.json({
      success: true,
      book: book,
    })
  } catch (error) {
    return Response.json({ success: false, message: "Failed to fetch book" }, { status: 500 })
  }
}
