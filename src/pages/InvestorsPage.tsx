import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useRouter } from '../context/RouterContext';
import {
  TrendingUp,
  DollarSign,
  Building,
  ShieldCheck,
  CheckCircle2,
  Send,
  PieChart,
  ArrowRight,
} from 'lucide-react';

export const InvestorsPage: React.FC = () => {
  const { navigate } = useRouter();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investmentBudget: '$1M - $2.5M',
    assetClass: 'Multi-Family (2-4 Units)',
    targetGeography: 'Nassau & Western Suffolk',
    timeline: 'Immediate (0-60 Days)',
    exchange1031: 'No',
    strategyNotes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
  };

  const investmentStrategies = [
    {
      title: 'Small Multi-Family (2–4 Units)',
      target: 'Stable Cash Flow & Long-Term Appreciation',
      capRate: '6.2% – 7.8% Pro Forma Cap',
      desc: 'High-density commuter towns like Huntington, Long Beach, and Freeport offer consistent year-round rental occupancy driven by workforce demand and proximity to rail links.',
    },
    {
      title: 'Value-Add Single Family Flips',
      target: 'High-Velocity Equity Generation',
      capRate: '15% – 25% Project IRR',
      desc: 'Older mid-century ranches and split-levels in top school districts (Syosset, Plainview, Garden City fringes) suitable for full interior modernization or second-story expansions.',
    },
    {
      title: 'Hamptons Seasonal Luxury Rentals',
      target: 'Premium Summer Yields & Personal Lifestyle Use',
      capRate: '8.5% – 12% Gross Summer Yield',
      desc: 'Prime ocean-adjacent or bay-front retreats in Southampton and East Hampton that command $150K–$350K+ for Memorial Day to Labor Day seasonal leases.',
    },
    {
      title: '1031 Tax-Deferred Exchange Sourcing',
      target: 'Preserving Capital & Deferring Capital Gains',
      capRate: 'Targeted Replacement Acquisitions',
      desc: 'Strict 45-day identification and 180-day closing deadlines require off-market access. We maintain active inventory of pre-screened replacement assets.',
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      <Breadcrumbs items={[{ label: 'Real Estate Investors' }]} />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24A]">
            Capital Advisory
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-[#12284C] mt-2 leading-tight">
            Long Island Real Estate Investment Advisory
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-light">
            We help private clients, family offices, and active real estate investors deploy capital into cash-flowing multi-family assets, high-yield Hamptons seasonal rentals, and 1031 exchange replacement properties.
          </p>
        </div>
      </section>

      {/* Market Insights Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 p-8 sm:p-12 rounded-3xl border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Rental Vacancy Rate
            </div>
            <div className="text-3xl sm:text-4xl font-serif font-bold text-[#12284C] mt-1">
              &lt; 2.8%
            </div>
            <p className="text-xs text-slate-600 mt-2">
              Severe residential supply deficits maintain Long Island’s record-low rental vacancy across all tenant demographics.
            </p>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              5-Year Equity Appreciation
            </div>
            <div className="text-3xl sm:text-4xl font-serif font-bold text-[#C8A24A] mt-1">
              +41.2%
            </div>
            <p className="text-xs text-slate-600 mt-2">
              Nassau and Western Suffolk real estate has consistently outpaced national inflation, preserving intergenerational wealth.
            </p>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Off-Market Deal Flow
            </div>
            <div className="text-3xl sm:text-4xl font-serif font-bold text-[#12284C] mt-1">
              Direct Sourcing
            </div>
            <p className="text-xs text-slate-600 mt-2">
              Our team sources off-market estates, estate sales, and pre-foreclosures directly before public MLS distribution.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Strategies */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24A]">
            Asset Classes
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-black text-[#12284C] mt-1">
            Core Investment Strategies
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Tailored investment structures modeled around your risk tolerance, liquidity profile, and capital horizon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {investmentStrategies.map((strat, i) => (
            <div
              key={i}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-[#C8A24A] uppercase tracking-wider">
                    {strat.target}
                  </span>
                  <span className="text-xs font-mono bg-slate-100 text-slate-800 px-2 py-0.5 rounded font-bold">
                    {strat.capRate}
                  </span>
                </div>
                <h3 className="text-lg font-serif font-bold text-[#12284C]">
                  {strat.title}
                </h3>
                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {strat.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                <span className="text-slate-500">Full Underwriting Available</span>
                <button
                  onClick={() => {
                    setFormData({ ...formData, assetClass: strat.title });
                    window.scrollTo({ top: 900, behavior: 'smooth' });
                  }}
                  className="text-[#12284C] hover:text-[#C8A24A] inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Inquire on this Strategy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Investor Inquiry Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
          <div className="max-w-xl mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24A]">
              Confidential Deal Flow
            </span>
            <h2 className="text-2xl font-serif font-bold text-[#12284C] mt-1">
              Join Our Accredited Investor Network
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Receive confidential off-market pro formas, pocket listings, and distressed acquisition alerts across Long Island.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="text-base font-bold text-emerald-900">Investor Profile Registered</h3>
              <p className="text-xs text-emerald-700 max-w-md mx-auto">
                Anthony Russo and our investment desk will contact you with current off-market opportunities matching your criteria.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-4 text-xs font-bold text-[#12284C] underline cursor-pointer"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Robert Vance"
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="robert@vancecapital.com"
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(516) 000-0000"
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Investment Budget
                  </label>
                  <select
                    value={formData.investmentBudget}
                    onChange={(e) => setFormData({ ...formData, investmentBudget: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                  >
                    <option value="$500K - $1M">$500K - $1M</option>
                    <option value="$1M - $2.5M">$1M - $2.5M</option>
                    <option value="$2.5M - $5M">$2.5M - $5M</option>
                    <option value="$5M+">$5M+ (Institutional)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    1031 Exchange?
                  </label>
                  <select
                    value={formData.exchange1031}
                    onChange={(e) => setFormData({ ...formData, exchange1031: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                  >
                    <option value="No">No / Cash or Financing</option>
                    <option value="Yes - Active 45-day window">Yes - In Active 45-day window</option>
                    <option value="Yes - Planning upcoming sale">Yes - Planning upcoming sale</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Specific Acquisition Criteria or Target Towns
                </label>
                <textarea
                  rows={3}
                  value={formData.strategyNotes}
                  onChange={(e) => setFormData({ ...formData, strategyNotes: e.target.value })}
                  placeholder="e.g. Looking for 3-4 family properties in Huntington or Long Beach, cap rates above 6.5%, cash buyer..."
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#12284C] hover:bg-[#1A335E] text-white py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5 text-[#C8A24A]" />
                <span>Submit Confidential Investor Profile</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
