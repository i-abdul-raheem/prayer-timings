import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Prayer Times - Accurate Islamic Prayer Times Worldwide',
    template: '%s | Prayer Times'
  },
  description: 'Get accurate prayer times for cities worldwide. Find Fajr, Dhuhr, Asr, Maghrib, and Isha prayer times with precise calculations.',
  keywords: ['prayer times', 'salah times', 'islamic prayer', 'fajr', 'dhuhr', 'asr', 'maghrib', 'isha', 'muslim prayer'],
  authors: [{ name: 'Prayer Times' }],
  creator: 'Prayer Times',
  publisher: 'Prayer Times',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://prayer-timings.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://prayer-timings.com',
    title: 'Prayer Times - Accurate Islamic Prayer Times Worldwide',
    description: 'Get accurate prayer times for cities worldwide. Find Fajr, Dhuhr, Asr, Maghrib, and Isha prayer times with precise calculations.',
    siteName: 'Prayer Times',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Prayer Times - Islamic Prayer Times Worldwide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prayer Times - Accurate Islamic Prayer Times Worldwide',
    description: 'Get accurate prayer times for cities worldwide. Find Fajr, Dhuhr, Asr, Maghrib, and Isha prayer times with precise calculations.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4EKFMKMTVZ"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4EKFMKMTVZ');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
