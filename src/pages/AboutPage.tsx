import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useRouter, Link } from '../context/RouterContext';
import { BUSINESS_INFO, AGENTS } from '../data/mockData';
import {
  ShieldCheck,
  Award,
  TrendingUp,
  Heart,
  Target,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigate } = useRouter();

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      caption: 'Luxury Garden City Colonial Closed $1.92M',
    },
    {
      url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      caption: 'Great Neck Gold Coast Architectural Marvel',
    },
    {
      url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      caption: 'Long Beach Waterfront Coastal Contemporary',
    },
    {
      url: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=800&q=80',
      caption: 'Southampton Dunes Oceanfront Retreat',
    },
    {
      url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
      caption: 'Designer Kitchen Staging & Architectural Media',
    },
    {
      url: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
      caption: 'Huntington Village Restored Historic Landmark',
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      <Breadcrumbs items={[{ label: 'About Us' }]} />

      {/* Hero / Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24A]">
            About USA Real Estate Team
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-[#12284C] mt-2 leading-tight">
            Setting the Benchmark for Real Estate Excellence Across Long Island
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-light">
            Founded on fiduciary integrity, local neighborhood mastery, and next-generation marketing technology under LPT Realty, our team empowers home buyers and sellers with extraordinary advisory.
          </p>
        </div>
      </section>

      {/* Story & LPT Realty Partnership */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5 text-slate-700 text-xs sm:text-sm leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#12284C]">
              Our Story & Founding Vision
            </h2>
            <p>
              The USA Real Estate Team was born out of a clear realization: traditional Long Island real estate brokerages were overly reliant on antiquated yard signs, static print directories, and inflated corporate fees that failed to serve the modern homeowner.
            </p>
            <p>
              We set out to build a modern, high-touch advisory practice centered around deep regional intelligence and aggressive digital marketing. By aligning with <strong>LPT Realty</strong>—the fastest-growing cloud brokerage in the United States—we combined the agility, personal care, and community ties of a boutique Long Island team with the colossal syndication horsepower and technology platform of a national brand.
            </p>
            <p>
              From Garden City center-hall colonials and North Shore Gold Coast estates to lively South Shore canal retreats and serene East End sanctuaries, we treat every transaction as a sacred financial responsibility.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <div className="text-2xl font-serif font-bold text-[#12284C]">18+</div>
                <div className="text-xs text-slate-500 font-semibold mt-0.5">Years Serving Long Island</div>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <div className="text-2xl font-serif font-bold text-[#12284C]">1,250+</div>
                <div className="text-xs text-slate-500 font-semibold mt-0.5">Transactions Completed</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80"
                alt="Anthony Russo & USA Real Estate Team"
                className="w-full h-[460px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#12284C] text-white p-6 rounded-2xl shadow-xl max-w-xs border border-white/20 hidden sm:block">
              <div className="text-[#C8A24A] text-xs font-bold uppercase tracking-wider">
                Leadership
              </div>
              <p className="text-xs text-slate-200 mt-1 font-sans">
                "Our clients don't just hire a real estate agent; they gain a dedicated fiduciary advocate for life."
              </p>
              <div className="mt-2 text-xs font-bold text-white">
                — Anthony Russo, Founder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Core Values */}
      <section className="bg-slate-100 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24A]">
              Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#12284C] mt-1">
              Our Core Values
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Every negotiation, client interaction, and listing campaign is anchored in four non-negotiable commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <ShieldCheck className="w-8 h-8 text-[#C8A24A] mb-3" />
              <h3 className="text-base font-serif font-bold text-[#12284C] mb-2">
                Fiduciary Integrity
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We advocate relentlessly for your financial welfare. If walking away from a transaction is in your best interest, we will tell you plainly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <Target className="w-8 h-8 text-[#C8A24A] mb-3" />
              <h3 className="text-base font-serif font-bold text-[#12284C] mb-2">
                Hyper-Local Mastery
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                From micro-neighborhood pricing differences and school boundaries to village tax assessments, our counsel is grounded in verified data.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <TrendingUp className="w-8 h-8 text-[#C8A24A] mb-3" />
              <h3 className="text-base font-serif font-bold text-[#12284C] mb-2">
                Modern Marketing
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We reject passive listings. We invest our capital into HDR architectural media, 4K video tours, and targeted algorithmic distribution.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <Heart className="w-8 h-8 text-[#C8A24A] mb-3" />
              <h3 className="text-base font-serif font-bold text-[#12284C] mb-2">
                White-Glove Care
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Moving is an emotional life transition. We manage every logistical milestone with calm, proactive communication from offer to keys.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliation with LPT Realty */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#12284C] text-white rounded-3xl p-8 sm:p-12 border border-white/10 shadow-xl">
          <div className="max-w-3xl">
            <span className="text-[#C8A24A] text-xs font-bold uppercase tracking-widest">
              Brokerage Innovation
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-black mt-2 text-white">
              Why We Chose LPT Realty
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed font-light">
              LPT Realty was created to disrupt traditional corporate brokerage franchises. By eliminating excessive corporate royalty fees and brick-and-mortar waste, LPT provides agents and clients with an unmatched marketing engine:
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-200">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C8A24A] shrink-0 mt-0.5" />
                <span>Proprietary listing launch software and digital microsites</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C8A24A] shrink-0 mt-0.5" />
                <span>Syndication across 120+ international luxury property channels</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C8A24A] shrink-0 mt-0.5" />
                <span>Direct mail magazine fulfillment distributed to targeted high-net-worth zip codes</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C8A24A] shrink-0 mt-0.5" />
                <span>Nationwide referral network connecting buyers relocating from Florida, Texas, and California</span>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/join-us"
                className="bg-[#C8A24A] hover:bg-[#B68E37] text-[#12284C] px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
              >
                <span>Learn About Joining LPT Realty</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24A]">
            Portfolio & Architecture
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#12284C] mt-1">
            Properties Represented by Our Team
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            A glimpse into the diverse architectural heritage and luxury homes we have brought to market across Long Island.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-200 border border-slate-200 shadow-sm"
            >
              <img
                src={img.url}
                alt={img.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                <p className="text-xs font-medium text-slate-200 drop-shadow">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white p-10 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-2xl font-serif font-bold text-[#12284C]">
          Partner With Long Island's Most Dedicated Real Estate Team
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-2">
          Whether you have a specific home in mind or simply want to understand your options, our advisors are here to help.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={() => navigate('/team')}
            className="bg-[#12284C] hover:bg-[#1A335E] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Meet Our Agents
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="border border-slate-300 hover:border-[#12284C] text-slate-700 hover:text-[#12284C] px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Contact Our Office
          </button>
        </div>
      </section>
    </div>
  );
};
