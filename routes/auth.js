const express = require("express")
const router = express.Router()
const { users } = require("../data/books")

// Register new user
router.post("/register", (req, res) => {
  const { username, password } = req.body

  if (!username || !password) {
    return res.status(400).json({ error: "Username and password are required" })
  }

  // Check if user already exists
  const existingUser = users.find((u) => u.username === username)
  if (existingUser) {
    return res.status(409).json({ error: "User already exists" })
  }

  // Create new user
  const newUser = {
    id: users.length + 1,
    username,
    password, // In production, hash this password
    createdAt: new Date().toISOString(),
  }

  users.push(newUser)

  res.status(201).json({
    message: "User registered successfully",
    user: { id: newUser.id, username: newUser.username },
  })
})

// Login user
router.post("/login", (req, res) => {
  const { username, password } = req.body

  if (!username || !password) {
    return res.status(400).json({ error: "Username and password are required" })
  }

  // Find user
  const user = users.find((u) => u.username === username && u.password === password)

  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" })
  }

  res.json({
    message: "Login successful",
    user: { id: user.id, username: user.username },
  })
})

module.exports = router
