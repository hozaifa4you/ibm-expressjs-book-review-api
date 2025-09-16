import { users, findUserByUsername } from "../../../../lib/data.js"

// Task 6: Register new user
export async function POST(request) {
  try {
    const { username, password } = await request.json()

    if (!username || !password) {
      return Response.json({ success: false, message: "Username and password are required" }, { status: 400 })
    }

    // Check if user already exists
    if (findUserByUsername(username)) {
      return Response.json({ success: false, message: "User already exists" }, { status: 409 })
    }

    // Create new user
    const newUser = {
      id: users.length + 1,
      username,
      password, // In real app, this should be hashed
    }

    users.push(newUser)

    return Response.json({
      success: true,
      message: "User registered successfully",
      user: { id: newUser.id, username: newUser.username },
    })
  } catch (error) {
    return Response.json({ success: false, message: "Registration failed" }, { status: 500 })
  }
}
