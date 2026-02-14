import Link from 'next/link'
import { Bitcoin, Calculator, Scale, BookOpen } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Bitcoin className="h-8 w-8 text-orange-500" />
            <span className="font-bold text-xl">BitcoinLoans.com</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/articles" className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
              <BookOpen className="h-4 w-4" />
              <span>Guides</span>
            </Link>
            <Link href="/calculator" className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
              <Calculator className="h-4 w-4" />
              <span>Calculator</span>
            </Link>
            <Link href="/compare" className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
              <Scale className="h-4 w-4" />
              <span>Compare</span>
            </Link>
          </nav>

          {/* CTA */}
          <Link
            href="/compare"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Get a Loan
          </Link>
        </div>
      </div>
    </header>
  )
}
