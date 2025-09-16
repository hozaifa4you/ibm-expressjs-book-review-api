# Book Shop Express.js API

A simple Express.js REST API for managing a book shop with user authentication and book reviews.

## Features

- **Book Management**: Get all books, search by ISBN, author, or title
- **User Authentication**: Register and login functionality
- **Book Reviews**: Add, modify, and delete book reviews
- **Async Operations**: Examples of callback and Promise-based implementations

## API Endpoints

### Books
- `GET /api/books` - Get all books
- `GET /api/books/isbn/:isbn` - Get book by ISBN
- `GET /api/books/author/:author` - Get books by author
- `GET /api/books/title/:title` - Get books by title
- `GET /api/books/async-callback` - Get all books using async callback
- `GET /api/books/isbn-promise/:isbn` - Search by ISBN using Promises
- `GET /api/books/author-search/:author` - Search by Author
- `GET /api/books/title-search/:title` - Search by title

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Reviews
- `GET /api/reviews/:isbn` - Get book reviews
- `POST /api/reviews` - Add/modify book review
- `DELETE /api/reviews` - Delete book review

## Installation

1. Clone the repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

## Usage

### Development
\`\`\`bash
npm run dev
\`\`\`

### Production
\`\`\`bash
npm start
\`\`\`

The server will start on port 3000 (or the port specified in the PORT environment variable).

## API Usage Examples

### Register a new user
\`\`\`bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username": "john_doe", "password": "password123"}'
\`\`\`

### Login
\`\`\`bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "john_doe", "password": "password123"}'
\`\`\`

### Get all books
\`\`\`bash
curl http://localhost:3000/api/books
\`\`\`

### Add a book review
\`\`\`bash
curl -X POST http://localhost:3000/api/reviews \
  -H "Content-Type: application/json" \
  -d '{"isbn": "9780134685991", "username": "john_doe", "review": "Great book!", "rating": 5}'
\`\`\`

## Data Storage

Currently uses in-memory storage for simplicity. In production, you would want to integrate with a proper database like MongoDB, PostgreSQL, or MySQL.

## Project Structure

\`\`\`
├── server.js          # Main Express server
├── routes/            # Route handlers
│   ├── books.js       # Book-related endpoints
│   ├── auth.js        # Authentication endpoints
│   └── reviews.js     # Review management endpoints
├── data/              # Data storage
│   └── books.js       # In-memory data store
├── package.json       # Dependencies and scripts
└── README.md          # This file
