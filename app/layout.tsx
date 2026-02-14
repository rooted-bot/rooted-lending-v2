import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { OrganizationSchema, WebsiteSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'BitcoinLoans.com | Compare Bitcoin-Backed Loan Platforms',
  description: 'Find the best Bitcoin loan platforms. Compare rates, calculate payments, and get instant crypto-backed loans without selling your Bitcoin.',
  keywords: 'bitcoin loans, crypto loans, bitcoin backed loans, crypto lending, bitcoin collateral',
  openGraph: {
    title: 'BitcoinLoans.com | Compare Bitcoin-Backed Loan Platforms',
    description: 'Find the best Bitcoin loan platforms. Compare rates, calculate payments, and get instant crypto-backed loans without selling your Bitcoin.',
    url: 'https://bitcoinloans.com',
    siteName: 'BitcoinLoans.com',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BitcoinLoans.com | Compare Bitcoin-Backed Loan Platforms',
    description: 'Find the best Bitcoin loan platforms. Compare rates, calculate payments, and get instant crypto-backed loans without selling your Bitcoin.',
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
    google: 'YOUR_GOOGLE_SITE_VERIFICATION',
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
        <OrganizationSchema />
        <WebsiteSchema />
      </head>
      <body className="min-h-screen bg-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
