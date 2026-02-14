import Link from 'next/link';
import { 
  Building, 
  Wallet, 
  HardHat, 
  FileText, 
  Home, 
  TrendingUp,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const loanProducts = [
  {
    icon: TrendingUp,
    name: 'DSCR Loans',
    description: 'Qualify based on property income, not personal income. Perfect for rental property investors.',
    features: ['No personal income verification', 'Up to 80% LTV', '30-year terms available', 'Portfolio loans'],
    rate: 'Starting at 7.5%',
    cta: 'Learn More',
    href: '/loans/dscr',
    popular: true,
  },
  {
    icon: Building,
    name: 'Fix & Flip',
    description: 'Fast funding for purchase and renovation. Interest-only payments during rehab.',
    features: ['Up to 90% of purchase + 100% rehab', '12-18 month terms', 'Interest-only', 'No prepay penalties'],
    rate: 'Starting at 10.5%',
    cta: 'Learn More',
    href: '/loans/fix-flip',
    popular: false,
  },
  {
    icon: HardHat,
    name: 'New Construction',
    description: 'Ground-up construction financing for spec homes and build-to-rent projects.',
    features: ['Up to 90% LTC', 'Interest reserves available', '12-month terms', 'Draw management'],
    rate: 'Starting at 10.5%',
    cta: 'Learn More',
    href: '/loans/construction',
    popular: false,
  },
  {
    icon: Wallet,
    name: 'Bank Statement',
    description: 'For self-employed investors. Qualify using 12-24 months of bank deposits.',
    features: ['No tax returns needed', 'Personal or business accounts', 'Up to 80% LTV', '30-year terms'],
    rate: 'Starting at 8.5%',
    cta: 'Learn More',
    href: '/loans/bank-statement',
    popular: false,
  },
  {
    icon: TrendingUp,
    name: 'DSCR Construction',
    description: 'Build-to-rent financing with takeout to long-term DSCR loan built in.',
    features: ['Construction + permanent loan', 'One close', 'No income verification', 'Cash flow based'],
    rate: 'Starting at 9.5%',
    cta: 'Learn More',
    href: '/loans/dscr-construction',
    popular: false,
  },
  {
    icon: Home,
    name: 'Conventional',
    description: 'Traditional investment property loans with competitive rates.',
    features: ['Best rates for qualified buyers', 'Up to 80% LTV', 'Fixed & ARM options', 'Fannie/Freddie loans'],
    rate: 'Starting at 7.0%',
    cta: 'Learn More',
    href: '/loans/conventional',
    popular: false,
  },
];

export default function LoanProducts() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-rooted">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Loan Programs for Every Strategy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're buying rentals, flipping houses, or building from the ground up, 
            we have the right financing solution.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loanProducts.map((product) => (
            <div 
              key={product.name}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
                product.popular ? 'ring-2 ring-emerald-500' : ''
              }`}
            >
              {product.popular && (
                <div className="bg-emerald-500 text-white text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                  <product.icon className="h-7 w-7 text-emerald-700" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {product.description}
                </p>

                <div className="space-y-3 mb-6">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <div className="text-sm text-gray-500 mb-1">Starting Rate</div>
                  <div className="text-2xl font-bold text-emerald-700 mb-4">
                    {product.rate}
                  </div>
                  
                  <Link 
                    href={product.href}
                    className="flex items-center justify-center w-full py-3 border-2 border-emerald-700 text-emerald-700 font-semibold rounded-lg hover:bg-emerald-700 hover:text-white transition-colors"
                  >
                    {product.cta}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Not sure which loan is right for your deal?
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center">
            Talk to a Loan Officer
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
