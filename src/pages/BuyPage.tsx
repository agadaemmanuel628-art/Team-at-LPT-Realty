import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useRouter, Link } from '../context/RouterContext';
import { FAQS } from '../data/mockData';
import {
  Search,
  CheckCircle2,
  FileText,
  Key,
  ShieldCheck,
  TrendingUp,
  DollarSign,
  ChevronDown,
  ArrowRight,
  BookOpen,
} from 'lucide-react';

export const BuyPage: React.FC = () => {
  const { navigate } = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const buyingSteps = [
    {
      step: '01',
      title: 'Mortgage Pre-Approval & Financial Modeling',
      desc: 'Obtain verified mortgage underwriting from a premier New York lender. We help calculate down payment options, Nassau/Suffolk property tax escrows, and your exact purchasing power before touring.',
    },
    {
      step: '02',
      title: 'Strategic Buyer Consultation',
      desc: 'We map out your commute times (LIRR branch comparison), targeted school districts, architectural styles, and lifestyle priorities. We set up real-time MLS feeds and internal off-market alerts.',
    },
    {
      step: '03',
      title: 'Private Home Tours & Property Vetting',
      desc: 'We accompany you to private showings, evaluating mechanicals, roof condition, flood zones, property boundaries, and potential expansion opportunities before making an offer.',
    },
    {
      step: '04',
      title: 'Competitive Offer Strategy & Negotiation',
      desc: 'In Long Island’s competitive market, we structure clean offers with strategic contingencies, personal seller letters, and local agent relationships to win without overpaying.',
    },
    {
      step: '05',
      title: 'Engineering Inspection & Attorney Review',
      desc: 'We coordinate top-tier licensed New York structural engineers, termite inspectors, and specialized real estate attorneys to ensure zero surprises prior to contract signing.',
    },
    {
      step: '06',
      title: 'Final Walkthrough & Closing Day',
      desc: 'We perform the final walkthrough to confirm agreed repairs and condition, oversee the title closing, and deliver the keys to your new Long Island home.',
    },
  ];

  const buyerFaqs = FAQS.find((f) => f.category === 'Buying')?.questions || [];

  return (
    <div className="space-y-16 pb-16">
      <Breadcrumbs items={[{ label: 'Buy a Home' }]} />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#12284C] text-white rounded-3xl p-8 sm:p-14 border border-white/10 shadow-xl relative overflow-hidden">
          <div className="max-w-2xl relative z-10 space-y-4">
            <span className="text-[#C8A24A] text-xs font-bold uppercase tracking-widest">
              Buyer Representation
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-white leading-tight">
              Buy Your Ideal Home on Long Island with Total Confidence
            </h1>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
              From historic Garden City Colonials to Gold Coast waterfronts and emerging suburban havens, our fiduciary buyer specialists provide the intelligence and negotiation power you need.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/listings')}
                className="bg-[#C8A24A] hover:bg-[#B68E37] text-[#12284C] px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-md cursor-pointer flex items-center gap-2"
              >
                <Search className="w-4 h-4" />
                <span>Start Your Home Search</span>
              </button>
              <button
                onClick={() => navigate('/resources')}
                className="bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors border border-white/20 cursor-pointer"
              >
                Mortgage Calculator
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Buying Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24A]">
            The Blueprint
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-black text-[#12284C] mt-1">
            Our 6-Step Home Buying Process
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            We simplify the New York home purchasing process into a predictable, transparent journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {buyingSteps.map((step) => (
            <div
              key={step.step}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-[#12284C] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-2xl font-serif font-bold text-[#C8A24A] mb-3">
                  {step.step}
                </div>
                <h3 className="text-base font-serif font-bold text-[#12284C] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* First-Time Buyer & NYC Relocation Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 rounded-3xl p-8 sm:p-12 border border-slate-200">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24A]">
              Specialized Guidance
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#12284C] mt-1">
              First-Time Buyer & NYC Relocation Advisory
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 mt-3 leading-relaxed">
              Transitioning from a Brooklyn brownstone or Manhattan high-rise to your first Long Island home? We eliminate the guesswork around suburban New York living:
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-xl border border-slate-200">
                <h4 className="text-sm font-bold text-[#12284C] mb-1">
                  Tax Offsets vs. NYC Income Tax
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Leaving NYC eliminates the 3.8% NYC personal income tax, directly subsidizing your Long Island property taxes while gaining a private yard and top schools.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200">
                <h4 className="text-sm font-bold text-[#12284C] mb-1">
                  School District Mapping
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  School boundaries in Nassau and Suffolk often cross municipal lines. We cross-reference official tax maps to guarantee you enroll in your desired district.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200">
                <h4 className="text-sm font-bold text-[#12284C] mb-1">
                  Commute Optimization
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We analyze LIRR train express times into both Penn Station and Grand Central Madison to minimize your daily transit footprint.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200">
                <h4 className="text-sm font-bold text-[#12284C] mb-1">
                  Structural & Environmental Due Diligence
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We verify certificates of occupancy (COs), oil-tank abandonments, flood zones, and septic vs. municipal sewer requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financing & Mortgage Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24A]">
              Financing Strategy
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#12284C]">
              Financing Programs & Mortgage Solutions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We partner with premier mortgage bankers who provide verified pre-approvals that Long Island listing agents trust. Whether you need a Conventional conforming loan, Jumbo financing for luxury Gold Coast estates, FHA low-down options, or VA zero-down benefits for veterans, we connect you with trusted experts.
            </p>
            <div className="space-y-2 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C8A24A]" />
                <span>Conventional Conforming loans with down payments as low as 3%</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C8A24A]" />
                <span>Jumbo financing for estate properties exceeding $1,149,825 limits</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C8A24A]" />
                <span>Specialized NY State SONYMA first-time homebuyer down payment grants</span>
              </div>
            </div>
            <div className="pt-2">
              <Link
                href="/resources"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#12284C] hover:text-[#C8A24A]"
              >
                <span>Calculate Your Monthly Mortgage Payment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <h3 className="text-lg font-serif font-bold text-[#12284C] mb-4">
              Estimated Long Island Upfront Costs
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-600">Earnest Money Deposit (at contract)</span>
                <span className="font-bold text-slate-900">5% – 10% of Purchase Price</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-600">Home Engineering Inspection</span>
                <span className="font-bold text-slate-900">$650 – $1,200</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-600">NYS Mortgage Recording Tax</span>
                <span className="font-bold text-slate-900">Approx. 1.05% (Nassau/Suffolk)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-600">Title Insurance & Legal Fees</span>
                <span className="font-bold text-slate-900">Approx. 1.2% – 1.8%</span>
              </div>
              <div className="flex justify-between py-2 font-bold text-[#12284C] pt-3">
                <span>Total Typical Closing Costs</span>
                <span>3.0% – 4.5% of Loan Amount</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buyer FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24A]">
            Common Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#12284C] mt-1">
            Buyer Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {buyerFaqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-[#12284C] hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform ${
                    openFaq === i ? 'rotate-180 text-[#12284C]' : ''
                  }`}
                />
              </button>
              {openFaq === i && (
                <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#12284C] text-white p-10 sm:p-14 rounded-3xl shadow-xl border border-white/10">
          <h2 className="text-2xl sm:text-4xl font-serif font-bold">
            Ready to Begin Your Long Island Home Search?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mt-2 font-light">
            Browse our curated active listings or schedule a free buyer strategy session with Marcus Chen or Anthony Russo.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => navigate('/listings')}
              className="bg-[#C8A24A] hover:bg-[#B68E37] text-[#12284C] px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Browse Active Listings
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border border-white/20"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
