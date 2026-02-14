'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ChevronDown, Calculator } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loanDropdownOpen, setLoanDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  const loanProducts = [
    { name: 'DSCR Loans', href: '/loans/dscr', description: 'Income-based qualification' },
    { name: 'Fix & Flip', href: '/loans/fix-flip', description: 'Fast renovation financing' },
    { name: 'New Construction', href: '/loans/construction', description: 'Ground-up builds' },
    { name: 'Bank Statement', href: '/loans/bank-statement', description: 'For self-employed' },
    { name: 'DSCR Construction', href: '/loans/dscr-construction', description: 'Build-to-rent projects' },
    { name: 'Conventional', href: '/loans/conventional', description: 'Traditional mortgages' },
  ];

  const resources = [
    { name: 'Deal Analyzer', href: 'https://dealanalyzer.rootedlending.com', description: 'Free property analysis tool', external: true },
    { name: 'Loan Calculators', href: '/calculators', description: 'DSCR, flip & construction' },
    { name: 'Blog & Guides', href: '/blog', description: 'Investor education' },
    { name: 'Market Reports', href: '/market-reports', description: 'Local investment data' },
    { name: 'Success Stories', href: '/testimonials', description: 'Client case studies' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-rooted">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-emerald-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">ROOTED</span>
              <span className="text-emerald-700 font-semibold ml-1">Lending</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-emerald-700 font-medium transition-colors">
              Home
            </Link>
            
            {/* Loan Products Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center text-gray-700 hover:text-emerald-700 font-medium transition-colors"
                onMouseEnter={() => setLoanDropdownOpen(true)}
                onMouseLeave={() => setLoanDropdownOpen(false)}
              >
                Loan Products
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              
              {loanDropdownOpen && (
                <div 
                  className="absolute top-full left-0 w-72 bg-white shadow-xl rounded-lg py-2 mt-2 border border-gray-100"
                  onMouseEnter={() => setLoanDropdownOpen(true)}
                  onMouseLeave={() => setLoanDropdownOpen(false)}
                >
                  {loanProducts.map((product) => (
                    <Link
                      key={product.name}
                      href={product.href}
                      className="block px-4 py-3 hover:bg-emerald-50 transition-colors"
                    >
                      <div className="font-semibold text-gray-900">{product.name}</div>
                      <div className="text-sm text-gray-500">{product.description}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center text-gray-700 hover:text-emerald-700 font-medium transition-colors"
                onMouseEnter={() => setResourcesDropdownOpen(true)}
                onMouseLeave={() => setResourcesDropdownOpen(false)}
              >
                Resources
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              
              {resourcesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 w-72 bg-white shadow-xl rounded-lg py-2 mt-2 border border-gray-100"
                  onMouseEnter={() => setResourcesDropdownOpen(true)}
                  onMouseLeave={() => setResourcesDropdownOpen(false)}
                >
                  {resources.map((resource) => (
                    <Link
                      key={resource.name}
                      href={resource.href}
                      target={resource.external ? '_blank' : undefined}
                      rel={resource.external ? 'noopener noreferrer' : undefined}
                      className="block px-4 py-3 hover:bg-emerald-50 transition-colors"
                    >
                      <div className="font-semibold text-gray-900 flex items-center">
                        {resource.name}
                        {resource.external && <span className="text-xs ml-2 text-emerald-600">↗</span>}
                      </div>
                      <div className="text-sm text-gray-500">{resource.description}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="text-gray-700 hover:text-emerald-700 font-medium transition-colors">
              About
            </Link>
            
            <Link href="/contact" className="text-gray-700 hover:text-emerald-700 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:4805551234" className="flex items-center text-emerald-700 font-semibold hover:text-emerald-800">
              <Phone className="h-5 w-5 mr-2" />
              (480) 555-1234
            </a>
            <Link href="/apply" className="btn-primary">
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-4">
            <div className="space-y-4">
              <Link href="/" className="block px-4 py-2 text-gray-700 font-medium">
                Home
              </Link>
              
              <div className="px-4">
                <div className="font-semibold text-gray-900 mb-2">Loan Products</div>
                <div className="space-y-2 pl-4">
                  {loanProducts.map((product) => (
                    <Link
                      key={product.name}
                      href={product.href}
                      className="block py-1 text-gray-600 hover:text-emerald-700"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="px-4">
                <div className="font-semibold text-gray-900 mb-2">Resources</div>
                <div className="space-y-2 pl-4">
                  {resources.map((resource) => (
                    <Link
                      key={resource.name}
                      href={resource.href}
                      target={resource.external ? '_blank' : undefined}
                      rel={resource.external ? 'noopener noreferrer' : undefined}
                      className="block py-1 text-gray-600 hover:text-emerald-700"
                    >
                      {resource.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/about" className="block px-4 py-2 text-gray-700 font-medium">
                About
              </Link>
              
              <Link href="/contact" className="block px-4 py-2 text-gray-700 font-medium">
                Contact
              </Link>

              <div className="px-4 pt-4">
                <Link href="/apply" className="btn-primary block text-center">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
