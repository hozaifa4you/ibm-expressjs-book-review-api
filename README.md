# Book Shop Express.js API

A comprehensive Express.js REST API for managing a book shop with user authentication and book reviews. This project demonstrates various async programming patterns including callbacks, promises, and async/await.

## Features

-  **Book Management**: Get all books, search by ISBN, author, or title
-  **User Authentication**: Register and login functionality
-  **Book Reviews**: Add, modify, and delete book reviews
-  **Async Operations**: Examples of callback, Promise, and async/await implementations
-  **Error Handling**: Comprehensive error responses for all endpoints

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development

```bash
npm run dev
```

### Production

```bash
npm start
```

The server will start on port 3333 (or the port specified in the PORT environment variable).

## API Endpoints

### Root Endpoint

#### Get API Information

```bash
curl http://localhost:3000/
```

### Books Endpoints

#### Task 1: Get All Books

```bash
curl http://localhost:3000/api/books
```

#### Task 2: Get Book by ISBN

```bash
curl http://localhost:3000/api/books/isbn/9780134685991
```

#### Task 3: Get Books by Author

```bash
curl http://localhost:3000/api/books/author/Joshua%20Bloch
```

#### Task 4: Get Books by Title

```bash
curl http://localhost:3000/api/books/title/Effective%20Java
```

#### Task 10: Get All Books (Async Callback)

```bash
curl http://localhost:3000/api/books/async-callback
```

#### Task 11: Search by ISBN (Promises)

```bash
curl http://localhost:3000/api/books/isbn-promise/9780134685991
```

#### Task 12: Search by Author (Async/Await)

```bash
curl http://localhost:3000/api/books/author-async/Joshua%20Bloch
```

#### Task 13: Search by Title (Async/Await)

```bash
curl http://localhost:3000/api/books/title-async/Effective%20Java
```

#### Enhanced Author Search

```bash
curl http://localhost:3000/api/books/author-search/Joshua%20Bloch
```

#### Enhanced Title Search

```bash
curl http://localhost:3000/api/books/title-search/Effective%20Java
```

### Authentication Endpoints

#### Task 6: Register New User

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username": "john_doe", "password": "password123"}'
```

#### Task 7: Login User

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "john_doe", "password": "password123"}'
```

### Reviews Endpoints

#### Task 5: Get Book Reviews

```bash
curl http://localhost:3000/api/reviews/9780134685991
```

#### Task 8: Add/Modify Book Review

```bash
curl -X POST http://localhost:3000/api/reviews \
  -H "Content-Type: application/json" \
  -d '{"isbn": "9780134685991", "username": "john_doe", "review": "Excellent book on Java best practices!", "rating": 5}'
```

#### Task 9: Delete Book Review

```bash
curl -X DELETE http://localhost:3000/api/reviews \
  -H "Content-Type: application/json" \
  -d '{"isbn": "9780134685991", "username": "john_doe"}'
```

## Complete Test Sequence

Here's a complete sequence to test all functionality:

### 1. Register a user

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username": "testuser", "password": "testpass123"}'
```

### 2. Login the user

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "testuser", "password": "testpass123"}'
```

### 3. Get all books

```bash
curl http://localhost:3000/api/books
```

### 4. Search for a specific book

```bash
curl http://localhost:3000/api/books/isbn/9780134685991
```

### 5. Add a review

```bash
curl -X POST http://localhost:3000/api/reviews \
  -H "Content-Type: application/json" \
  -d '{"isbn": "9780134685991", "username": "testuser", "review": "Great book for learning Java!", "rating": 5}'
```

### 6. Get reviews for the book

```bash
curl http://localhost:3000/api/reviews/9780134685991
```

### 7. Delete the review

```bash
curl -X DELETE http://localhost:3000/api/reviews \
  -H "Content-Type: application/json" \
  -d '{"isbn": "9780134685991", "username": "testuser"}'
```

