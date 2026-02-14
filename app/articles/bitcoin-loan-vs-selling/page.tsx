import Link from 'next/link'
import { ArrowLeft, Check, X } from 'lucide-react'

export const metadata = {
  title: 'Bitcoin Loan vs Selling: Which is Better? | BitcoinLoans.com',
  description: 'Should you take a loan against your Bitcoin or sell it? Compare tax implications, opportunity cost, and risks to make the best decision.',
}

export default function LoanVsSellingArticle() {
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
            <span className="bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full">Strategy</span>
            <span className="text-gray-400">February 10, 2024</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-400">7 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Bitcoin Loan vs Selling: Which is Better?
          </h1>
          <p className="text-xl text-gray-300">
            Compare the tax implications, opportunity costs, and risks of taking a Bitcoin loan versus selling your crypto.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg max-w-none">
        <p className="lead text-xl text-gray-600">
          One of the most common questions Bitcoin holders face is whether to sell their crypto for cash or take a 
          loan against it. The answer depends on your financial situation, tax implications, and market outlook.
        </p>

        <h2>The Scenario</h2>
        <p>
          Let's say you own 1 Bitcoin currently worth $45,000, and you need $20,000 in cash. You have two main options:
        </p>

        <div className="grid md:grid-cols-2 gap-8 my-8 not-prose">
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Option 1: Sell Bitcoin</h3>
            <ul className="space-y-2 text-blue-800">
              <li>Sell ~0.45 BTC for $20,000</li>
              <li>Keep ~0.55 BTC worth $25,000</li>
              <li>Pay capital gains tax on sale</li>
              <li>No ongoing obligations</li>
            </ul>
          </div>
          <div className="bg-green-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-green-900 mb-4">Option 2: Bitcoin Loan</h3>
            <ul className="space-y-2 text-green-800">
              <li>Keep all 1 BTC as collateral</li>
              <li>Borrow $20,000 cash</li>
              <li>Pay ~$150-200/month interest</li>
              <li>Risk of liquidation if BTC drops</li>
            </ul>
          </div>
        </div>

        <h2>Tax Comparison</h2>
        <p>
          Tax treatment is one of the biggest differences between these options.
        </p>

        <h3>Selling Bitcoin: Tax Implications</h3>
        <p>
          When you sell Bitcoin, you trigger a taxable event. Here's how it works:
        </p>
        <ul>
          <li><strong>Capital gains tax:</strong> You owe tax on the difference between your sale price and purchase price</li>
          <li><strong>Short-term vs long-term:</strong> Held less than 1 year = ordinary income tax rates; held more than 1 year = lower capital gains rates</li>
          <li><strong>Immediate liability:</strong> Tax is due when you file your return for that year</li>
        </ul>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8 not-prose">
          <h4 className="font-bold text-yellow-900 mb-2">Tax Example: Selling</h4>
          <ul className="space-y-1 text-yellow-800">
            <li>You bought 0.45 BTC for $10,000 (cost basis)</li>
            <li>You sell it for $20,000</li>
            <li>Capital gain: $10,000</li>
            <li>Tax owed (20% rate): <strong>$2,000</strong></li>
            <li>Net cash after tax: <strong>$18,000</strong></li>
          </ul>
        </div>

        <h3>Bitcoin Loan: Tax Implications</h3>
        <p>
          Taking a loan against your Bitcoin is generally not a taxable event:
        </p>
        <ul>
          <li><strong>No capital gains:</strong> You haven't sold your Bitcoin, so no gain is realized</li>
          <li><strong>Interest may be deductible:</strong> If you use the loan for investment purposes, interest may be tax-deductible</li>
          <li><strong>Future tax deferred:</strong> You pay tax only when you eventually sell the Bitcoin</li>
        </ul>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 not-prose">
          <h4 className="font-bold text-green-900 mb-2">Tax Example: Loan</h4>
          <ul className="space-y-1 text-green-800">
            <li>You borrow $20,000 using 0.5 BTC as collateral</li>
            <li>Interest rate: 10% APR</li>
            <li>Annual interest: $2,000</li>
            <li>If used for investments: Interest may be deductible</li>
            <li><strong>No immediate tax on the loan</strong></li>
          </ul>
        </div>

        <h2>Opportunity Cost Analysis</h2>
        <p>
          What happens to your remaining Bitcoin in each scenario?
        </p>

        <h3>If Bitcoin's Price Increases</h3>
        <p>
          Let's say Bitcoin doubles to $90,000 over the next year:
        </p>

        <div className="overflow-x-auto not-prose my-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left">Scenario</th>
                <th className="border border-gray-300 px-4 py-3 text-center">Bitcoin Remaining</th>
                <th className="border border-gray-300 px-4 py-3 text-center">Value at $90k BTC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Sell 0.45 BTC</td>
                <td className="border border-gray-300 px-4 py-3 text-center">0.55 BTC</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-bold">$49,500</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-gray-300 px-4 py-3">Take Loan (0.5 BTC collateral)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">1.0 BTC</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-bold text-green-700">$90,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Result:</strong> The loan leaves you with $40,500 more in Bitcoin value (minus interest paid).
        </p>

        <h3>If Bitcoin's Price Decreases</h3>
        <p>
          Now let's say Bitcoin drops to $22,500 (50% decrease):
        </p>

        <div className="overflow-x-auto not-prose my-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left">Scenario</th>
                <th className="border border-gray-300 px-4 py-3 text-center">Bitcoin Remaining</th>
                <th className="border border-gray-300 px-4 py-3 text-center">Value at $22.5k BTC</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-50">
                <td className="border border-gray-300 px-4 py-3">Sell 0.45 BTC</td>
                <td className="border border-gray-300 px-4 py-3 text-center">0.55 BTC</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-bold text-green-700">$12,375</td>
              </tr>
              <tr className="bg-red-50">
                <td className="border border-gray-300 px-4 py-3">Take Loan (0.5 BTC collateral)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">0.0 BTC (liquidated)</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-bold text-red-700">$0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Result:</strong> If Bitcoin drops significantly, the loan scenario results in liquidation and total loss of collateral.
        </p>

        <h2>Cost Comparison</h2>
        <p>
          Let's compare the total costs over one year for each option.
        </p>

        <h3>Selling Bitcoin Costs</h3>
        <ul>
          <li><strong>Capital gains tax:</strong> $2,000 (example above)</li>
          <li><strong>Transaction fees:</strong> 0.5-1% on exchange (~$100-200)</li>
          <li><strong>Opportunity cost:</strong> Lost upside if Bitcoin increases</li>
        </ul>
        <p className="font-semibold">Total first-year cost: ~$2,100-2,200</p>

        <h3>Bitcoin Loan Costs</h3>
        <ul>
          <li><strong>Interest (10% APR):</strong> $2,000 on $20,000 loan</li>
          <li><strong>Origination fee:</strong> 0-2% (~$0-400)</li>
          <li><strong>Risk premium:</strong> Potential liquidation if BTC drops</li>
        </ul>
        <p className="font-semibold">Total first-year cost: ~$2,000-2,400</p>

        <p>
          The costs are roughly similar in the first year, but the loan becomes more expensive over multiple years 
          due to ongoing interest payments.
        </p>

        <h2>When to Sell Bitcoin</h2>
        <p>
          Selling your Bitcoin may be the better option if:
        </p>
        <ul>
          <li><Check className="inline h-5 w-5 text-green-500 mr-2" />
            You have a <strong>short-term need</strong> (less than 1 year) — avoid ongoing interest
          </li>
          <li><Check className="inline h-5 w-5 text-green-500 mr-2" />
            You're <strong>bearish on Bitcoin</strong> in the near term — avoid liquidation risk
          </li>
          <li><Check className="inline h-5 w-5 text-green-500 mr-2" />
            You have <strong>capital losses</strong> to offset — tax-loss harvesting opportunity
          </li>
          <li><Check className="inline h-5 w-5 text-green-500 mr-2" />
            You need <strong>100% certainty</strong> — no liquidation risk
          </li>
          <li><Check className="inline h-5 w-5 text-green-500 mr-2" />
            You can sell at <strong>long-term capital gains rates</strong> — held >1 year
          </li>
        </ul>

        <h2>When to Take a Bitcoin Loan</h2>
        <p>
          A Bitcoin loan may be better if:
        </p>
        <ul>
          <li><Check className="inline h-5 w-5 text-green-500 mr-2" />
            You're <strong>bullish on Bitcoin</strong> — don't want to miss upside
          </li>
          <li><Check className="inline h-5 w-5 text-green-500 mr-2" />
            You face <strong>high short-term capital gains tax</strong> — held <1 year
          </li>
          <li><Check className="inline h-5 w-5 text-green-500 mr-2" />
            You have a <strong>longer-term need</strong> — can benefit from potential appreciation
          </li>
          <li><Check className="inline h-5 w-5 text-green-500 mr-2" />
            You have <strong>additional collateral</strong> — can add if BTC drops
          </li>
          <li><Check className="inline h-5 w-5 text-green-500 mr-2" />
            You're using funds for <strong>investment purposes</strong> — interest may be deductible
          </li>
        </ul>

        <h2>The Hybrid Approach</h2>
        <p>
          Some investors use a hybrid strategy:
        </p>
        <ol>
          <li><strong>Sell a portion:</strong> Sell enough Bitcoin to cover immediate needs plus tax liability</li>
          <li><strong>Loan the rest:</strong> If you need more cash than you're comfortable selling</li>
          <li><strong>Maintain exposure:</strong> Keep some Bitcoin for upside potential</li>
        </ol>
        <p>
          For example, sell 0.25 BTC for $11,250 (covers $10,000 need + $1,250 tax) and borrow $10,000 against 
          another 0.25 BTC. This reduces but doesn't eliminate your Bitcoin exposure.
        </p>

        <h2>Decision Framework</h2>
        <p>
          Ask yourself these questions:
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-8 not-prose">
          <h3 className="font-bold text-gray-900 mb-4">Decision Checklist</h3>
          <ul className="space-y-3 text-gray-700">
            <li>☐ How long do I need the money? (Shorter = lean toward selling)</li>
            <li>☐ What's my tax rate on capital gains? (Higher = lean toward loan)</li>
            <li>☐ How bullish am I on Bitcoin's price? (More bullish = lean toward loan)</li>
            <li>☐ Can I handle liquidation risk? (No = must sell)</li>
            <li>☐ Do I have backup funds to add collateral? (No = lean toward selling)</li>
            <li>☐ Is this for consumption or investment? (Investment = lean toward loan)</li>
          </ul>
        </div>

        <h2>Our Recommendation</h2>
        <p>
          <strong>For most investors:</strong> If you need cash for consumption (living expenses, car, vacation), 
          consider selling Bitcoin, especially if you can do so at long-term capital gains rates. The certainty 
          and lack of ongoing obligations outweigh the tax benefits of a loan.
        </p>
        <p>
          <strong>For investors:</strong> If you need cash to invest in other opportunities (real estate, business, 
          more Bitcoin), a loan may make sense. The potential return on investment could exceed the loan costs, 
          and you maintain your Bitcoin exposure.
        </p>

        <div className="bg-orange-50 rounded-xl p-8 my-8 not-prose text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Still Undecided?</h3>
          <p className="text-gray-600 mb-6">
            Use our calculator to model both scenarios and see the numbers for your specific situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/calculator" 
              className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Try the Calculator
            </Link>
            <Link 
              href="/compare" 
              className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Compare Loan Options
            </Link>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-12 pt-8 border-t">
          Last updated: February 10, 2024. Tax laws vary by jurisdiction. Consult a qualified tax professional 
          for advice specific to your situation.
        </p>
      </article>
    </main>
  )
}
