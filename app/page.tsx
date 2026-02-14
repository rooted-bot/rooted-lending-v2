import Link from 'next/link'
import { Calculator, Scale, BookOpen, ArrowRight, CheckCircle, Shield, TrendingUp } from 'lucide-react'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get a Loan Without Selling Your{' '}
              <span className="text-orange-500">Bitcoin</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Compare the best Bitcoin-backed loan platforms. Instant approval, competitive rates, 
              and keep your crypto while accessing cash.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/compare"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Compare Lenders</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/calculator"
                className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center space-x-2"
              >
                <Calculator className="h-5 w-5" />
                <span>Calculate Loan</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need to Know About Bitcoin Loans
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We research and review Bitcoin lending platforms so you can make informed decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Scale className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Compare Lenders</h3>
              <p className="text-gray-600 mb-4">
                Side-by-side comparison of interest rates, loan terms, and platform features from trusted lenders.
              </p>
              <Link href="/compare" className="text-orange-500 font-medium hover:text-orange-600 inline-flex items-center">
                View Comparison <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Calculator className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Loan Calculator</h3>
              <p className="text-gray-600 mb-4">
                Calculate your loan payments, total interest, and collateral requirements before you apply.
              </p>
              <Link href="/calculator" className="text-orange-500 font-medium hover:text-orange-600 inline-flex items-center">
                Try Calculator <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Guides</h3>
              <p className="text-gray-600 mb-4">
                Learn how Bitcoin loans work, understand the risks, and discover strategies for responsible borrowing.
              </p>
              <Link href="/articles" className="text-orange-500 font-medium hover:text-orange-600 inline-flex items-center">
                Read Guides <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Bitcoin Loans Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Get a Bitcoin-Backed Loan?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Keep Your Bitcoin</h4>
                    <p className="text-gray-600">Access cash without selling your crypto and missing out on future gains.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">No Credit Check</h4>
                    <p className="text-gray-600">Your Bitcoin is your collateral. No credit score required for approval.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Instant Approval</h4>
                    <p className="text-gray-600">Get approved in minutes and receive funds within 24 hours.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Lower Rates</h4>
                    <p className="text-gray-600">Secured loans typically offer lower interest rates than unsecured alternatives.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Loan Uses</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-orange-500" />
                  <span className="font-medium text-gray-900">Invest in More Bitcoin</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Shield className="h-6 w-6 text-blue-500" />
                  <span className="font-medium text-gray-900">Emergency Expenses</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-green-500" />
                  <span className="font-medium text-gray-900">Business Investment</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Shield className="h-6 w-6 text-purple-500" />
                  <span className="font-medium text-gray-900">Debt Consolidation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Compare top Bitcoin lending platforms and find the best rates for your needs.
          </p>
          <Link
            href="/compare"
            className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
          >
            Compare Lenders Now
          </Link>
        </div>
      </section>
    </main>
  )
}
