import './globals.css'

export const metadata = {
  title: 'GolamsVision',
  description: 'Welcome to GolamsVision - capturing the moments and ideas that define you! Book an appointment now! ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
