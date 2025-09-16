import { getReviewsByISBN } from "../../../../lib/data.js"

// Task 5: Get book reviews
export async function GET(request, { params }) {
  try {
    const { isbn } = params
    const bookReviews = getReviewsByISBN(isbn)

    return Response.json({
      success: true,
      reviews: bookReviews,
    })
  } catch (error) {
    return Response.json({ success: false, message: "Failed to fetch reviews" }, { status: 500 })
  }
}
