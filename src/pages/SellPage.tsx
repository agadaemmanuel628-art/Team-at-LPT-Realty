import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useRouter, Link } from '../context/RouterContext';
import { FAQS } from '../data/mockData';
import {
  Sparkles,
  Camera,
  Layers,
  Globe,
  TrendingUp,
  DollarSign,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export const SellPage: React.FC = () => {
  const { navigate } = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const marketingPillars = [
    {
      icon: <Camera className="w-6 h-6 text-[#C8A24A]" />,
      title: 'Cinematic 4K Video & HDR Architectural Photography',
      desc: 'We never shoot with mobile phones. We hire top architectural media crews to shoot twilight exposures, dramatic aerial drone panoramas, and cinematic walk-through video tours.',
    },
    {
      icon: <Layers className="w-6 h-6 text-[#C8A24A]" />,
      title: 'Certified Home Staging Consultation',
      desc: 'Led by Elena Vance, our staging design advisory highlights your home’s architectural strengths, curates designer furniture layouts, and establishes the emotional connection that triggers bidding wars.',
    },
    {
      icon: <Globe className="w-6 h-6 text-[#C8A24A]" />,
      title: 'LPT Realty Global Syndication (120+ Portals)',
      desc: 'Your listing is immediately distributed to Zillow Premier, Realtor.com, Redfin, Wall Street Journal Real Estate, Mansion Global, and 120+ international luxury networks reaching affluent overseas and domestic buyers.',
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#C8A24A]" />,
      title: 'Geo-Targeted Algorithmic Social Campaigns',
      desc: 'We deploy hyper-targeted paid campaigns across Instagram, Facebook, and Google, putting your listing directly in front of pre-qualified buyers commuting from Manhattan, Brooklyn, and Queens.',
    },
  ];

  const sellerSteps = [
    {
      num: '01',
      title: 'Comparative Market Analysis & Strategic Pricing',
      desc: 'We analyze hyper-local recent sales, active competitors, and neighborhood absorption rates to pinpoint the price bracket that triggers maximum buyer urgency.',
    },
    {
      num: '02',
      title: 'Pre-Listing Preparation & Staging Transformation',
      desc: 'We execute light repairs, decluttering, aesthetic enhancements, and staging so your home presents as a flawless, turnkey showcase.',
    },
    {
      num: '03',
      title: 'The Grand Marketing Launch',
      desc: 'We orchestrate an aggressive launch with digital ad blitzes, custom property domain websites, high-gloss direct mail booklets, and broker network previews.',
    },
    {
      num: '04',
      title: 'Private Showings & High-Touch Open Houses',
      desc: 'Every prospective buyer is pre-screened for mortgage pre-approval before stepping inside. We personally manage all showings with white-glove hospitality.',
    },
    {
      num: '05',
      title: 'Competitive Offer Vetting & Negotiation',
      desc: 'We evaluate contract terms, down payments, mortgage contingencies, appraisal clauses, and closing dates to secure the highest net proceeds for you.',
    },
    {
      num: '06',
      title: 'Underwriting Management to Final Closing',
      desc: 'We coordinate the engineering inspection, municipal title search, bank appraisal, and attorney communications to guarantee a smooth, drama-free closing.',
    },
  ];

  const sellerFaqs = FAQS.find((f) => f.category === 'Selling')?.questions || [];

  return (
    <div className="space-y-16 pb-16">
      <Breadcrumbs items={[{ label: 'Sell Your Home' }]} />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#12284C] text-white rounded-3xl p-8 sm:p-14 border border-white/10 shadow-xl relative overflow-hidden">
          <div className="max-w-2xl relative z-10 space-y-4">
            <span className="text-[#C8A24A] text-xs font-bold uppercase tracking-widest">
              Seller Advisory
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-white leading-tight">
              Sell Your Long Island Property for Maximum Value
            </h1>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
              Our bespoke architectural media, certified staging, and LPT Realty digital syndication routinely generate multiple offers and record-setting neighborhood sales.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/home-valuation')}
                className="bg-[#C8A24A] hover:bg-[#B68E37] text-[#12284C] px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-md cursor-pointer flex items-center gap-2"
              >
                <span>Get Your Free Home Valuation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate('/sold')}
                className="bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors border border-white/20 cursor-pointer"
              >
                View Our Sold Results
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Track Record Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm text-center">
          <div>
            <div className="text-3xl font-serif font-bold text-[#12284C]">19 Days</div>
            <div className="text-xs text-slate-500 font-semibold mt-1">Average Days on Market</div>
          </div>
          <div>
            <div className="text-3xl font-serif font-bold text-[#12284C]">102.4%</div>
            <div className="text-xs text-slate-500 font-semibold mt-1">Average Sale-to-List Ratio</div>
          </div>
          <div>
            <div className="text-3xl font-serif font-bold text-[#C8A24A]">1,250+</div>
            <div className="text-xs text-slate-500 font-semibold mt-1">Homes Successfully Sold</div>
          </div>
          <div>
            <div className="text-3xl font-serif font-bold text-[#12284C]">$480M+</div>
            <div className="text-xs text-slate-500 font-semibold mt-1">Career Volume Closed</div>
          </div>
        </div>
      </section>

      {/* Comprehensive Marketing Plan */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24A]">
            The Advantage
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-black text-[#12284C] mt-1">
            Our Proprietary Marketing Engine
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            We don’t just list homes on the MLS; we launch high-impact digital and physical campaigns designed to create competitive bidding environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {marketingPillars.map((pillar, i) => (
            <div
              key={i}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-[#12284C] transition-all flex gap-5"
            >
              <div className="shrink-0 p-3 bg-slate-50 rounded-xl h-fit border border-slate-100">
                {pillar.icon}
              </div>
              <div>
                <h3 className="text-base font-serif font-bold text-[#12284C] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The 6-Step Selling Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24A]">
            The Journey
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-black text-[#12284C] mt-1">
            Our 6-Step Selling Roadmap
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            From initial pricing consultation to closing day escrow transfer, every step is rigorously managed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sellerSteps.map((step) => (
            <div
              key={step.num}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="text-2xl font-serif font-bold text-[#C8A24A] mb-2">
                  {step.num}
                </div>
                <h3 className="text-sm font-serif font-bold text-[#12284C] mb-2">
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

      {/* Pricing Strategy Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 rounded-3xl p-8 sm:p-12 border border-slate-200 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24A]">
              Scientific Pricing
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#12284C] mt-2">
              Strategic Pricing vs. Wishful Thinking
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 mt-3 leading-relaxed">
              On Long Island, overpricing by just 5% can reduce showing activity by more than 50% during the critical first two weeks on market. Our team implements a rigorous, data-driven pricing methodology:
            </p>

            <div className="mt-6 space-y-3 text-xs text-slate-700">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C8A24A] shrink-0 mt-0.5" />
                <span>Hyper-local micro-comparable analysis adjusting for lot shape, orientation, and finish quality</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C8A24A] shrink-0 mt-0.5" />
                <span>Search portal bracket optimization (ensuring your home isn't filtered out by round numbers)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C8A24A] shrink-0 mt-0.5" />
                <span>Monitoring active competing inventory in your immediate school district and price tier</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
            <h3 className="text-lg font-serif font-bold text-[#12284C]">
              What Is Your Long Island Home Worth Today?
            </h3>
            <p className="text-xs text-slate-600 mt-2">
              Receive a comprehensive comparative analysis prepared by Anthony Russo and Elena Vance within 24 hours.
            </p>
            <button
              onClick={() => navigate('/home-valuation')}
              className="mt-6 w-full bg-[#12284C] hover:bg-[#1A335E] text-white py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow"
            >
              Get Free Instant Valuation
            </button>
          </div>
        </div>
      </section>

      {/* Seller FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24A]">
            Seller Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#12284C] mt-1">
            Frequently Asked Seller Questions
          </h2>
        </div>

        <div className="space-y-3">
          {sellerFaqs.map((faq, i) => (
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

      {/* Final Valuation Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#12284C] text-white p-10 sm:p-14 rounded-3xl shadow-xl border border-white/10">
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
            Discover Your True Home Equity
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mt-2 font-light">
            Find out what buyers are willing to pay for your property in today's Long Island market.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => navigate('/home-valuation')}
              className="bg-[#C8A24A] hover:bg-[#B68E37] text-[#12284C] px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Get Free Valuation Report
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border border-white/20"
            >
              Speak to a Listing Specialist
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