## Sample Responses

### Book Response

```json
{
   "isbn": "9780134685991",
   "title": "Effective Java",
   "author": "Joshua Bloch",
   "publication_date": "2017-12-27",
   "publisher": "Addison-Wesley Professional",
   "pages": 416,
   "language": "English",
   "genre": "Programming"
}
```

### User Registration Response

```json
{
   "message": "User registered successfully",
   "user": {
      "id": 1,
      "username": "testuser"
   }
}
```

### Review Response

```json
{
   "isbn": "9780134685991",
   "book_title": "Effective Java",
   "reviews": [
      {
         "id": 1,
         "isbn": "9780134685991",
         "username": "testuser",
         "review": "Great book for learning Java!",
         "rating": 5,
         "createdAt": "2025-09-16T10:30:00.000Z"
      }
   ]
}
```

## Error Responses

### 404 Not Found

```json
{
   "error": "Book not found"
}
```

### 400 Bad Request

```json
{
   "error": "Username and password are required"
}
```

### 409 Conflict

```json
{
   "error": "User already exists"
}
```

## Task Completion Checklist

This project implements all required tasks:

-  ✅ **Task 1**: Get the book list available in the shop (2 Points)
-  ✅ **Task 2**: Get the books based on ISBN (2 Points)
-  ✅ **Task 3**: Get all books by Author (2 Points)
-  ✅ **Task 4**: Get all books based on Title (2 Points)
-  ✅ **Task 5**: Get book Review (2 Points)
-  ✅ **Task 6**: Register New user (3 Points)
-  ✅ **Task 7**: Login as a Registered user (3 Points)
-  ✅ **Task 8**: Add/Modify a book review (2 Points)
-  ✅ **Task 9**: Delete book review added by that particular user (2 Points)
-  ✅ **Task 10**: Get all books – Using async callback function (2 Points)
-  ✅ **Task 11**: Search by ISBN – Using Promises (2 Points)
-  ✅ **Task 12**: Search by Author – Using Async/Await (2 Points)
-  ✅ **Task 13**: Search by Title – Using Async/Await (2 Points)
-  ✅ **Task 14**: Submission of Project GitHub Link (2 Points)

## Available Books in the System

The system comes pre-loaded with the following books:

1. **Effective Java** - Joshua Bloch (ISBN: 9780134685991)
2. **JavaScript: The Good Parts** - Douglas Crockford (ISBN: 9780596517748)
3. **Domain-Driven Design** - Eric Evans (ISBN: 9780321125217)
4. **Design Patterns** - Gang of Four (ISBN: 9780201633610)
5. **Clean Code** - Robert C. Martin (ISBN: 9780132350884)

## Data Storage

Currently uses in-memory storage for simplicity. In production, you would want to integrate with a proper database like MongoDB, PostgreSQL, or MySQL.

## Project Structure

```
├── server.js          # Main Express server
├── routes/            # Route handlers
│   ├── books.js       # Book-related endpoints (Tasks 1-4, 10-13)
│   ├── auth.js        # Authentication endpoints (Tasks 6-7)
│   └── reviews.js     # Review management endpoints (Tasks 5, 8-9)
├── data/              # Data storage
│   └── books.js       # In-memory data store
├── lib/               # Utility functions
│   └── data.js        # Data manipulation utilities
├── package.json       # Dependencies and scripts
└── README.md          # This file
```

## Development Notes

-  The server runs on port 3333 by default
-  All endpoints use proper HTTP status codes
-  Error handling is implemented for all routes
-  Both synchronous and asynchronous patterns are demonstrated
-  The project includes examples of callbacks, promises, and async/await

## Dependencies

-  **express**: Web framework for Node.js
-  **cors**: Cross-Origin Resource Sharing middleware
-  **body-parser**: Parse incoming request bodies
-  **dotenv**: Load environment variables
-  **nodemon**: Development dependency for auto-restarting the server
