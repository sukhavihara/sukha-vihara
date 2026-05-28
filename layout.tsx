import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sukha Vihara — Soft Ritual Living',
  description: 'Eastern wellness rituals, reimagined for the modern woman. A softer end to the day.',
  openGraph: {
    title: 'Sukha Vihara — Soft Ritual Living',
    description: 'Eastern wellness rituals, reimagined for the modern woman.',
    url: 'https://www.sukhavihara.com',
    siteName: 'Sukha Vihara',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
