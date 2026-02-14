import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rooted Lending | Real Estate Investor Loans | DSCR, Fix & Flip, Construction',
  description: 'Real estate investor lending with competitive rates. DSCR loans, fix & flip financing, new construction, and bank statement loans. Close in 5-10 days. NMLS #2744030',
  keywords: 'real estate investor loans, DSCR loans, fix and flip loans, construction loans, bank statement loans, hard money lending, investment property financing',
  openGraph: {
    title: 'Rooted Lending | Real Estate Investor Loans',
    description: 'Investor-focused lending with competitive rates. Close in 5-10 days.',
    url: 'https://rootedlending.com',
    siteName: 'Rooted Lending',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rooted Lending | Real Estate Investor Loans',
    description: 'Investor-focused lending with competitive rates. Close in 5-10 days.',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'YOUR_VERIFICATION_CODE',
  },
  alternates: {
    canonical: 'https://rootedlending.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
