import Link from 'next/link'
import { Check, X, Star, ArrowRight, Info } from 'lucide-react'

interface Lender {
  id: string
  name: string
  logo: string
  rating: number
  minLoan: number
  maxLoan: number
  minApr: number
  maxApr: number
  minLtv: number
  maxLtv: number
  termMonths: string
  features: string[]
  pros: string[]
  cons: string[]
  affiliateUrl: string
  isFeatured?: boolean
}

const lenders: Lender[] = [
  {
    id: 'nexo',
    name: 'Nexo',
    logo: 'Nexo',
    rating: 4.8,
    minLoan: 50,
    maxLoan: 2000000,
    minApr: 0,
    maxApr: 13.9,
    minLtv: 15,
    maxLtv: 70,
    termMonths: 'Flexible',
    features: ['Instant Approval', 'No Credit Check', '60+ Cryptocurrencies', 'Insurance on Assets'],
    pros: ['0% APR available', 'High LTV ratios', 'Daily interest payments', 'Regulated entity'],
    cons: ['Requires NEXO tokens for best rates', 'Not available in all states'],
    affiliateUrl: 'https://nexo.com/ref/?id=YOUR_REF_ID',
    isFeatured: true,
  },
  {
    id: 'youhodler',
    name: 'YouHodler',
    logo: 'YouHodler',
    rating: 4.5,
    minLoan: 100,
    maxLoan: 1000000,
    minApr: 2.5,
    maxApr: 13.0,
    minLtv: 50,
    maxLtv: 90,
    termMonths: '30-180 days',
    features: ['High LTV up to 90%', 'Turbocharge Feature', 'Multi HODL', 'Crypto Savings'],
    pros: ['Highest LTV ratios', 'Multiple loan plans', 'EU and Swiss regulated', 'Fast approval'],
    cons: ['Shorter loan terms', 'Higher minimum APR'],
    affiliateUrl: 'https://youhodler.com/?ref=YOUR_REF_ID',
    isFeatured: true,
  },
  {
    id: 'coinrabbit',
    name: 'CoinRabbit',
    logo: 'CoinRabbit',
    rating: 4.2,
    minLoan: 100,
    maxLoan: 500000,
    minApr: 12,
    maxApr: 17,
    minLtv: 50,
    maxLtv: 70,
    termMonths: 'No fixed term',
    features: ['No KYC Required', 'Unlimited Loan Terms', '130+ Collateral Types', 'No Repayment Schedule'],
    pros: ['No KYC for loans under $700', 'Unlimited term length', 'Wide crypto support', 'Simple interface'],
    cons: ['Higher APR', 'No mobile app', 'Limited customer support'],
    affiliateUrl: 'https://coinrabbit.io/?ref=YOUR_REF_ID',
    isFeatured: false,
  },
  {
    id: 'salt',
    name: 'SALT Lending',
    logo: 'SALT',
    rating: 4.0,
    minLoan: 5000,
    maxLoan: 25000000,
    minApr: 9.99,
    maxApr: 14.99,
    minLtv: 30,
    maxLtv: 70,
    termMonths: '12-60 months',
    features: ['No Monthly Payments', 'US Focused', 'Business Loans', 'High Loan Limits'],
    pros: ['No monthly payments option', 'Very high loan limits', 'Business loans available', 'US based'],
    cons: ['High minimum loan', 'Higher APR rates', 'Slower approval'],
    affiliateUrl: 'https://saltlending.com/?ref=YOUR_REF_ID',
    isFeatured: false,
  },
]

function formatCurrency(amount: number): string {
  if (amount >= 1000000) {
    return `$${(amount / 1000000).toFixed(1)}M`
  }
  if (amount >= 1000) {
    return `$${(amount / 1000).toFixed(0)}K`
  }
  return `$${amount}`
}

export default function ComparePage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Compare Bitcoin Loan Platforms
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Side-by-side comparison of the best crypto lending platforms. Find the lowest rates and best terms.
          </p>
        </div>
      </section>

      {/* Featured Lenders */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {lenders.filter(l => l.isFeatured).map((lender) => (
              <div key={lender.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-orange-500">
                <div className="bg-orange-500 text-white px-6 py-2 text-sm font-semibold text-center">
                  Recommended
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{lender.name}</h2>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < Math.floor(lender.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="ml-2 text-gray-600">{lender.rating}/5</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-orange-500">
                        {lender.minApr === 0 ? '0%' : `${lender.minApr}%`}
                      </div>
                      <div className="text-sm text-gray-500">starting APR</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm text-gray-500">Loan Amount</div>
                      <div className="font-semibold text-gray-900">
                        {formatCurrency(lender.minLoan)} - {formatCurrency(lender.maxLoan)}
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm text-gray-500">LTV Ratio</div>
                      <div className="font-semibold text-gray-900">
                        Up to {lender.maxLtv}%
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {lender.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <a
                    href={lender.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center py-4 rounded-lg font-semibold transition-colors"
                  >
                    Get Started with {lender.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Comparison Table */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Detailed Comparison</h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Platform</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">APR Range</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Max LTV</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Loan Range</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Term</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {lenders.map((lender) => (
                    <tr key={lender.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="font-semibold text-gray-900">{lender.name}</div>
                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(lender.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                          <span className="ml-1 text-sm text-gray-600">{lender.rating}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="font-semibold text-gray-900">
                          {lender.minApr === 0 ? '0%' : `${lender.minApr}%`} - {lender.maxApr}%
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="font-semibold text-gray-900">{lender.maxLtv}%</span>
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600">
                        {formatCurrency(lender.minLoan)} - {formatCurrency(lender.maxLoan)}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600">
                        {lender.termMonths}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <a
                          href={lender.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
                        >
                          Apply <ArrowRight className="h-4 w-4 ml-1" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Reviews */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Detailed Reviews</h2>
          
          <div className="space-y-8">
            {lenders.map((lender) => (
              <div key={lender.id} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{lender.name} Review</h3>
                    <div className="flex items-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(lender.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-gray-600">{lender.rating}/5.0</span>
                    </div>
                  </div>
                  <a
                    href={lender.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Visit {lender.name}
                  </a>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Pros</h4>
                    <ul className="space-y-2">
                      {lender.pros.map((pro, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Cons</h4>
                    <ul className="space-y-2">
                      {lender.cons.map((con, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <X className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-3 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <Info className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-blue-900">Affiliate Disclosure</h4>
              <p className="text-sm text-blue-800 mt-1">
                BitcoinLoans.com receives compensation from some of the companies listed on this page. 
                This does not affect our ratings or recommendations. We strive to provide accurate, 
                unbiased information to help you make informed decisions. 
                <Link href="/legal/affiliate-disclosure" className="underline ml-1">Read full disclosure</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
