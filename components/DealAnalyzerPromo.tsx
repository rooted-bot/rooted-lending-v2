import Link from 'next/link';
import { Calculator, ArrowRight, TrendingUp, DollarSign, Clock } from 'lucide-react';

export default function DealAnalyzerPromo() {
  return (
    <section className="section-padding bg-emerald-900 text-white">
      <div className="container-rooted">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center bg-emerald-800 rounded-full px-4 py-2 text-sm font-medium">
              <Calculator className="h-4 w-4 mr-2" />
              Free Tool for Investors
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              Analyze Deals Like a Pro with Our Free Calculator
            </h2>
            
            <p className="text-emerald-100 text-lg">
              Before you apply for financing, know your numbers. Our deal analyzer helps you 
              calculate profit potential, estimate renovation costs, and determine your maximum offer.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-emerald-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="font-semibold">70% Rule Calculator</h4>
                  <p className="text-sm text-emerald-200">Know your max offer instantly</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-emerald-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="font-semibold">ROI Analysis</h4>
                  <p className="text-sm text-emerald-200">Cash-on-cash returns</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-emerald-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="font-semibold">Holding Cost Estimator</h4>
                  <p className="text-sm text-emerald-200">Factor in all expenses</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-emerald-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calculator className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="font-semibold">Deal Grading</h4>
                  <p className="text-sm text-emerald-200">A-F scoring system</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="https://dealanalyzer.rootedlending.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Try Deal Analyzer Free
                <ArrowRight className="h-5 w-5 ml-2" />
              </a>
              <Link href="/calculators" className="btn-outline border-white text-white hover:bg-white hover:text-emerald-900 inline-flex items-center justify-center">
                View All Calculators
              </Link>
            </div>
          </div>

          {/* Right Content - Screenshot Preview */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-xl shadow-2xl p-6 text-gray-900 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-4">
                <h3 className="font-bold text-lg">Deal Analysis</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Grade: A</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Purchase Price</span>
                  <span className="font-semibold">$450,000</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Renovation Budget</span>
                  <span className="font-semibold">$75,000</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">ARV</span>
                  <span className="font-semibold">$650,000</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Projected Profit</span>
                  <span className="font-bold text-green-600">$87,500</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Cash-on-Cash ROI</span>
                  <span className="font-bold text-green-600">34.2%</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="bg-emerald-50 rounded-lg p-4">
                  <div className="text-sm text-emerald-800 font-semibold mb-1">Max Offer (70% Rule)</div>
                  <div className="text-2xl font-bold text-emerald-700">$380,000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
