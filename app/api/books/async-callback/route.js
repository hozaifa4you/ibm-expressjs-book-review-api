import { books } from "../../../../lib/data.js"

// Task 10: Get all books using async callback function
export async function GET() {
  try {
    // Simulate async callback pattern
    const getAllBooksCallback = (callback) => {
      setTimeout(() => {
        callback(null, books)
      }, 100)
    }

    const result = await new Promise((resolve, reject) => {
      getAllBooksCallback((error, data) => {
        if (error) {
          reject(error)
        } else {
          resolve(data)
        }
      })
    })

    return Response.json({
      success: true,
      books: result,
      method: "async-callback",
    })
  } catch (error) {
    return Response.json({ success: false, message: "Failed to fetch books with callback" }, { status: 500 })
  }
}
