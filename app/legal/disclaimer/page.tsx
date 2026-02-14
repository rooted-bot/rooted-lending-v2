import Link from 'next/link'

export const metadata = {
  title: 'Risk Disclaimer | BitcoinLoans.com',
  description: 'Important risk disclosures regarding Bitcoin-backed loans and cryptocurrency lending.',
}

export default function DisclaimerPage() {
  return (
    <main className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Risk Disclaimer</h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
            <p className="text-red-800 font-semibold mb-2">Important Notice</p>
            <p className="text-red-700">
              Bitcoin-backed loans involve significant financial risk, including the potential loss of your 
              cryptocurrency collateral. Please read this disclaimer carefully before using any lending platform.
            </p>
          </div>

          <h2>1. Cryptocurrency Volatility Risk</h2>
          <p>
            Cryptocurrencies, including Bitcoin, are highly volatile assets. The value of your collateral 
            can fluctuate dramatically in short periods. A significant price drop can trigger liquidation 
            of your collateral, resulting in the loss of your cryptocurrency.
          </p>

          <h2>2. Liquidation Risk</h2>
          <p>
            If the value of your collateral falls below a certain threshold (typically 85-90% of your loan 
            value), the lending platform may automatically sell your cryptocurrency to repay the loan. This 
            process is called liquidation and can result in:
          </p>
          <ul>
            <li>Complete loss of your collateral</li>
            <li>Remaining debt if sale proceeds don't cover the loan</li>
            <li>Tax implications from the forced sale</li>
            <li>No ability to recover your cryptocurrency</li>
          </ul>

          <h2>3. Platform Risk</h2>
          <p>
            Cryptocurrency lending platforms may be subject to:
          </p>
          <ul>
            <li><strong>Security breaches:</strong> Hacking or theft of funds</li>
            <li><strong>Regulatory action:</strong> Government shutdowns or restrictions</li>
            <li><strong>Insolvency:</strong> Platform bankruptcy or inability to return collateral</li>
            <li><strong>Technical failures:</strong> System errors preventing access to your funds</li>
          </ul>

          <h2>4. Not Financial Advice</h2>
          <p>
            The information provided on BitcoinLoans.com is for educational purposes only and should not 
            be construed as financial advice. We are not financial advisors, and the content on this site 
            does not constitute recommendations for any specific financial action.
          </p>
          <p>
            <strong>Always consult with a qualified financial advisor before making investment or borrowing 
            decisions.</strong>
          </p>

          <h2>5. Affiliate Disclosure</h2>
          <p>
            BitcoinLoans.com participates in affiliate marketing programs. We receive compensation when 
            you click on links to lending platforms and complete applications. This compensation may influence 
            which products we review and how we present them. However, our reviews and ratings are based 
            on our independent research and analysis.
          </p>

          <h2>6. No Guarantees</h2>
          <p>
            We make no guarantees regarding:
          </p>
          <ul>
            <li>The accuracy or completeness of information on this website</li>
            <li>Current rates, terms, or availability of lending products</li>
            <li>The financial stability or security of any lending platform</li>
            <li>Future performance of cryptocurrency values</li>
            <li>Approval for any loan application</li>
          </ul>

          <h2>7. Regulatory Considerations</h2>
          <p>
            Cryptocurrency lending regulations vary by jurisdiction and are subject to change. It is your 
            responsibility to ensure compliance with local laws. Some jurisdictions may:
          </p>
          <ul>
            <li>Prohibit cryptocurrency lending entirely</li>
            <li>Require specific licenses or registrations</li>
            <li>Impose reporting or tax obligations</li>
            <li>Not provide consumer protections for crypto loans</li>
          </ul>

          <h2>8. Tax Implications</h2>
          <p>
            Cryptocurrency loans may have tax implications, including:
          </p>
          <ul>
            <li>Interest deduction limitations</li>
            <li>Capital gains implications from liquidation</li>
            <li>Reporting requirements in your jurisdiction</li>
          </ul>
          <p>
            Consult with a tax professional familiar with cryptocurrency in your jurisdiction.
          </p>

          <h2>9. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, BitcoinLoans.com and its operators shall not be liable 
            for any direct, indirect, incidental, special, consequential, or punitive damages resulting from:
          </p>
          <ul>
            <li>Your use of or inability to use this website</li>
            <li>Any lending platform recommended or linked from this website</li>
            <li>Any losses related to cryptocurrency lending or borrowing</li>
            <li>Decisions made based on information from this website</li>
          </ul>

          <h2>10. Acknowledgment</h2>
          <p>
            By using this website and/or applying for cryptocurrency loans, you acknowledge that you:
          </p>
          <ul>
            <li>Have read and understood this risk disclaimer</li>
            <li>Understand the risks associated with cryptocurrency lending</li>
            <li>Are of legal age and capacity to enter into loan agreements</li>
            <li>Accept full responsibility for your financial decisions</li>
            <li>Will not hold BitcoinLoans.com liable for any losses</li>
          </ul>

          <div className="bg-gray-100 rounded-lg p-6 mt-8">
            <h3 className="font-bold text-gray-900 mb-2">Questions?</h3>
            <p className="text-gray-700">
              If you have questions about this disclaimer, please contact us at{' '}
              <a href="mailto:legal@bitcoinloans.com" className="text-orange-500 hover:underline">
                legal@bitcoinloans.com
              </a>
            </p>
          </div>

          <p className="text-sm text-gray-500 mt-8">
            Last updated: February 12, 2024
          </p>
        </div>
      </div>
    </main>
  )
}
