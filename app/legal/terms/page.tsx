import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service | BitcoinLoans.com',
  description: 'Terms and conditions for using BitcoinLoans.com.',
}

export default function TermsPage() {
  return (
    <main className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600">
            Last updated: February 12, 2024
          </p>

          <p>
            Please read these Terms of Service ("Terms") carefully before using BitcoinLoans.com (the "Website") 
            operated by BitcoinLoans.com ("we," "us," or "our").
          </p>

          <p>
            Your access to and use of the Website is conditioned on your acceptance of and compliance with these Terms. 
            These Terms apply to all visitors, users, and others who access or use the Website.
          </p>

          <p>
            <strong>By accessing or using the Website, you agree to be bound by these Terms. If you disagree with any 
            part of the terms, you may not access the Website.</strong>
          </p>

          <h2>1. Use of the Website</h2>

          <h3>1.1 Eligibility</h3>
          <p>
            By using this Website, you represent and warrant that:
          </p>
          <ul>
            <li>You are at least 18 years of age</li>
            <li>You have the legal capacity to enter into these Terms</li>
            <li>You are not prohibited from using the Website under applicable laws</li>
            <li>You will use the Website in compliance with all applicable laws and regulations</li>
          </ul>

          <h3>1.2 Prohibited Uses</h3>
          <p>
            You agree not to use the Website:
          </p>
          <ul>
            <li>In any way that violates any applicable federal, state, local, or international law</li>
            <li>To transmit any material that is defamatory, obscene, or offensive</li>
            <li>To impersonate or attempt to impersonate any person or entity</li>
            <li>To engage in any conduct that restricts or inhibits anyone's use of the Website</li>
            <li>To attempt to gain unauthorized access to any portion of the Website</li>
            <li>To use any robot, spider, or other automatic device to access the Website</li>
            <li>To introduce any viruses, trojan horses, worms, or other harmful material</li>
          </ul>

          <h2>2. Intellectual Property</h2>

          <h3>2.1 Ownership</h3>
          <p>
            The Website and its original content, features, and functionality are and will remain the exclusive 
            property of BitcoinLoans.com and its licensors. The Website is protected by copyright, trademark, 
            and other laws of both the United States and foreign countries.
          </p>

          <h3>2.2 Limited License</h3>
          <p>
            We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use 
            the Website for your personal, non-commercial use. This license does not include:
          </p>
          <ul>
            <li>Modifying or copying the materials</li>
            <li>Using the materials for any commercial purpose</li>
            <li>Attempting to decompile or reverse engineer any software</li>
            <li>Removing any copyright or other proprietary notations</li>
            <li>Transferring the materials to another person</li>
          </ul>

          <h2>3. Affiliate Links and Third-Party Content</h2>

          <h3>3.1 Affiliate Relationships</h3>
          <p>
            The Website contains affiliate links to third-party lending platforms. When you click these links 
            and apply for products, we may receive compensation. This does not affect the price you pay.
          </p>

          <h3>3.2 Third-Party Websites</h3>
          <p>
            The Website may contain links to third-party websites or services that are not owned or controlled 
            by BitcoinLoans.com. We have no control over, and assume no responsibility for, the content, privacy 
            policies, or practices of any third-party websites.
          </p>

          <h3>3.3 No Endorsement</h3>
          <p>
            The inclusion of any link does not imply endorsement by BitcoinLoans.com of the site or any association 
            with its operators. We do not guarantee the accuracy, relevance, timeliness, or completeness of any 
            information on these external websites.
          </p>

          <h2>4. Disclaimer of Warranties</h2>

          <h3>4.1 No Financial Advice</h3>
          <p>
            The content on this Website is for informational purposes only and should not be construed as financial, 
            legal, or tax advice. We are not financial advisors, and the information provided does not constitute 
            recommendations for any specific financial action.
          </p>

          <h3>4.2 As Is Basis</h3>
          <p>
            THE WEBSITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. BITCOINLOANS.COM MAKES NO WARRANTIES, 
            EXPRESSED OR IMPLIED, AND HEREBY DISCLAIMS AND NEGATES ALL OTHER WARRANTIES INCLUDING, WITHOUT LIMITATION, 
            IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT 
            OF INTELLECTUAL PROPERTY.
          </p>

          <h3>4.3 No Guarantee of Accuracy</h3>
          <p>
            While we strive to provide accurate and up-to-date information, we do not warrant that:
          </p>
          <ul>
            <li>The information on the Website is accurate, complete, or current</li>
            <li>The Website will be available at all times</li>
            <li>Any errors will be corrected</li>
            <li>The Website is free of viruses or other harmful components</li>
          </ul>

          <h2>5. Limitation of Liability</h2>
          <p>
            IN NO EVENT SHALL BITCOINLOANS.COM, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES 
            BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT 
            LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
          </p>
          <ul>
            <li>Your access to or use of or inability to access or use the Website</li>
            <li>Any conduct or content of any third party on the Website</li>
            <li>Any content obtained from the Website</li>
            <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            <li>Decisions made based on information from the Website</li>
            <li>Losses related to cryptocurrency lending or investment</li>
          </ul>

          <h2>6. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless BitcoinLoans.com and its licensees and licensors, 
            and their employees, contractors, agents, officers, and directors, from and against any and all claims, 
            damages, obligations, losses, liabilities, costs or debt, and expenses arising from:
          </p>
          <ul>
            <li>Your use of and access to the Website</li>
            <li>Your violation of any term of these Terms</li>
            <li>Your violation of any third-party right</li>
            <li>Your violation of any applicable law</li>
          </ul>

          <h2>7. Termination</h2>
          <p>
            We may terminate or suspend your access to the Website immediately, without prior notice or liability, 
            for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
          <p>
            All provisions of the Terms which by their nature should survive termination shall survive termination, 
            including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the United States and the 
            State of [STATE], without regard to its conflict of law provisions.
          </p>
          <p>
            Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
          </p>

          <h2>9. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision 
            is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
          </p>
          <p>
            By continuing to access or use our Website after those revisions become effective, you agree to be bound 
            by the revised terms. If you do not agree to the new terms, please stop using the Website.
          </p>

          <h2>10. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us:
          </p>
          <ul>
            <li>By email: legal@bitcoinloans.com</li>
            <li>By visiting the contact page on our website</li>
          </ul>

          <h2>11. Entire Agreement</h2>
          <p>
            These Terms constitute the entire agreement between us regarding our Website and supersede and replace 
            any prior agreements we might have had between us regarding the Website.
          </p>

          <p className="text-sm text-gray-500 mt-8">
            By using BitcoinLoans.com, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
          </p>
        </div>
      </div>
    </main>
  )
}
