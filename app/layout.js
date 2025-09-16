export const metadata = {
  title: "Book Shop API",
  description: "Simple Express.js-style API for book management",
    generator: 'v0.app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


import './globals.css'