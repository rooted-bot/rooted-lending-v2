import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Loan-to-Value (LTV) Explained for Crypto Loans | BitcoinLoans.com',
  description: 'Understanding LTV ratios is critical for Bitcoin loans. Learn how LTV affects your loan amount, interest rates, and liquidation risk.',
}

export default function LTVExplainedArticle() {
  return (
    <main className="bg-white min-h-screen">
      {/* Article Header */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/articles" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Guides
          </Link>
          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">Education</span>
            <span className="text-gray-400">February 12, 2024</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-400">6 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Loan-to-Value (LTV) Explained
          </h1>
          <p className="text-xl text-gray-300">
            Master LTV ratios to optimize your Bitcoin loan and minimize liquidation risk.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg max-w-none">
        <p className="lead text-xl text-gray-600">
          Loan-to-Value (LTV) is the most important number in Bitcoin lending. It determines how much you 
          can borrow, your interest rate, and most importantly — your risk of liquidation.
        </p>

        <h2>What Is Loan-to-Value (LTV)?</h2>
        <p>
          LTV is the ratio of your loan amount to the value of your collateral, expressed as a percentage.
        </p>

        <div className="bg-blue-50 rounded-xl p-8 my-8 not-prose">
          <h3 className="font-bold text-blue-900 mb-4 text-xl text-center">LTV Formula</h3>
          <div className="text-center text-2xl font-mono bg-white rounded-lg p-6">
            LTV = (Loan Amount ÷ Collateral Value) × 100
          </div>
        </div>

        <h3>Simple Example</h3>
        <div className="bg-gray-50 rounded-xl p-6 my-8 not-prose">
          <ul className="space-y-2 text-gray-700">
            <li>You have: <strong>1 Bitcoin</strong> worth <strong>$45,000</strong></li>
            <li>You want to borrow: <strong>$22,500</strong></li>
            <li className="pt-2 border-t border-gray-200 font-semibold">
              LTV = ($22,500 ÷ $45,000) × 100 = <strong>50%</strong>
            </li>
          </ul>
        </div>

        <h2>Why LTV Matters</h2>
        <p>
          LTV affects every aspect of your Bitcoin loan:
        </p>

        <h3>1. How Much You Can Borrow</h3>
        <p>
          Higher LTV = More cash from the same collateral
        </p>
        <div className="overflow-x-auto not-prose my-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left">LTV</th>
                <th className="border border-gray-300 px-4 py-3 text-center">BTC Collateral</th>
                <th className="border border-gray-300 px-4 py-3 text-center">Loan Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">30%</td>
                <td className="border border-gray-300 px-4 py-3 text-center">1 BTC ($45k)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">$13,500</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold">50%</td>
                <td className="border border-gray-300 px-4 py-3 text-center">1 BTC ($45k)</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-semibold">$22,500</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">70%</td>
                <td className="border border-gray-300 px-4 py-3 text-center">1 BTC ($45k)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">$31,500</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">90%</td>
                <td className="border border-gray-300 px-4 py-3 text-center">1 BTC ($45k)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">$40,500</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>2. Your Interest Rate</h3>
        <p>
          Higher LTV usually means higher interest rates because the lender takes more risk.
        </p>
        <div className="overflow-x-auto not-prose my-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left">LTV Tier</th>
                <th className="border border-gray-300 px-4 py-3 text-center">Typical APR</th>
                <th className="border border-gray-300 px-4 py-3 text-center">Risk Level</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-50">
                <td className="border border-gray-300 px-4 py-3">20-30%</td>
                <td className="border border-gray-300 px-4 py-3 text-center">0-5%</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-700 font-semibold">Low</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="border border-gray-300 px-4 py-3">40-50%</td>
                <td className="border border-gray-300 px-4 py-3 text-center">5-10%</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-blue-700 font-semibold">Moderate</td>
              </tr>
              <tr className="bg-yellow-50">
                <td className="border border-gray-300 px-4 py-3">60-70%</td>
                <td className="border border-gray-300 px-4 py-3 text-center">10-15%</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-yellow-700 font-semibold">High</td>
              </tr>
              <tr className="bg-red-50">
                <td className="border border-gray-300 px-4 py-3">80-90%</td>
                <td className="border border-gray-300 px-4 py-3 text-center">15%+</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-red-700 font-semibold">Very High</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>3. Your Liquidation Risk</h3>
        <p>
          This is the most critical factor. Higher LTV = Less buffer = Higher liquidation risk.
        </p>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 not-prose">
          <h3 className="font-bold text-red-900 mb-4">Liquidation Price by LTV</h3>
          <p className="text-red-800 mb-4">
            Assuming Bitcoin at $45,000 and liquidation at 120% of loan value:
          </p>
          <ul className="space-y-2 text-red-800">
            <li><strong>30% LTV:</strong> Liquidation at $10,800 (76% drop allowed)</li>
            <li><strong>50% LTV:</strong> Liquidation at $27,000 (40% drop allowed)</li>
            <li><strong>70% LTV:</strong> Liquidation at $37,800 (16% drop allowed)</li>
            <li><strong>90% LTV:</strong> Liquidation at $48,600 (IMPOSSIBLE — liquidation immediate)</li>
          </ul>
        </div>

        <h2>Recommended LTV by Risk Tolerance</h2>

        <h3>Conservative (20-30% LTV)</h3>
        <p>
          <strong>Best for:</strong> Risk-averse borrowers, first-time users, those who can't afford to lose their Bitcoin
        </p>
        <ul>
          <li>✅ Very low liquidation risk</li>
          <li>✅ Lowest interest rates</li>
          <li>✅ Peace of mind</li>
          <li>❌ Less cash available</li>
        </ul>

        <h3>Moderate (40-50% LTV)</h3>
        <p>
          <strong>Best for:</strong> Most borrowers, balanced approach
        </p>
        <ul>
          <li>✅ Reasonable liquidation buffer</li>
          <li>✅ Competitive interest rates</li>
          <li>✅ Good balance of cash vs. risk</li>
          <li>⚠️ Requires monitoring</li>
        </ul>

        <h3>Aggressive (60-70% LTV)</h3>
        <p>
          <strong>Best for:</strong> Experienced borrowers, short-term needs, those with backup collateral
        </p>
        <ul>
          <li>✅ Maximum cash from collateral</li>
          <li>✅ Good for short-term opportunities</li>
          <li>⚠️ High liquidation risk</li>
          <li>⚠️ Higher interest rates</li>
          <li>❌ Not recommended for beginners</li>
        </ul>

        <h3>Maximum (80-90% LTV)</h3>
        <p>
          <strong>Best for:</strong> Emergency situations only, expert users with substantial reserves
        </p>
        <ul>
          <li>✅ Access nearly all collateral value</li>
          <li>❌ Extreme liquidation risk</li>
          <li>❌ Highest interest rates</li>
          <li>❌ Requires constant monitoring</li>
          <li>❌ Generally not recommended</li>
        </ul>

        <h2>How to Choose Your LTV</h2>
        <p>
          Ask yourself these questions:
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-8 not-prose">
          <h3 className="font-bold text-gray-900 mb-4">LTV Decision Framework</h3>
          <ol className="space-y-4 text-gray-700">
            <li>
              <strong>How much do I really need?</strong>
              <p className="text-sm text-gray-600 mt-1">Don't max out LTV just because you can. Borrow only what you need.</p>
            </li>
            <li>
              <strong>Can I add more collateral if Bitcoin drops?</strong>
              <p className="text-sm text-gray-600 mt-1">If yes, you can consider higher LTV. If no, stay conservative.</p>
            </li>
            <li>
              <strong>How long is the loan term?</strong>
              <p className="text-sm text-gray-600 mt-1">Longer terms = more time for volatility = lower LTV recommended.</p>
            </li>
            <li>
              <strong>What's my backup plan?</strong>
              <p className="text-sm text-gray-600 mt-1">Have a plan if Bitcoin drops 30%, 40%, or 50%.</p>
            </li>
            <li>
              <strong>How will I sleep at night?</strong>
              <p className="text-sm text-gray-600 mt-1">If high LTV causes anxiety, choose a lower, more comfortable ratio.</p>
            </li>
          </ol>
        </div>

        <h2>Platform LTV Limits</h2>
        <p>
          Different platforms offer different maximum LTVs:
        </p>
        <ul>
          <li><strong>Nexo:</strong> Up to 70% LTV</li>
          <li><strong>YouHodler:</strong> Up to 90% LTV (highest in industry)</li>
          <li><strong>CoinRabbit:</strong> Up to 70% LTV</li>
          <li><strong>SALT Lending:</strong> Up to 70% LTV</li>
        </ul>

        <h2>Practical Examples</h2>

        <h3>Example 1: Emergency Fund</h3>
        <div className="bg-gray-50 rounded-xl p-6 my-6 not-prose">
          <p className="text-gray-700">
            <strong>Need:</strong> $10,000 for medical emergency<br/>
            <strong>Have:</strong> 1 BTC worth $45,000<br/>
            <strong>Recommendation:</strong> 25% LTV = $11,250 loan
          </p>
          <p className="text-green-700 mt-2 text-sm">
            ✅ Conservative, plenty of buffer, peace of mind during stressful time
          </p>
        </div>

        <h3>Example 2: Investment Opportunity</h3>
        <div className="bg-gray-50 rounded-xl p-6 my-6 not-prose">
          <p className="text-gray-700">
            <strong>Need:</strong> $30,000 for real estate down payment<br/>
            <strong>Have:</strong> 2 BTC worth $90,000<br/>
            <strong>Recommendation:</strong> 35% LTV = $31,500 loan using 1 BTC
          </p>
          <p className="text-blue-700 mt-2 text-sm">
            ✅ Moderate, keeps 1 BTC free, good for appreciating asset purchase
          </p>
        </div>

        <h3>Example 3: Business Cash Flow</h3>
        <div className="bg-gray-50 rounded-xl p-6 my-6 not-prose">
          <p className="text-gray-700">
            <strong>Need:</strong> $50,000 for inventory<br/>
            <strong>Have:</strong> 1.5 BTC worth $67,500<br/>
            <strong>Have:</strong> $20,000 cash reserves<br/>
            <strong>Recommendation:</strong> 50% LTV = $33,750 + sell some BTC
          </p>
          <p className="text-yellow-700 mt-2 text-sm">
            ⚠️ Better to split between loan and sale to reduce risk
          </p>
        </div>

        <h2>Key Takeaways</h2>
        <ul>
          <li><strong>LTV is your risk dial:</strong> Lower = safer, higher = riskier</li>
          <li><strong>30-50% LTV is the sweet spot</strong> for most borrowers</li>
          <li><strong>Never use 90% LTV</strong> unless you fully understand and accept the extreme risk</li>
          <li><strong>Your LTV changes</strong> as Bitcoin's price changes — monitor it</li>
          <li><strong>Higher LTV = higher interest rates</strong> on most platforms</li>
        </ul>

        <div className="bg-orange-50 rounded-xl p-8 my-8 not-prose text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Calculate Your Optimal LTV</h3>
          <p className="text-gray-600 mb-6">
            Use our calculator to see different LTV scenarios and liquidation prices.
          </p>
          <Link 
            href="/calculator" 
            className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors inline-block"
          >
            Try the Calculator
          </Link>
        </div>

        <p className="text-sm text-gray-500 mt-12 pt-8 border-t">
          Last updated: February 12, 2024. This article is for educational purposes only and does not constitute financial advice.
        </p>
      </article>
    </main>
  )
}
