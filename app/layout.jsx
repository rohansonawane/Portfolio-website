import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import TawkToChat from "@/components/TawkToChat";
import { GoogleTagManager } from '@next/third-parties/google'

// Components
import Header from "@/components/Header";
import ErrorBoundary from "@/components/ErrorBoundary";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
})

export const metadata = {
  title: 'Rohan Sonawane | Full Stack Developer',
  description: 'Full Stack Developer specializing in React, Next.js, and Node.js. Building modern web applications with a focus on performance and user experience.',
  keywords: 'Full Stack Developer, React, Next.js, Node.js, Web Development',
  authors: [{ name: 'Rohan Sonawane' }],
  creator: 'Rohan Sonawane',
  publisher: 'Rohan Sonawane',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://rohansonawane.tech'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Rohan Sonawane | Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, and Node.js. Building modern web applications with a focus on performance and user experience.',
    url: 'https://rohansonawane.tech',
    siteName: 'Rohan Sonawane Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rohan Sonawane Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohan Sonawane | Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, and Node.js. Building modern web applications with a focus on performance and user experience.',
    images: ['/og-image.png'],
    creator: '@rohansonawane',
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
    google: 'your-google-site-verification',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
      </head>
      <GoogleTagManager gtmId="GTM-5727CZ8R" />
      <body className={inter.className}>
        <ErrorBoundary>
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
        </ErrorBoundary>
        <TawkToChat />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
