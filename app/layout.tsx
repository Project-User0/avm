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
  metadataBase: new URL('https://shreeavmss.vercel.app'),

  title: {
    default: 'Annapurna Vidhya Mandir (AVM) | Excellence in Education',
    template: '%s | Annapurna Vidhya Mandir',
  },

  description:
    'Annapurna Vidhya Mandir (AVM) is a leading school dedicated to academic excellence, holistic development, innovation, and character building for students from Nursery to Grade 10.',

  applicationName: 'Annapurna Vidhya Mandir',

  keywords: [
    'AVM',
    'Annapurna Vidhya Mandir',
    'Annapurna Vidhya Mandir School',
    'Best School in Nepal',
    'Best School',
    'Top School',
    'School',
    'Education',
    'Quality Education',
    'Academic Excellence',
    'Nursery School',
    'Primary School',
    'Secondary School',
    'Grade 10 School',
    'Student Development',
    'Holistic Learning',
    'Innovative Education',
    'Admissions',
    'School Admission',
    'Learning',
    'School Activities',
    'Experienced Teachers',
    'Science Lab',
    'Computer Lab',
    'Library',
    'Extracurricular Activities',
    'Smart Classroom',
    'English Medium School',
    'Nepal School',
    'Future Leaders',
    'Character Building',
    'Best Education',
  ],

  authors: [
    {
      name: 'Annapurna Vidhya Mandir',
    },
  ],

  creator: 'Annapurna Vidhya Mandir',
  publisher: 'Annapurna Vidhya Mandir',

  category: 'Education',

  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    title: 'Annapurna Vidhya Mandir (AVM) | Excellence in Education',
    description:
      'Providing quality education from Nursery to Grade 10 through academic excellence, innovation, and holistic student development.',
    url: 'https://shreeavmss.vercel.app',
    siteName: 'Annapurna Vidhya Mandir',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/avm-logo.png',
        width: 1200,
        height: 630,
        alt: 'Annapurna Vidhya Mandir',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Annapurna Vidhya Mandir (AVM)',
    description:
      'A leading institution committed to excellence in education and holistic student development.',
    images: ['/og-image.jpg'],
  },

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
    shortcut: '/favicon.ico',
  },

  manifest: '/site.webmanifest',

  generator: 'Next.js',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} bg-white`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}