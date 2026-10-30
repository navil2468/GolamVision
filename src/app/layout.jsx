import './globals.css'

export const metadata = {
  title: 'GVisions',
  description: 'Welcome to GVisions - lifestyle, graduation, prom, studio, and event photography that captures the moments and ideas that define you. Book an appointment now!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
