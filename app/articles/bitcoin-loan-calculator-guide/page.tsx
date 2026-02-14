import Link from 'next/link'
import { ArrowLeft, Calculator, Check, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'How to Use a Bitcoin Loan Calculator | BitcoinLoans.com',
  description: 'Step-by-step guide to using a Bitcoin loan calculator. Learn to estimate payments, liquidation risk, and compare scenarios before borrowing.',
}

export default function CalculatorGuideArticle() {
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
            <span className="bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full">Tools</span>
            <span className="text-gray-400">February 22, 2024</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-400">5 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How to Use a Bitcoin Loan Calculator
          </h1>
          <p className="text-xl text-gray-300">
            Master our loan calculator to estimate payments, understand liquidation risk, and make informed borrowing decisions.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg max-w-none">
        <p className="lead text-xl text-gray-600">
          Before taking a Bitcoin loan, you need to know exactly what you're getting into. Our calculator 
          helps you understand the numbers that matter most.
        </p>

        <h2>Why Use a Bitcoin Loan Calculator?</h2>
        <p>
          A loan calculator takes the guesswork out of Bitcoin lending. Instead of estimating in your head, 
          you'll have precise numbers for:
        </p>
        <ul>
          <li>How much you can borrow based on your Bitcoin</li>
          <li>Your monthly payment obligations</li>
          <li>Total interest costs over the loan term</li>
          <li>The exact Bitcoin price that triggers liquidation</li>
          <li>How different LTV ratios affect your risk</li>
        </ul>

        <div className="bg-blue-50 rounded-xl p-6 my-8 not-prose">
          <h3 className="font-bold text-blue-900 mb-4 flex items-center">
            <Calculator className="h-5 w-5 mr-2" />
            Quick Start
          </h3>
          <p className="text-blue-800 mb-4">
            Jump right in and try the calculator while reading this guide:
          </p>
          <Link 
            href="/calculator" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Open Calculator
          </Link>
        </div>

        <h2>Step 1: Enter Your Bitcoin Details</h2>
        
        <h3>Current Bitcoin Price</h3>
        <p>
          Start by entering the current market price of Bitcoin. You can find this on:
        </p>
        <ul>
          <li>CoinMarketCap</li>
          <li>CoinGecko</li>
          <li>Your exchange</li>
          <li>Our calculator (which updates automatically)</li>
        </ul>
        <p>
          <strong>Why it matters:</strong> The Bitcoin price directly determines how much cash you can borrow. 
          A $5,000 difference in price could mean $2,500+ difference in your loan amount at 50% LTV.
        </p>

        <h3>Bitcoin Amount</h3>
        <p>
          Enter how much Bitcoin you're willing to use as collateral. Remember:
        </p>
        <ul>
          <li>You don't have to use all your Bitcoin</li>
          <li>Consider keeping some Bitcoin unencumbered</li>
          <li>You can always add more collateral later</li>
        </ul>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8 not-prose">
          <h3 className="font-bold text-yellow-900 mb-2">💡 Pro Tip</h3>
          <p className="text-yellow-800">
            Start by calculating with 50-75% of your total Bitcoin. This gives you a conservative baseline, 
            and you can adjust up or down based on your comfort level.
          </p>
        </div>

        <h2>Step 2: Choose Your Loan-to-Value (LTV)</h2>
        <p>
          The LTV slider is the most important control in the calculator. It determines your loan amount 
          and your liquidation risk.
        </p>

        <h3>Understanding LTV Options</h3>
        <div className="grid md:grid-cols-3 gap-4 my-8 not-prose">
          <div className="bg-green-50 rounded-xl p-4">
            <h4 className="font-bold text-green-900">20-30% LTV</h4>
            <ul className="text-sm text-green-800 mt-2 space-y-1">
              <li>✅ Conservative</li>
              <li>✅ 70-80% buffer</li>
              <li>✅ Sleep well at night</li>
              <li>❌ Less cash</li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-xl p-4">
            <h4 className="font-bold text-blue-900">40-50% LTV</h4>
            <ul className="text-sm text-blue-800 mt-2 space-y-1">
              <li>✅ Balanced</li>
              <li>✅ 50-60% buffer</li>
              <li>✅ Good cash amount</li>
              <li>⚠️ Monitor regularly</li>
            </ul>
          </div>
          <div className="bg-red-50 rounded-xl p-4">
            <h4 className="font-bold text-red-900">60-70% LTV</h4>
            <ul className="text-sm text-red-800 mt-2 space-y-1">
              <li>✅ Maximum cash</li>
              <li>⚠️ 30-40% buffer</li>
              <li>❌ High risk</li>
              <li>❌ Not for beginners</li>
            </ul>
          </div>
        </div>

        <h3>How to Choose Your LTV</h3>
        <ol>
          <li><strong>Determine your need:</strong> How much cash do you actually need?</li>
          <li><strong>Work backwards:</strong> What LTV gets you that amount?</li>
          <li><strong>Check the liquidation price:</strong> Are you comfortable with that risk?</li>
          <li><strong>Adjust:</strong> Lower LTV if the liquidation price makes you nervous</li>
        </ol>

        <h2>Step 3: Enter Interest Rate (APR)</h2>
        <p>
          Enter the Annual Percentage Rate (APR) from your chosen lender. Typical rates:
        </p>
        <ul>
          <li><strong>Nexo:</strong> 0% - 13.9%</li>
          <li><strong>YouHodler:</strong> 2.5% - 13%</li>
          <li><strong>CoinRabbit:</strong> 12% - 17%</li>
          <li><strong>SALT:</strong> 9.99% - 14.99%</li>
        </ul>

        <h3>Where to Find Your Rate</h3>
        <p>
          Your actual rate depends on:
        </p>
        <ul>
          <li>The platform you choose</li>
          <li>Your LTV ratio (higher LTV = higher rate)</li>
          <li>Any loyalty programs or token holdings</li>
          <li>Current market conditions</li>
        </ul>
        <p>
          Check our <Link href="/compare" className="text-orange-500 hover:underline">lender comparison page</Link> for current rates.
        </p>

        <h2>Step 4: Select Loan Term</h2>
        <p>
          Choose how long you need the loan. Most platforms offer:
        </p>
        <ul>
          <li><strong>3-6 months:</strong> Short-term needs, lower total interest</li>
          <li><strong>12 months:</strong> Standard term, balanced approach</li>
          <li><strong>24-36 months:</strong> Longer projects, higher total interest</li>
          <li><strong>Open-ended:</strong> Some platforms have no fixed term</li>
        </ul>

        <h3>How Term Affects Your Loan</h3>
        <div className="bg-gray-50 rounded-xl p-6 my-8 not-prose">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-2">Term</th>
                <th className="text-center py-2">Monthly Payment</th>
                <th className="text-center py-2">Total Interest</th>
                <th className="text-left py-2">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">3 months</td>
                <td className="text-center">Higher</td>
                <td className="text-center">Lower</td>
                <td className="text-sm">Bridge financing</td>
              </tr>
              <tr>
                <td className="py-2">12 months</td>
                <td className="text-center">Moderate</td>
                <td className="text-center">Moderate</td>
                <td className="text-sm">Most situations</td>
              </tr>
              <tr>
                <td className="py-2">36 months</td>
                <td className="text-center">Lower</td>
                <td className="text-center">Higher</td>
                <td className="text-sm">Long-term projects</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Step 5: Analyze the Results</h2>
        <p>
          Once you've entered all your information, the calculator shows several key metrics:
        </p>

        <h3>Loan Summary Section</h3>
        <ul>
          <li><strong>Loan Amount:</strong> How much cash you'll receive</li>
          <li><strong>Monthly Payment:</strong> Your ongoing obligation</li>
          <li><strong>Total Interest:</strong> Cost of borrowing over the full term</li>
          <li><strong>Total Repayment:</strong> Principal + interest you'll pay back</li>
        </ul>

        <h3>Risk Analysis Section</h3>
        <p>
          This is the most important part for protecting yourself:
        </p>
        <ul>
          <li><strong>Liquidation Price:</strong> The Bitcoin price that triggers forced sale</li>
          <li><strong>% Drop to Liquidation:</strong> How much Bitcoin can fall before you're at risk</li>
          <li><strong>Risk Level:</strong> Low, Moderate, or High based on your LTV</li>
        </ul>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 not-prose">
          <h3 className="font-bold text-red-900 mb-2">⚠️ Critical Check</h3>
          <p className="text-red-800">
            If your liquidation price is within 30% of current Bitcoin price, your risk is high. 
            Consider lowering your LTV until you're comfortable with the buffer.
          </p>
        </div>

        <h2>Step 6: Compare Scenarios</h2>
        <p>
          The real power of the calculator comes from comparing different scenarios. Try:
        </p>

        <h3>Scenario A: Conservative Approach</h3>
        <ul>
          <li>LTV: 30%</li>
          <li>APR: 8%</li>
          <li>Term: 12 months</li>
        </ul>
        <p>
          <strong>Result:</strong> Lower loan amount, but massive liquidation buffer. Sleep well at night.
        </p>

        <h3>Scenario B: Balanced Approach</h3>
        <ul>
          <li>LTV: 50%</li>
          <li>APR: 10%</li>
          <li>Term: 12 months</li>
        </ul>
        <p>
          <strong>Result:</strong> Good loan amount with reasonable risk. Most popular choice.
        </p>

        <h3>Scenario C: Aggressive Approach</h3>
        <ul>
          <li>LTV: 70%</li>
          <li>APR: 13%</li>
          <li>Term: 6 months</li>
        </ul>
        <p>
          <strong>Result:</strong> Maximum cash, but high risk and interest. Only for short-term needs with backup funds.
        </p>

        <h2>Advanced Calculator Features</h2>

        <h3>Testing Price Drops</h3>
        <p>
          Manually adjust the Bitcoin price downward to see:
        </p>
        <ul>
          <li>How your LTV changes</li>
          <li>When you'd hit liquidation</li>
          <li>How much buffer you really have</li>
        </ul>

        <h3>Adding Collateral</h3>
        <p>
          See what happens if you:
        </p>
        <ul>
          <li>Add more Bitcoin as collateral</li>
          <li>Make a partial repayment</li>
          <li>Reduce your loan amount</li>
        </ul>

        <h2>Red Flags to Watch For</h2>
        <p>
          When using the calculator, be concerned if you see:
        </p>
        <ul>
          <li>❌ <strong>Liquidation price above $0:</strong> Actually impossible — this means you're already liquidated</li>
          <li>❌ <strong>Less than 20% drop to liquidation:</strong> Very risky, Bitcoin drops 20% regularly</li>
          <li>❌ <strong>Monthly payment &gt; 10% of income:</strong> You may struggle to repay</li>
          <li>❌ <strong>Total interest &gt; 25% of loan:</strong> Very expensive borrowing</li>
          <li>❌ <strong>Can't sleep thinking about it:</strong> Your LTV is too high for your risk tolerance</li>
        </ul>

        <h2>Making Your Decision</h2>
        <p>
          After running the numbers, ask yourself:
        </p>
        <ol>
          <li>Can I afford the monthly payments?</li>
          <li>Am I comfortable with the liquidation price?</li>
          <li>Do I have backup funds if Bitcoin drops?</li>
          <li>Is the total cost of borrowing reasonable for my need?</li>
          <li>Would I be devastated if liquidated?</li>
        </ol>

        <div className="bg-green-50 rounded-xl p-6 my-8 not-prose">
          <h3 className="font-bold text-green-900 mb-4">✅ Ready to Proceed If:</h3>
          <ul className="space-y-2 text-green-800">
            <li>Monthly payment fits your budget</li>
            <li>Liquidation price is at least 30% below current price</li>
            <li>You have 20%+ of loan value in backup funds</li>
            <li>Total interest cost makes sense for your use case</li>
            <li>You can handle the stress of monitoring</li>
          </ul>
        </div>

        <h2>Next Steps</h2>
        <p>
          Once you've found a scenario that works:
        </p>
        <ol>
          <li><strong>Screenshot your results</strong> — Save the numbers for reference</li>
          <li><strong>Set price alerts</strong> — Know when you're approaching danger zones</li>
          <li><strong>Prepare backup funds</strong> — Have cash ready to add as collateral</li>
          <li><strong>Choose a lender</strong> — Compare platforms based on your calculated needs</li>
          <li><strong>Start small</strong> — Consider a smaller test loan first</li>
        </ol>

        <div className="bg-orange-50 rounded-xl p-8 my-8 not-prose text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Calculate?</h3>
          <p className="text-gray-600 mb-6">
            Put what you've learned into practice with our interactive calculator.
          </p>
          <Link 
            href="/calculator" 
            className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors inline-flex items-center"
          >
            Launch Calculator
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>

        <p className="text-sm text-gray-500 mt-12 pt-8 border-t">
          Last updated: February 22, 2024. Calculator results are estimates for planning purposes. 
          Actual loan terms may vary based on platform and market conditions.
        </p>
      </article>
    </main>
  )
}
