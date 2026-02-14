import Link from 'next/link'
import { Bitcoin, AlertTriangle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Risk Warning Banner */}
      <div className="bg-red-900/30 border-t border-red-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-red-200">
                <strong>Risk Warning:</strong> Cryptocurrency loans involve significant risk, including potential loss of collateral due to margin calls. 
                Only borrow what you can afford to lose. This website contains affiliate links. 
                <Link href="/legal/affiliate-disclosure" className="underline ml-1">Learn more</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Bitcoin className="h-8 w-8 text-orange-500" />
              <span className="font-bold text-xl text-white">BitcoinLoans.com</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Your trusted resource for Bitcoin-backed loans. Compare lenders, calculate payments, 
              and make informed decisions about crypto lending.
            </p>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} BitcoinLoans.com. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/articles" className="hover:text-white transition-colors">All Guides</Link></li>
              <li><Link href="/calculator" className="hover:text-white transition-colors">Loan Calculator</Link></li>
              <li><Link href="/compare" className="hover:text-white transition-colors">Compare Lenders</Link></li>
              <li><Link href="/articles/how-bitcoin-loans-work" className="hover:text-white transition-colors">How It Works</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/legal/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/legal/disclaimer" className="hover:text-white transition-colors">Risk Disclaimer</Link></li>
              <li><Link href="/legal/affiliate-disclosure" className="hover:text-white transition-colors">Affiliate Disclosure</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
