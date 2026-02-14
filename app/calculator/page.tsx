'use client';

import { useState } from 'react'
import { Calculator, Info, TrendingUp, AlertTriangle, DollarSign, Bitcoin } from 'lucide-react'

export default function LoanCalculator() {
  const [btcPrice, setBtcPrice] = useState(45000)
  const [btcAmount, setBtcAmount] = useState(1)
  const [ltv, setLtv] = useState(50)
  const [apr, setApr] = useState(10)
  const [termMonths, setTermMonths] = useState(12)

  // Calculations
  const collateralValue = btcPrice * btcAmount
  const loanAmount = collateralValue * (ltv / 100)
  const monthlyRate = apr / 100 / 12
  const monthlyPayment = loanAmount > 0 
    ? (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / (Math.pow(1 + monthlyRate, termMonths) - 1)
    : 0
  const totalInterest = monthlyPayment * termMonths - loanAmount
  const totalRepayment = loanAmount + totalInterest
  const liquidationPrice = btcPrice * (ltv / 100) / 0.85 // 85% is typical liquidation threshold
  const priceDropToLiquidation = ((btcPrice - liquidationPrice) / btcPrice) * 100

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Bitcoin Loan Calculator
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Calculate your loan amount, monthly payments, and liquidation risk before you apply.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Inputs */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Calculator className="h-6 w-6 mr-2 text-orange-500" />
                Loan Details
              </h2>

              <div className="space-y-6">
                {/* BTC Price */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Bitcoin Price
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="number"
                      value={btcPrice}
                      onChange={(e) => setBtcPrice(Number(e.target.value))}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>

                {/* BTC Amount */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bitcoin Collateral Amount
                  </label>
                  <div className="relative">
                    <Bitcoin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-orange-500" />
                    <input
                      type="number"
                      step="0.001"
                      value={btcAmount}
                      onChange={(e) => setBtcAmount(Number(e.target.value))}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Value: ${(btcPrice * btcAmount).toLocaleString()}
                  </p>
                </div>

                {/* LTV Slider */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan-to-Value (LTV) Ratio: {ltv}%
                  </label>
                  <input
                    type="range"
                    min="20"
                    max="70"
                    value={ltv}
                    onChange={(e) => setLtv(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>20% (Conservative)</span>
                    <span>70% (Maximum)</span>
                  </div>
                </div>

                {/* APR */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Annual Interest Rate (APR)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      step="0.1"
                      value={apr}
                      onChange={(e) => setApr(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
                  </div>
                </div>

                {/* Term */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Term (Months)
                  </label>
                  <select
                    value={termMonths}
                    onChange={(e) => setTermMonths(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value={3}>3 months</option>
                    <option value={6}>6 months</option>
                    <option value={12}>12 months</option>
                    <option value={24}>24 months</option>
                    <option value={36}>36 months</option>
                    <option value={60}>60 months</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              {/* Loan Summary */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Loan Summary</h2>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-orange-50 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-orange-600">
                      ${loanAmount.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">Loan Amount</div>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600">
                      ${monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">Monthly Payment</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Collateral Value</span>
                    <span className="font-semibold">${collateralValue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Loan-to-Value (LTV)</span>
                    <span className="font-semibold">{ltv}%</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Total Interest</span>
                    <span className="font-semibold">${totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-gray-600">Total Repayment</span>
                    <span className="font-bold text-lg">${totalRepayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                  </div>
                </div>
              </div>

              {/* Risk Analysis */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="h-6 w-6 mr-2 text-blue-500" />
                  Risk Analysis
                </h2>

                <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-red-900">Liquidation Risk</h3>
                      <p className="text-red-700 mt-1">
                        If Bitcoin drops to <strong>${liquidationPrice.toLocaleString(undefined, { maximumFractionDigits: 0 })}</strong>, 
                        your collateral will be liquidated.
                      </p>
                      <p className="text-red-600 text-sm mt-2">
                        That's a {priceDropToLiquidation.toFixed(1)}% drop from current price.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Liquidation Price</span>
                    <span className="font-semibold text-red-600">${liquidationPrice.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Safety Buffer</span>
                    <span className={`font-semibold ${priceDropToLiquidation > 30 ? 'text-green-600' : priceDropToLiquidation > 15 ? 'text-yellow-600' : 'text-red-600'}`}>
                      {priceDropToLiquidation.toFixed(1)}% drop allowed
                    </span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-gray-600">Risk Level</span>
                    <span className={`font-bold ${ltv <= 30 ? 'text-green-600' : ltv <= 50 ? 'text-yellow-600' : 'text-red-600'}`}>
                      {ltv <= 30 ? 'LOW' : ltv <= 50 ? 'MODERATE' : 'HIGH'}
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a
                href="/compare"
                className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center py-4 rounded-xl font-semibold text-lg transition-colors"
              >
                Compare Lenders & Apply
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
              <Info className="h-6 w-6 mr-2" />
              How to Use This Calculator
            </h3>
            <ul className="space-y-3 text-blue-800">
              <li className="flex items-start">
                <span className="font-bold mr-2">1.</span>
                Enter the current Bitcoin price and how much BTC you want to use as collateral.
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">2.</span>
                Adjust the LTV ratio. Higher LTV = more loan money but higher risk of liquidation.
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">3.</span>
                Enter the APR from your chosen lender (compare rates on our comparison page).
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">4.</span>
                Review the liquidation price and ensure you're comfortable with the risk.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
