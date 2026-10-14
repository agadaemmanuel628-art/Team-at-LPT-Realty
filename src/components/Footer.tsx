import React, { useState } from 'react';
import { Link } from '../context/RouterContext';
import { Logo } from './Logo';
import { BUSINESS_INFO, AREAS } from '../data/mockData';
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [subscribing, setSubscribing] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setSubscribing(true);
    setTimeout(() => {
      setSubscribing(false);
      setSubscribed(true);
    }, 500);
  };

  return (
    <footer className="bg-[#12284C] text-slate-300 font-sans border-t border-slate-800">
      {/* Upper Newsletter & VIP Insider Bar */}
      <div className="border-b border-white/10 bg-[#0A1629]/60 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-white tracking-tight">
              Join the Long Island Real Estate Insider
            </h3>
            <p className="text-xs md:text-sm text-slate-400 mt-1">
              Receive confidential off-market alerts, quarterly Nassau & Suffolk market reports, and property tax updates.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full md:w-auto flex-1 max-w-md">
            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-emerald-950/80 border border-emerald-500/40 rounded-lg text-emerald-300 text-xs">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>Thank you! You are subscribed to our VIP market updates.</span>
              </div>
            ) : (
              <div className="flex rounded-lg overflow-hidden border border-white/20 focus-within:border-[#C8A24A] bg-white/5">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="px-4 py-3 bg-transparent text-white placeholder-slate-400 text-xs md:text-sm flex-1 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={subscribing}
                  className="bg-[#C8A24A] hover:bg-[#B68E37] text-[#12284C] px-5 py-3 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                >
                  <span>{subscribing ? 'Joining...' : 'Subscribe'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Main Footer Links & Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Brokerage Affiliation */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <Logo variant="light" size="lg" />
            </Link>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              The USA Real Estate Team at LPT Realty delivers premier residential sales, luxury acquisitions, and relocation advisory across Long Island. Backed by LPT Realty’s revolutionary marketing technology and cloud brokerage infrastructure.
            </p>

            <div className="pt-2 text-xs space-y-2 text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C8A24A] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C8A24A] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C8A24A] shrink-0" />
                <a href={`mailto:info@usarealestateteam.com`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C8A24A] shrink-0" />
                <span>{BUSINESS_INFO.hours}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-3 flex items-center gap-3">
              <span className="text-xs font-semibold text-white uppercase tracking-wider">Follow Us:</span>
              <a
                href={BUSINESS_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C8A24A] hover:text-[#12284C] flex items-center justify-center text-xs font-bold transition-colors"
                title="Facebook"
              >
                FB
              </a>
              <a
                href={BUSINESS_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C8A24A] hover:text-[#12284C] flex items-center justify-center text-xs font-bold transition-colors"
                title="Instagram"
              >
                IG
              </a>
              <a
                href={BUSINESS_INFO.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C8A24A] hover:text-[#12284C] flex items-center justify-center text-xs font-bold transition-colors"
                title="YouTube"
              >
                YT
              </a>
              <a
                href={BUSINESS_INFO.socials.zillow}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C8A24A] hover:text-[#12284C] flex items-center justify-center text-xs font-bold transition-colors"
                title="Zillow"
              >
                ZW
              </a>
            </div>
          </div>

          {/* Col 2: Real Estate Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Services & Guides</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/buy" className="hover:text-white transition-colors">
                  Buying a Home on Long Island
                </Link>
              </li>
              <li>
                <Link href="/sell" className="hover:text-white transition-colors">
                  Selling Your Property
                </Link>
              </li>
              <li>
                <Link href="/home-valuation" className="text-[#C8A24A] font-semibold hover:underline">
                  Free Instant Home Valuation
                </Link>
              </li>
              <li>
                <Link href="/listings" className="hover:text-white transition-colors">
                  Browse Active Listings
                </Link>
              </li>
              <li>
                <Link href="/sold" className="hover:text-white transition-colors">
                  Sold Properties & Results
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Full Real Estate Services
                </Link>
              </li>
              <li>
                <Link href="/investors" className="hover:text-white transition-colors">
                  Real Estate Investors Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Areas We Serve */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Areas We Serve</h4>
            <ul className="space-y-2 text-xs">
              {AREAS.map((area) => (
                <li key={area.slug}>
                  <Link href={`/areas/${area.slug}`} className="hover:text-white transition-colors">
                    {area.name} Real Estate
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/areas" className="text-[#C8A24A] font-medium hover:underline">
                  View All Long Island Communities &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Company & Knowledge */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About USA Real Estate Team
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition-colors">
                  Meet Our Real Estate Agents
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-white transition-colors">
                  Client Testimonials & Ratings
                </Link>
              </li>
              <li>
                <Link href="/join-us" className="text-[#C8A24A] font-semibold hover:underline">
                  Join Our Team / LPT Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Market Reports & Articles
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  Financial Calculators & Checklists
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Our Office
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory & Brokerage Disclaimers */}
        <div className="mt-12 pt-8 border-t border-white/10 text-[11px] text-slate-400 leading-relaxed space-y-4">
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4">
            <div className="space-y-1">
              <p className="font-semibold text-slate-300">
                LPT Realty Brokerage Disclosure:
              </p>
              <p>
                USA Real Estate Team is a licensed real estate team operating under LPT Realty, LLC, a licensed real estate broker in New York State. All material presented herein is intended for information purposes only. While this information is believed to be correct, it is represented subject to errors, omissions, changes, or withdrawal without notice. All property information, including, but not limited to square footage, room count, number of bedrooms, and school district in property listings should be verified by your own attorney, architect, or zoning expert.
              </p>
            </div>

            {/* Equal Housing Opportunity Mark */}
            <div className="flex items-center gap-2.5 p-2 rounded bg-white/5 border border-white/10 shrink-0">
              <svg className="w-7 h-7 text-[#C8A24A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <line x1="8" y1="12" x2="16" y2="12" />
                <line x1="8" y1="15" x2="16" y2="15" />
              </svg>
              <div className="text-[9px] font-bold uppercase tracking-wider text-white">
                Equal Housing<br />Opportunity
              </div>
            </div>
          </div>

          {/* Legal Links & Copyright */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5">
            <p>
              © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. NYS Division of Licensing.
            </p>
            <div className="flex items-center flex-wrap gap-4 text-slate-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span>·</span>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <span>·</span>
              <Link href="/fair-housing" className="hover:text-white transition-colors">
                Fair Housing Notice
              </Link>
              <span>·</span>
              <Link href="/accessibility" className="hover:text-white transition-colors">
                Accessibility Statement
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
