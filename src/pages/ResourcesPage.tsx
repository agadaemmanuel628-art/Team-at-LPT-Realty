import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useRouter } from '../context/RouterContext';
import {
  Calculator,
  FileCheck2,
  Download,
  DollarSign,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  BookOpen,
} from 'lucide-react';

export const ResourcesPage: React.FC = () => {
  const { navigate } = useRouter();
  const [activeTab, setActiveTab] = useState<'mortgage' | 'affordability' | 'closing' | 'checklists'>('mortgage');

  // Mortgage Calculator State
  const [mPrice, setMPrice] = useState(1200000);
  const [mDownPct, setMDownPct] = useState(20);
  const [mRate, setMRate] = useState(6.5);
  const [mTerm, setMTerm] = useState(30);
  const [mTaxesAnnual, setMTaxesAnnual] = useState(18000);

  const mDownAmt = (mPrice * mDownPct) / 100;
  const mPrincipal = mPrice - mDownAmt;
  const mMonthlyRate = mRate / 100 / 12;
  const mPayments = mTerm * 12;
  const mPI =
    mMonthlyRate > 0
      ? (mPrincipal * (mMonthlyRate * Math.pow(1 + mMonthlyRate, mPayments))) /
        (Math.pow(1 + mMonthlyRate, mPayments) - 1)
      : mPrincipal / mPayments;
  const mMonthlyTaxes = mTaxesAnnual / 12;
  const mMonthlyIns = 180;
  const mTotalMonthly = Math.round(mPI + mMonthlyTaxes + mMonthlyIns);

  // Affordability Calculator State
  const [annualIncome, setAnnualIncome] = useState(250000);
  const [monthlyDebts, setMonthlyDebts] = useState(1200);
  const [downPaymentSavings, setDownPaymentSavings] = useState(250000);
  // Using standard 36% DTI rule
  const maxMonthlyPaymentAllowed = (annualIncome / 12) * 0.36 - monthlyDebts;
  const estimatedAffordablePrice = Math.max(
    400000,
    Math.round((maxMonthlyPaymentAllowed * 150) + downPaymentSavings)
  );

  // Download state simulation
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const handleDownload = (guideName: string) => {
    setDownloadSuccess(guideName);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 3500);
  };

  return (
    <div className="space-y-16 pb-16">
      <Breadcrumbs items={[{ label: 'Resources & Calculators' }]} />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24A]">
            Financial Tools & Guides
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-[#12284C] mt-2 leading-tight">
            Long Island Real Estate Toolkit
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-light">
            Plan your purchase or sale with precision. Use our interactive mortgage and affordability calculators, review closing cost estimates, and access our proprietary buyer and seller checklists.
          </p>
        </div>
      </section>

      {/* Resource Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex rounded-xl bg-slate-100 p-1.5 overflow-x-auto gap-1">
          <button
            onClick={() => setActiveTab('mortgage')}
            className={`flex-1 py-2.5 px-4 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'mortgage'
                ? 'bg-white shadow text-[#12284C]'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Mortgage Calculator
          </button>
          <button
            onClick={() => setActiveTab('affordability')}
            className={`flex-1 py-2.5 px-4 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'affordability'
                ? 'bg-white shadow text-[#12284C]'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Affordability Calculator
          </button>
          <button
            onClick={() => setActiveTab('closing')}
            className={`flex-1 py-2.5 px-4 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'closing'
                ? 'bg-white shadow text-[#12284C]'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Closing Cost Estimator
          </button>
          <button
            onClick={() => setActiveTab('checklists')}
            className={`flex-1 py-2.5 px-4 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'checklists'
                ? 'bg-white shadow text-[#12284C]'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Checklists & Guides
          </button>
        </div>
      </section>

      {/* TAB 1: MORTGAGE CALCULATOR */}
      {activeTab === 'mortgage' && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-5">
              <h3 className="text-xl font-serif font-bold text-[#12284C]">
                Mortgage Payment Parameters
              </h3>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Home Purchase Price: ${mPrice.toLocaleString()}
                </label>
                <input
                  type="range"
                  min={500000}
                  max={4000000}
                  step={50000}
                  value={mPrice}
                  onChange={(e) => setMPrice(Number(e.target.value))}
                  className="w-full accent-[#12284C] cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Down Payment ({mDownPct}%): ${mDownAmt.toLocaleString()}
                </label>
                <input
                  type="range"
                  min={5}
                  max={50}
                  step={5}
                  value={mDownPct}
                  onChange={(e) => setMDownPct(Number(e.target.value))}
                  className="w-full accent-[#12284C] cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Interest Rate ({mRate}%)
                </label>
                <input
                  type="range"
                  min={4.0}
                  max={9.0}
                  step={0.125}
                  value={mRate}
                  onChange={(e) => setMRate(Number(e.target.value))}
                  className="w-full accent-[#12284C] cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Annual Property Taxes: ${mTaxesAnnual.toLocaleString()}
                </label>
                <input
                  type="range"
                  min={8000}
                  max={45000}
                  step={1000}
                  value={mTaxesAnnual}
                  onChange={(e) => setMTaxesAnnual(Number(e.target.value))}
                  className="w-full accent-[#12284C] cursor-pointer"
                />
              </div>
            </div>

            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Total Estimated Payment
                </span>
                <div className="text-3xl sm:text-4xl font-serif font-black text-[#12284C] mt-1">
                  ${mTotalMonthly.toLocaleString()} <span className="text-xs font-sans text-slate-500">/ month</span>
                </div>

                <div className="mt-6 space-y-3 text-xs border-t border-slate-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Principal & Interest:</span>
                    <span className="font-bold text-slate-900">${Math.round(mPI).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Property Taxes:</span>
                    <span className="font-bold text-slate-900">${Math.round(mMonthlyTaxes).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Homeowners Insurance:</span>
                    <span className="font-bold text-slate-900">${mMonthlyIns}</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-200 pt-2 font-bold text-[#12284C]">
                    <span>Total Monthly Outlay:</span>
                    <span>${mTotalMonthly.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <button
                  onClick={() => navigate('/listings')}
                  className="w-full bg-[#12284C] text-white py-3 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#1A335E] transition-colors cursor-pointer"
                >
                  Search Homes in This Budget
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* TAB 2: AFFORDABILITY CALCULATOR */}
      {activeTab === 'affordability' && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-5">
              <h3 className="text-xl font-serif font-bold text-[#12284C]">
                Income & Debt Inputs
              </h3>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Gross Annual Household Income: ${annualIncome.toLocaleString()}
                </label>
                <input
                  type="range"
                  min={100000}
                  max={750000}
                  step={10000}
                  value={annualIncome}
                  onChange={(e) => setAnnualIncome(Number(e.target.value))}
                  className="w-full accent-[#12284C] cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Monthly Existing Debts (Cars, Loans, Credit): ${monthlyDebts.toLocaleString()}
                </label>
                <input
                  type="range"
                  min={0}
                  max={5000}
                  step={100}
                  value={monthlyDebts}
                  onChange={(e) => setMonthlyDebts(Number(e.target.value))}
                  className="w-full accent-[#12284C] cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Available Down Payment Savings: ${downPaymentSavings.toLocaleString()}
                </label>
                <input
                  type="range"
                  min={50000}
                  max={1000000}
                  step={25000}
                  value={downPaymentSavings}
                  onChange={(e) => setDownPaymentSavings(Number(e.target.value))}
                  className="w-full accent-[#12284C] cursor-pointer"
                />
              </div>
            </div>

            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Estimated Purchasing Power
                </span>
                <div className="text-3xl sm:text-4xl font-serif font-black text-[#12284C] mt-1">
                  ${estimatedAffordablePrice.toLocaleString()}
                </div>
                <p className="text-xs text-slate-600 mt-2">
                  Based on a conservative 36% Debt-to-Income (DTI) ratio adhering to Fannie Mae / Freddie Mac qualified mortgage guidelines.
                </p>

                <div className="mt-6 space-y-2 text-xs border-t border-slate-200 pt-4 text-slate-700">
                  <div className="flex justify-between">
                    <span>Target Monthly Housing Cap:</span>
                    <span className="font-bold">${Math.round(maxMonthlyPaymentAllowed).toLocaleString()} / mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Target Towns In Budget:</span>
                    <span className="font-bold text-[#C8A24A]">Garden City, Syosset, Huntington</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full bg-[#12284C] text-white py-3 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#1A335E] transition-colors cursor-pointer"
                >
                  Connect with a Preferred Lender
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* TAB 3: CLOSING COST ESTIMATOR */}
      {activeTab === 'closing' && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-6">
            <h3 className="text-xl font-serif font-bold text-[#12284C]">
              Long Island Buyer & Seller Closing Cost Breakdown
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
              New York State involves specific statutory taxes and transfer charges that differ between buyers and sellers. Here is what to anticipate:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {/* Buyer Costs */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-xs">
                <h4 className="font-serif font-bold text-base text-[#12284C]">
                  Home Buyer Closing Costs (~3% to 4.5%)
                </h4>
                <ul className="space-y-2.5 text-slate-700">
                  <li className="flex justify-between border-b border-slate-200 pb-1.5">
                    <span>NYS Mortgage Recording Tax</span>
                    <span className="font-bold">1.05% of loan amount</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-200 pb-1.5">
                    <span>Title Insurance (Owner & Lender)</span>
                    <span className="font-bold">~0.45% – 0.6%</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-200 pb-1.5">
                    <span>Buyer Attorney Legal Fee</span>
                    <span className="font-bold">$2,000 – $3,500</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-200 pb-1.5">
                    <span>Bank Appraisal & Processing</span>
                    <span className="font-bold">$800 – $1,500</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Prepaid Taxes & Insurance Escrows</span>
                    <span className="font-bold">3–6 Months Reserve</span>
                  </li>
                </ul>
              </div>

              {/* Seller Costs */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-xs">
                <h4 className="font-serif font-bold text-base text-[#12284C]">
                  Home Seller Closing Costs (~6% to 8%)
                </h4>
                <ul className="space-y-2.5 text-slate-700">
                  <li className="flex justify-between border-b border-slate-200 pb-1.5">
                    <span>Real Estate Brokerage Fee</span>
                    <span className="font-bold">Agreed listing split</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-200 pb-1.5">
                    <span>NYS Transfer Tax</span>
                    <span className="font-bold">$4.00 per $1,000 ($0.4%)</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-200 pb-1.5">
                    <span>Seller Attorney Legal Fee</span>
                    <span className="font-bold">$2,000 – $3,500</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-200 pb-1.5">
                    <span>Property Tax Pro-Rations</span>
                    <span className="font-bold">Credited or Debited</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Payoff of Existing Mortgage</span>
                    <span className="font-bold">Includes satisfaction fee</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* TAB 4: CHECKLISTS & DOWNLOADABLE GUIDES */}
      {activeTab === 'checklists' && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <BookOpen className="w-8 h-8 text-[#C8A24A] mb-3" />
                <h3 className="text-lg font-serif font-bold text-[#12284C]">
                  The Long Island Home Buyer Checklist (PDF)
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  A comprehensive 24-step checklist covering pre-approval documentation, property inspection questions, school boundary verification, and closing table essentials.
                </p>

                <div className="mt-4 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A24A]" />
                    <span>LIRR Commute & Parking Guide</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A24A]" />
                    <span>Questions for the Home Engineer</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  onClick={() => handleDownload('Buyer Checklist')}
                  className="w-full bg-[#12284C] text-white py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#1A335E] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-[#C8A24A]" />
                  <span>Download Buyer Checklist</span>
                </button>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <BookOpen className="w-8 h-8 text-[#C8A24A] mb-3" />
                <h3 className="text-lg font-serif font-bold text-[#12284C]">
                  The 30-Day Seller Preparation Roadmap (PDF)
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Our blueprint for preparing your Long Island residence for launch: staging punch lists, paint touchups, curb appeal upgrades, and necessary certificate of occupancy filings.
                </p>

                <div className="mt-4 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A24A]" />
                    <span>7 High-ROI Cosmetic Upgrades</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A24A]" />
                    <span>NYS Property Condition Checklist</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  onClick={() => handleDownload('Seller Roadmap')}
                  className="w-full bg-[#12284C] text-white py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#1A335E] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-[#C8A24A]" />
                  <span>Download Seller Roadmap</span>
                </button>
              </div>
            </div>
          </div>

          {downloadSuccess && (
            <div className="mt-6 p-4 bg-emerald-50 border border-emerald-300 rounded-xl text-center text-xs text-emerald-800 font-semibold animate-[fadeIn_0.2s_ease-out]">
              ✓ {downloadSuccess} has been downloaded to your device!
            </div>
          )}
        </section>
      )}
    </div>
  );
};
