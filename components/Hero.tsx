import Link from 'next/link';
import { ArrowRight, Clock, TrendingUp, Shield, Calculator } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-rooted section-padding relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center bg-emerald-700/50 rounded-full px-4 py-2 text-sm font-medium">
              <span className="bg-amber-500 text-white rounded-full w-2 h-2 mr-2"></span>
              Close in 5-10 Days | NMLS #2744030
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Real Estate Investor Loans{' '}
              <span className="text-amber-400">That Actually Close</span>
            </h1>
            
            <p className="text-xl text-emerald-100 max-w-xl">
              DSCR, Fix & Flip, Construction, and Bank Statement loans for serious investors. 
              Competitive rates. Fast approvals. No BS.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/apply" className="btn-secondary text-center flex items-center justify-center">
                Get Pre-Approved
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
              <Link href="/calculators" className="btn-outline bg-white/10 border-white text-white hover:bg-white hover:text-emerald-900 text-center flex items-center justify-center">
                <Calculator className="h-5 w-5 mr-2" />
                Run the Numbers
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-emerald-700/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">5-10</div>
                <div className="text-sm text-emerald-200">Days to Close</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">$500M+</div>
                <div className="text-sm text-emerald-200">Loans Funded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">4.9★</div>
                <div className="text-sm text-emerald-200">Client Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Calculator Preview */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-gray-900">
              <h3 className="text-2xl font-bold mb-6 text-center">Quick Rate Quote</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Loan Type</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                    <option>DSCR Loan</option>
                    <option>Fix & Flip</option>
                    <option>New Construction</option>
                    <option>Bank Statement</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Property Value</label>
                  <input 
                    type="text" 
                    placeholder="$500,000"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount</label>
                  <input 
                    type="text" 
                    placeholder="$400,000"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Credit Score</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                    <option>720+ (Excellent)</option>
                    <option>680-719 (Good)</option>
                    <option>640-679 (Fair)</option>
                    <option>Below 640</option>
                  </select>
                </div>

                <button className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-4 rounded-lg transition-colors">
                  Get My Rate
                </button>
              </div>

              <p className="text-xs text-gray-500 text-center mt-4">
                No credit pull. Instant estimate.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Stats Bar */}
      <div className="bg-white shadow-lg">
        <div className="container-rooted py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Clock className="h-8 w-8 text-emerald-700" />
              <div className="text-left">
                <div className="font-bold text-gray-900">5-10 Days</div>
                <div className="text-sm text-gray-500">Average Close</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <TrendingUp className="h-8 w-8 text-emerald-700" />
              <div className="text-left">
                <div className="font-bold text-gray-900">90% LTC</div>
                <div className="text-sm text-gray-500">Construction Loans</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Shield className="h-8 w-8 text-emerald-700" />
              <div className="text-left">
                <div className="font-bold text-gray-900">No Income</div>
                <div className="text-sm text-gray-500">DSCR Required</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Calculator className="h-8 w-8 text-emerald-700" />
              <div className="text-left">
                <div className="font-bold text-gray-900">Free Tools</div>
                <div className="text-sm text-gray-500">Deal Analysis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
