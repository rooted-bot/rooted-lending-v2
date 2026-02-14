import Link from 'next/link'

export const metadata = {
  title: 'Affiliate Disclosure | BitcoinLoans.com',
  description: 'Transparency about our affiliate relationships and how we monetize BitcoinLoans.com.',
}

export default function AffiliateDisclosurePage() {
  return (
    <main className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Affiliate Disclosure</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            BitcoinLoans.com believes in complete transparency. This page explains how we make money 
            and our relationships with the companies we review.
          </p>

          <h2>FTC Disclosure Compliance</h2>
          <p>
            In accordance with the Federal Trade Commission (FTC) guidelines, we are required to disclose 
            that BitcoinLoans.com has financial relationships with some of the companies mentioned on this website.
          </p>

          <h2>How We Make Money</h2>
          <p>
            BitcoinLoans.com is a for-profit website that generates revenue through:
          </p>
          
          <h3>1. Affiliate Commissions</h3>
          <p>
            When you click on links to lending platforms and complete applications or fund loans, we may 
            receive a commission. This comes at <strong>no additional cost to you</strong>. The lending 
            platform pays us a referral fee from their marketing budget.
          </p>

          <h3>2. Advertising</h3>
          <p>
            We may display advertisements from third parties. These are clearly marked as "Advertisement" 
            or "Sponsored."
          </p>

          <h3>3. Sponsored Content</h3>
          <p>
            Occasionally, we may publish sponsored content. Any sponsored article will be clearly labeled 
            at the top of the page.
          </p>

          <h2>Our Affiliate Partners</h2>
          <p>
            We currently have affiliate relationships with the following companies:
          </p>
          <ul>
            <li><strong>Nexo</strong> — Crypto lending platform</li>
            <li><strong>YouHodler</strong> — Crypto-backed loans</li>
            <li><strong>CoinRabbit</strong> — Anonymous crypto loans</li>
            <li><strong>SALT Lending</strong> — Institutional crypto lending</li>
          </ul>

          <h2>How This Affects Our Reviews</h2>
          <p>
            While we receive compensation from some of the companies we review, this does not influence 
            our ratings or recommendations. Our editorial team maintains complete independence, and we 
            strive to provide accurate, unbiased information.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <h3 className="font-bold text-blue-900 mb-2">Our Editorial Promise</h3>
            <p className="text-blue-800">
              We will never let affiliate relationships compromise the integrity of our reviews. If a 
              product or service is subpar, we will say so regardless of our financial relationship with 
              the company.
            </p>
          </div>

          <h2>How We Choose Partners</h2>
          <p>
            We only establish affiliate relationships with companies that meet our standards for:
          </p>
          <ul>
            <li><strong>Security:</strong> Proper custody solutions and insurance</li>
            <li><strong>Regulation:</strong> Compliance with applicable laws</li>
            <li><strong>Transparency:</strong> Clear terms and fee structures</li>
            <li><strong>Reputation:</strong> Positive track record and user reviews</li>
            <li><strong>Customer Service:</strong> Responsive support teams</li>
          </ul>

          <h2>Identifying Affiliate Links</h2>
          <p>
            Affiliate links on our site can be identified by:
          </p>
          <ul>
            <li>Special tracking parameters in the URL (e.g., ?ref=, ?aff=)</li>
            <li>Buttons or text labeled with phrases like "Apply Now" or "Get Started"</li>
            <li>Context within comparison tables or review sections</li>
          </ul>

          <h2>No Cost to You</h2>
          <p>
            Using our affiliate links does not increase the cost of products or services for you. The 
            lending platform pays us a referral fee from their marketing budget, not from your pocket.
          </p>

          <h2>Updates to This Disclosure</h2>
          <p>
            We will update this disclosure as our affiliate relationships change. Please check this page 
            periodically for the most current information.
          </p>

          <h2>Questions?</h2>
          <p>
            If you have questions about our affiliate relationships or this disclosure, please contact us at{' '}
            <a href="mailto:affiliates@bitcoinloans.com" className="text-orange-500 hover:underline">
              affiliates@bitcoinloans.com
            </a>
          </p>

          <p className="text-sm text-gray-500 mt-8">
            Last updated: February 12, 2024
          </p>
        </div>
      </div>
    </main>
  )
}
