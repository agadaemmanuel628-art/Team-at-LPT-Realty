import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useRouter, Link } from '../context/RouterContext';
import {
  Home,
  Tag,
  TrendingUp,
  MapPin,
  Key,
  Building,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { navigate } = useRouter();

  const services = [
    {
      icon: <Home className="w-8 h-8 text-[#C8A24A]" />,
      title: 'Residential Buyer Representation',
      tagline: 'Fiduciary advocacy and off-market access for home buyers',
      desc: 'We assist families and first-time buyers in identifying their dream Long Island property. From detailed school district analyses to aggressive offer negotiations and contract vetting, we stand with you at every step.',
      features: [
        'Curated MLS search feeds & private off-market listings',
        'LIRR commute time and station parking reviews',
        'Detailed engineering inspection coordination',
        'Winning offer structure in multi-bid environments',
      ],
      linkText: 'Learn About Buying',
      linkHref: '/buy',
    },
    {
      icon: <Tag className="w-8 h-8 text-[#C8A24A]" />,
      title: 'Luxury & Residential Seller Advisory',
      tagline: 'Record-setting marketing campaigns backed by LPT Realty technology',
      desc: 'We treat your home as an exclusive consumer product. Combining certified staging, HDR architectural media, 4K video walk-throughs, and international syndication across 120+ portals.',
      features: [
        'Comparative Market Analysis with hyper-local micro-comps',
        'Certified staging consultations by Elena Vance',
        'Targeted digital geo-fencing ads across NYC and suburbs',
        'Skilled contract and appraisal contingency negotiation',
      ],
      linkText: 'Seller Marketing Plan',
      linkHref: '/sell',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#C8A24A]" />,
      title: 'Real Estate Investment & 1031 Exchange',
      tagline: 'Capital growth, multi-family acquisitions, and tax-deferred strategies',
      desc: 'We model cash flows, capitalization rates, and rental demand across Nassau, Suffolk, and the East End. We assist investors in identifying multi-family buildings, value-add flips, and 1031 tax-deferred exchanges.',
      features: [
        'Cash-on-cash return & pro forma financial modeling',
        'Long-term multi-family & mixed-use property sourcing',
        'Hamptons high-yield seasonal vacation rental advisory',
        '1031 exchange replacement property identification',
      ],
      linkText: 'Investor Advisory Portal',
      linkHref: '/investors',
    },
    {
      icon: <MapPin className="w-8 h-8 text-[#C8A24A]" />,
      title: 'NYC to Long Island Relocation Consulting',
      tagline: 'Smooth transition from Manhattan & Brooklyn to Long Island',
      desc: 'Moving out of the city involves distinct considerations around property taxes, village bylaws, and rail schedules. We provide personalized neighborhood roadmaps for relocating professionals.',
      features: [
        'NYC personal income tax vs. Long Island property tax comparison',
        'Neighborhood school & daycare tours',
        'Private weekend orientation tours of targeted towns',
        'Vendor referrals (movers, contractors, interior designers)',
      ],
      linkText: 'Explore Neighborhoods',
      linkHref: '/areas',
    },
    {
      icon: <Building className="w-8 h-8 text-[#C8A24A]" />,
      title: 'Commercial & Mixed-Use Advisory',
      tagline: 'Retail, professional offices, and development parcels',
      desc: 'Through LPT Realty’s commercial division, we advise local business owners, medical practices, and investors on acquiring and leasing commercial real estate throughout Long Island.',
      features: [
        'Downtown village retail storefront leasing',
        'Medical and professional office condo acquisition',
        'Zoning, variance, and town planning advisory',
        'Commercial lease negotiation',
      ],
      linkText: 'Contact Commercial Team',
      linkHref: '/contact',
    },
    {
      icon: <Key className="w-8 h-8 text-[#C8A24A]" />,
      title: 'Rental Placement & Tenant Screening',
      tagline: 'Protecting your rental asset with rigorous background verification',
      desc: 'For landlords seeking qualified, vetted tenants for single-family residences, townhouses, and luxury estates. We handle marketing, credit checks, lease drafting, and move-in walkthroughs.',
      features: [
        'Comprehensive credit, criminal, and eviction screening',
        'Income verification adhering to NYS Fair Housing guidelines',
        'Custom NYS compliant residential leases',
        'Turnover inspection and key delivery',
      ],
      linkText: 'Contact Our Office',
      linkHref: '/contact',
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      <Breadcrumbs items={[{ label: 'Our Services' }]} />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24A]">
            Comprehensive Real Estate Services
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-[#12284C] mt-2 leading-tight">
            Full-Spectrum Real Estate Advisory
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-light">
            Backed by LPT Realty’s national tech infrastructure and deep local Long Island expertise, we provide sophisticated advisory across every residential and commercial real estate discipline.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="p-3 bg-slate-50 rounded-xl w-fit border border-slate-100 mb-4">
                  {srv.icon}
                </div>
                <h2 className="text-lg font-serif font-bold text-[#12284C]">
                  {srv.title}
                </h2>
                <p className="text-xs font-semibold text-[#C8A24A] mt-0.5">
                  {srv.tagline}
                </p>
                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {srv.desc}
                </p>

                <div className="mt-5 space-y-2 pt-4 border-t border-slate-100">
                  {srv.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A24A] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href={srv.linkHref}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#12284C] hover:text-[#C8A24A] transition-colors"
                >
                  <span>{srv.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#12284C] text-white p-10 sm:p-14 rounded-3xl shadow-xl border border-white/10">
          <h2 className="text-2xl sm:text-4xl font-serif font-bold">
            How May We Serve Your Real Estate Goals?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mt-2 font-light">
            Speak with an advisor today for honest, data-backed guidance with zero pressure.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => navigate('/home-valuation')}
              className="bg-[#C8A24A] hover:bg-[#B68E37] text-[#12284C] px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Get Free Valuation
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border border-white/20"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
