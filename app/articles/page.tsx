import Link from 'next/link'
import { BookOpen, Clock, ArrowRight } from 'lucide-react'

interface Article {
  slug: string
  title: string
  description: string
  readTime: string
  category: string
  publishedAt: string
}

const articles: Article[] = [
  {
    slug: 'best-bitcoin-loan-platforms',
    title: 'Best Bitcoin Loan Platforms for 2024',
    description: 'Comprehensive comparison of the top Bitcoin-backed lending platforms, including rates, terms, and features.',
    readTime: '8 min read',
    category: 'Reviews',
    publishedAt: '2024-02-01',
  },
  {
    slug: 'how-bitcoin-loans-work',
    title: 'How Do Bitcoin Loans Work? Complete Guide',
    description: 'Learn the mechanics of crypto-backed lending, from collateral requirements to repayment terms.',
    readTime: '12 min read',
    category: 'Guide',
    publishedAt: '2024-02-05',
  },
  {
    slug: 'bitcoin-loan-risks',
    title: 'Understanding Bitcoin Loan Risks',
    description: 'Important risks to consider before taking a Bitcoin-backed loan, including liquidation and margin calls.',
    readTime: '10 min read',
    category: 'Safety',
    publishedAt: '2024-02-08',
  },
  {
    slug: 'bitcoin-loan-vs-selling',
    title: 'Bitcoin Loan vs Selling: Which is Better?',
    description: 'Should you take a loan against your Bitcoin or sell it? We break down the tax and opportunity cost implications.',
    readTime: '7 min read',
    category: 'Strategy',
    publishedAt: '2024-02-10',
  },
  {
    slug: 'ltv-explained',
    title: 'Loan-to-Value (LTV) Explained for Crypto Loans',
    description: 'Understanding LTV ratios and how they affect your loan amount, interest rates, and liquidation risk.',
    readTime: '6 min read',
    category: 'Education',
    publishedAt: '2024-02-12',
  },
  {
    slug: 'tax-implications',
    title: 'Tax Implications of Bitcoin Loans',
    description: 'How Bitcoin-backed loans are treated for tax purposes in the US and strategies to minimize tax burden.',
    readTime: '9 min read',
    category: 'Taxes',
    publishedAt: '2024-02-15',
  },
  {
    slug: 'avoid-liquidation',
    title: 'How to Avoid Liquidation on Bitcoin Loans',
    description: 'Strategies to protect your collateral and avoid forced liquidation during market volatility.',
    readTime: '8 min read',
    category: 'Safety',
    publishedAt: '2024-02-18',
  },
  {
    slug: 'institutional-vs-retail',
    title: 'Institutional vs Retail Bitcoin Lending',
    description: 'How Bitcoin lending works for large institutional clients versus individual retail borrowers.',
    readTime: '7 min read',
    category: 'Industry',
    publishedAt: '2024-02-20',
  },
  {
    slug: 'bitcoin-loan-calculator-guide',
    title: 'How to Use a Bitcoin Loan Calculator',
    description: 'Step-by-step guide to calculating loan amounts, payments, and liquidation risks before borrowing.',
    readTime: '5 min read',
    category: 'Tools',
    publishedAt: '2024-02-22',
  },
  {
    slug: 'future-of-crypto-lending',
    title: 'The Future of Cryptocurrency Lending',
    description: 'Emerging trends in DeFi lending, regulatory developments, and what to expect in the coming years.',
    readTime: '11 min read',
    category: 'Industry',
    publishedAt: '2024-02-25',
  },
]

export default function ArticlesPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Bitcoin Loan Guides
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn everything you need to know about Bitcoin-backed loans, from beginner basics to advanced strategies.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.description}
                  </p>
                  
                  <Link
                    href={`/articles/${article.slug}`}
                    className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors"
                  >
                    Read Article
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="h-12 w-12 text-white mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated on Crypto Lending
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Get the latest guides, rate updates, and industry news delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-orange-200 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </main>
  )
}
