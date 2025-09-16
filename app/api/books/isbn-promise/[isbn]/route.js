import { findBookByISBN } from "../../../../../lib/data.js"

// Task 11: Search by ISBN using Promises
export async function GET(request, { params }) {
  try {
    const { isbn } = params

    // Create a Promise-based function
    const findBookPromise = (isbn) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const book = findBookByISBN(isbn)
          if (book) {
            resolve(book)
          } else {
            reject(new Error("Book not found"))
          }
        }, 100)
      })
    }

    const book = await findBookPromise(isbn)

    return Response.json({
      success: true,
      book: book,
      method: "promise",
    })
  } catch (error) {
    return Response.json({ success: false, message: error.message }, { status: 404 })
  }
}
