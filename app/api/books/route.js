import { books } from "../../../lib/data.js"

// Task 1: Get all books
export async function GET() {
  try {
    return Response.json({
      success: true,
      books: books,
    })
  } catch (error) {
    return Response.json({ success: false, message: "Failed to fetch books" }, { status: 500 })
  }
}
