import Hero from '@/components/Hero';
import LoanProducts from '@/components/LoanProducts';
import DealAnalyzerPromo from '@/components/DealAnalyzerPromo';
import Testimonials from '@/components/Testimonials';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Hero />
      <LoanProducts />
      <DealAnalyzerPromo />
      
      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-rooted">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Investors Choose Rooted Lending
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We're not just another lender. We're investors ourselves, and we understand 
                what it takes to close deals fast.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-emerald-700" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-900">Investor-First Approach</h3>
                    <p className="text-gray-600">We know what matters: speed, certainty, and terms that make deals work.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-emerald-700" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-900">We Shop Multiple Lenders</h3>
                    <p className="text-gray-600">We make banks compete for your business to get you the best possible rate.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-emerald-700" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-900">Real People, Real Service</h3>
                    <p className="text-gray-600">You'll work with the same team from application to closing. No call centers.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-emerald-700" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-900">Close in 5-10 Days</h3>
                    <p className="text-gray-600">We understand that time kills deals. Our process is built for speed.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-emerald-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get Your Personalized Rate Quote
              </h3>
              <p className="text-gray-600 mb-6">
                No credit pull. No obligation. Just honest numbers so you can evaluate your deal.
              </p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount Needed</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                    placeholder="$500,000"
                  />
                </div>
                
                <button className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-4 rounded-lg transition-colors">
                  Get My Rate Quote
                </button>
              </div>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                We respect your privacy. No spam, ever.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Testimonials />
      
      {/* CTA Section */}
      <section className="section-padding bg-emerald-900 text-white">
        <div className="container-rooted text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Fund Your Next Deal?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Whether you're flipping your first property or financing your next development, 
            we're here to help you close fast and profitably.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply" className="btn-secondary text-lg px-8 py-4">
              Apply Now
              <ArrowRight className="h-5 w-5 ml-2 inline" />
            </Link>
            <a href="tel:4805551234" className="btn-outline border-white text-white hover:bg-white hover:text-emerald-900 text-lg px-8 py-4">
              <Phone className="h-5 w-5 mr-2 inline" />
              Call (480) 555-1234
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
