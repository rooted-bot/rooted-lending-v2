import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-rooted py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-emerald-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">ROOTED</span>
                <span className="text-emerald-500 font-semibold ml-1">Lending</span>
              </div>
            </div>
            <p className="text-sm">
              Real estate investor lending that actually closes. DSCR, Fix & Flip, Construction, 
              and more. NMLS #2744030
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Loan Products */}
          <div>
            <h4 className="text-white font-bold mb-6">Loan Products</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/loans/dscr" className="hover:text-emerald-400 transition-colors">DSCR Loans</Link>
              </li>
              <li>
                <Link href="/loans/fix-flip" className="hover:text-emerald-400 transition-colors">Fix & Flip</Link>
              </li>
              <li>
                <Link href="/loans/construction" className="hover:text-emerald-400 transition-colors">New Construction</Link>
              </li>
              <li>
                <Link href="/loans/bank-statement" className="hover:text-emerald-400 transition-colors">Bank Statement</Link>
              </li>
              <li>
                <Link href="/loans/dscr-construction" className="hover:text-emerald-400 transition-colors">DSCR Construction</Link>
              </li>
              <li>
                <Link href="/loans/conventional" className="hover:text-emerald-400 transition-colors">Conventional</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://dealanalyzer.rootedlending.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center">
                  Deal Analyzer
                  <span className="text-xs ml-2 text-emerald-500">↗</span>
                </a>
              </li>
              <li>
                <Link href="/calculators" className="hover:text-emerald-400 transition-colors">Calculators</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-emerald-400 transition-colors">Blog & Guides</Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-emerald-400 transition-colors">Success Stories</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-emerald-400 transition-colors">FAQ</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">(480) 555-1234</div>
                  <div className="text-sm">Mon-Fri 8am-6pm MST</div>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@rootedlending.com" className="hover:text-emerald-400 transition-colors">
                  info@rootedlending.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div>123 Main Street</div>
                  <div>Scottsdale, AZ 85254</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm">
              © 2025 Rooted Lending LLC. NMLS #2744030. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/legal/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/legal/disclaimer" className="hover:text-white transition-colors">Disclaimers</Link>
              <Link href="/legal/nmls" className="hover:text-white transition-colors">NMLS Consumer Access</Link>
            </div>
          </div>
          
          <div className="mt-6 text-xs text-gray-500 text-center">
            Rooted Lending LLC is an Equal Housing Lender. This site is not authorized by the New York State Department of Financial Services. 
            No mortgage solicitation activity or loan applications for properties located in the State of New York can be facilitated through this site.
          </div>
        </div>
      </div>
    </footer>
  );
}
