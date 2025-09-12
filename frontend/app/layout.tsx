import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ghar Ka Khana',
  description: 'Delicious home-cooked meals delivered to your doorstep daily. Taste the love in every bite.',
  generator: 'v0.dev',
  icons: {
    icon: '/3570168.png',
    shortcut: '/3570168.png',
    apple: '/3570168.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
