import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anoch Dissanayake Portfolio',
  description: 'Anoch Dissanayakes Portfolio Website. Im a Full Stack React Developer! Have a look at my portfolio website, and leave a comment in the github!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
