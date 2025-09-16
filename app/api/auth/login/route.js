import { findUserByUsername } from "../../../../lib/data.js"

// Task 7: Login user
export async function POST(request) {
  try {
    const { username, password } = await request.json()

    if (!username || !password) {
      return Response.json({ success: false, message: "Username and password are required" }, { status: 400 })
    }

    const user = findUserByUsername(username)

    if (!user || user.password !== password) {
      return Response.json({ success: false, message: "Invalid credentials" }, { status: 401 })
    }

    return Response.json({
      success: true,
      message: "Login successful",
      user: { id: user.id, username: user.username },
    })
  } catch (error) {
    return Response.json({ success: false, message: "Login failed" }, { status: 500 })
  }
}
