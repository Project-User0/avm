import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Horizon Academy | Excellence in Education',
  description: 'Horizon Academy - A leading school fostering academic excellence, holistic development, and innovation for students from Nursery to Grade 12.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/avm-logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/avm-logo-dark.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/avm-logo.png',
        type: 'image/png',
      },
    ],
    apple: '/avm-logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} bg-white`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
