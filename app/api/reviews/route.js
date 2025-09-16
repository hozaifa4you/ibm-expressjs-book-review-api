import { reviews, findBookByISBN, findUserByUsername } from "../../../lib/data.js"

// Task 8: Add/modify book review
export async function POST(request) {
  try {
    const { isbn, username, review, rating } = await request.json()

    if (!isbn || !username || !review || !rating) {
      return Response.json({ success: false, message: "All fields are required" }, { status: 400 })
    }

    // Verify book exists
    const book = findBookByISBN(isbn)
    if (!book) {
      return Response.json({ success: false, message: "Book not found" }, { status: 404 })
    }

    // Verify user exists
    const user = findUserByUsername(username)
    if (!user) {
      return Response.json({ success: false, message: "User not found" }, { status: 404 })
    }

    // Check if review already exists for this user and book
    const existingReviewIndex = reviews.findIndex((r) => r.isbn === isbn && r.username === username)

    const reviewData = {
      id: existingReviewIndex >= 0 ? reviews[existingReviewIndex].id : reviews.length + 1,
      isbn,
      username,
      review,
      rating: Number.parseInt(rating),
      date: new Date().toISOString(),
    }

    if (existingReviewIndex >= 0) {
      // Update existing review
      reviews[existingReviewIndex] = reviewData
      return Response.json({
        success: true,
        message: "Review updated successfully",
        review: reviewData,
      })
    } else {
      // Add new review
      reviews.push(reviewData)
      return Response.json({
        success: true,
        message: "Review added successfully",
        review: reviewData,
      })
    }
  } catch (error) {
    return Response.json({ success: false, message: "Failed to add/modify review" }, { status: 500 })
  }
}

// Task 9: Delete book review
export async function DELETE(request) {
  try {
    const { isbn, username } = await request.json()

    if (!isbn || !username) {
      return Response.json({ success: false, message: "ISBN and username are required" }, { status: 400 })
    }

    const reviewIndex = reviews.findIndex((r) => r.isbn === isbn && r.username === username)

    if (reviewIndex === -1) {
      return Response.json({ success: false, message: "Review not found" }, { status: 404 })
    }

    reviews.splice(reviewIndex, 1)

    return Response.json({
      success: true,
      message: "Review deleted successfully",
    })
  } catch (error) {
    return Response.json({ success: false, message: "Failed to delete review" }, { status: 500 })
  }
}
