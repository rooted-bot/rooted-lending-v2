import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | BitcoinLoans.com',
  description: 'Our commitment to protecting your privacy and personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600">
            Last updated: February 12, 2024
          </p>

          <p>
            BitcoinLoans.com ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
            explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>

          <h2>1. Information We Collect</h2>
          
          <h3>1.1 Personal Information</h3>
          <p>
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul>
            <li>Subscribe to our newsletter</li>
            <li>Contact us via email</li>
            <li>Fill out forms on our website</li>
            <li>Participate in surveys or promotions</li>
          </ul>
          <p>
            This information may include your name, email address, and any other information you choose to provide.
          </p>

          <h3>1.2 Automatically Collected Information</h3>
          <p>
            When you visit our website, we automatically collect certain information about your device and usage, including:
          </p>
          <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referring website</li>
            <li>Pages you view</li>
            <li>Date and time of your visit</li>
            <li>Time spent on pages</li>
            <li>Click patterns</li>
          </ul>

          <h3>1.3 Cookies and Tracking Technologies</h3>
          <p>
            We use cookies and similar tracking technologies to track activity on our website and store certain 
            information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Provide, maintain, and improve our website</li>
            <li>Send you newsletters and updates (if subscribed)</li>
            <li>Respond to your comments and questions</li>
            <li>Monitor and analyze usage patterns</li>
            <li>Detect, prevent, and address technical issues</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>3. Disclosure of Your Information</h2>
          <p>
            We may share your information with:
          </p>

          <h3>3.1 Service Providers</h3>
          <p>
            We may share your information with third-party vendors, service providers, contractors, or agents who 
            perform services for us or on our behalf.
          </p>

          <h3>3.2 Affiliate Partners</h3>
          <p>
            When you click on affiliate links and apply for products, the respective company may receive information 
            about your referral. Please review their privacy policies for more information.
          </p>

          <h3>3.3 Legal Requirements</h3>
          <p>
            We may disclose your information if required to do so by law or in response to valid requests by public 
            authorities (e.g., a court or government agency).
          </p>

          <h3>3.4 Business Transfers</h3>
          <p>
            If we are involved in a merger, acquisition, or asset sale, your information may be transferred as part 
            of that transaction.
          </p>

          <h2>4. Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to protect your personal information. 
            However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot 
            guarantee absolute security.
          </p>

          <h2>5. Third-Party Websites</h2>
          <p>
            Our website may contain links to third-party websites. We have no control over and assume no responsibility 
            for the content, privacy policies, or practices of any third-party sites or services.
          </p>

          <h2>6. Children's Privacy</h2>
          <p>
            Our website is not intended for use by children under the age of 18. We do not knowingly collect personal 
            information from children under 18. If we learn we have collected personal information from a child under 
            18, we will delete that information.
          </p>

          <h2>7. Your Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul>
            <li>The right to access your personal information</li>
            <li>The right to correct inaccurate information</li>
            <li>The right to request deletion of your information</li>
            <li>The right to restrict or object to processing</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>
          <p>
            To exercise these rights, please contact us at privacy@bitcoinloans.com.
          </p>

          <h2>8. Data Retention</h2>
          <p>
            We will retain your personal information only for as long as is necessary for the purposes set out in this 
            Privacy Policy, or as required by law.
          </p>

          <h2>9. International Data Transfers</h2>
          <p>
            Your information may be transferred to — and maintained on — computers located outside of your state, 
            province, country, or other governmental jurisdiction where data protection laws may differ from those 
            in your jurisdiction.
          </p>

          <h2>10. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
            Privacy Policy on this page and updating the "Last updated" date.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul>
            <li>By email: privacy@bitcoinloans.com</li>
            <li>By visiting the contact page on our website</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
