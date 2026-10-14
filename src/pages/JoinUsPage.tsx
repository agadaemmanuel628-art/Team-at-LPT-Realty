import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useRouter } from '../context/RouterContext';
import {
  TrendingUp,
  DollarSign,
  Award,
  Zap,
  Users,
  CheckCircle2,
  Send,
  BookOpen,
  ArrowRight,
} from 'lucide-react';

export const JoinUsPage: React.FC = () => {
  const { navigate } = useRouter();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    licenseStatus: 'Active NYS Real Estate License',
    yearsExperience: '3-5 Years',
    currentVolume: '$5M - $10M / Year',
    currentBrokerage: '',
    motivation: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
  };

  const lptPillars = [
    {
      icon: <DollarSign className="w-8 h-8 text-[#C8A24A]" />,
      title: '100% Commission & Modern Splits',
      desc: 'Keep what you earn. Choose between a $5,000 annual cap with 100% commissions or an 80/20 split with zero franchise fees and zero junk charges.',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#C8A24A]" />,
      title: 'Revenue Share & Stock Ownership',
      desc: 'Build true generational wealth. Earn tier-based revenue share on productive agent introductions plus stock equity grants as you hit production milestones.',
    },
    {
      icon: <Zap className="w-8 h-8 text-[#C8A24A]" />,
      title: 'Free Listing Marketing Engine',
      desc: 'Every qualifying listing receives a complimentary custom website, 4K digital staging, high-gloss printed property brochures, and automated social media ad campaigns.',
    },
    {
      icon: <Users className="w-8 h-8 text-[#C8A24A]" />,
      title: 'Team Mentorship & High-Touch Support',
      desc: 'Partner directly with Anthony Russo and Elena Vance. Weekly contract mastermind sessions, hyper-local marketing templates, and a collaborative Long Island culture.',
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      <Breadcrumbs items={[{ label: 'Careers / Join Our Team' }]} />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24A]">
            Career Opportunity
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-[#12284C] mt-2 leading-tight">
            Build Your Real Estate Career with USA Real Estate Team & LPT Realty
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-light">
            Tired of handing 30% of your hard-earned commission to an old-school franchise for an empty office cubicle? Join the fastest-growing modern cloud brokerage in the nation and scale your production on Long Island.
          </p>
        </div>
      </section>

      {/* LPT Advantage Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {lptPillars.map((pillar, i) => (
            <div
              key={i}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex gap-5"
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

      {/* Comparison Table: Traditional Brokerage vs. LPT Realty */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm overflow-x-auto">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#12284C] mb-6 text-center">
            The Traditional Brokerage Model vs. LPT Realty
          </h2>

          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider">
                <th className="py-3 px-4">Brokerage Feature</th>
                <th className="py-3 px-4 text-slate-400">Traditional Franchise</th>
                <th className="py-3 px-4 text-[#12284C] font-bold">LPT Realty + USA Real Estate Team</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="py-3.5 px-4 font-semibold">Commission Split</td>
                <td className="py-3.5 px-4 text-slate-500">60/40 or 70/30 standard</td>
                <td className="py-3.5 px-4 font-bold text-[#12284C]">100% Commission Option ($5K Cap)</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold">Franchise Royalty Fees</td>
                <td className="py-3.5 px-4 text-red-600 font-medium">6% – 8% off the top of every check</td>
                <td className="py-3.5 px-4 font-bold text-emerald-600">0% Franchise Fees Forever</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold">Listing Media & Marketing</td>
                <td className="py-3.5 px-4 text-slate-500">Agent pays 100% out of pocket</td>
                <td className="py-3.5 px-4 font-bold text-[#12284C]">Included Listing Launch Marketing Kit</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold">Stock Ownership & Equity</td>
                <td className="py-3.5 px-4 text-slate-400">None available</td>
                <td className="py-3.5 px-4 font-bold text-emerald-600">Public Stock Awards on production</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold">Revenue Share Network</td>
                <td className="py-3.5 px-4 text-slate-400">None</td>
                <td className="py-3.5 px-4 font-bold text-[#12284C]">Tiered recurring monthly revenue share</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Confidential Application / Inquiry Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
          <div className="max-w-xl mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24A]">
              Confidential Career Inquiry
            </span>
            <h2 className="text-2xl font-serif font-bold text-[#12284C] mt-1">
              Connect With Anthony Russo (100% Confidential)
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              We respect your current brokerage relationship. All discussions are held in strict professional confidence.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="text-base font-bold text-emerald-900">Inquiry Received</h3>
              <p className="text-xs text-emerald-700 max-w-md mx-auto">
                Anthony Russo will reach out to you directly by phone or private email to schedule a confidential coffee or private call.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-4 text-xs font-bold text-[#12284C] underline cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Elena Rossi"
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Confidential Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="elena@gmail.com (personal preferred)"
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
                    License Status
                  </label>
                  <select
                    value={formData.licenseStatus}
                    onChange={(e) => setFormData({ ...formData, licenseStatus: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                  >
                    <option value="Active NYS License">Active NYS License</option>
                    <option value="Enrolled in NY Licensing Course">Enrolled in Licensing Course</option>
                    <option value="Inactive / Seeking Re-Activation">Inactive / Seeking Re-Activation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Past 12M Volume
                  </label>
                  <select
                    value={formData.currentVolume}
                    onChange={(e) => setFormData({ ...formData, currentVolume: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                  >
                    <option value="New Agent (0 - $2M)">New Agent (0 - $2M)</option>
                    <option value="$2M - $5M">$2M - $5M</option>
                    <option value="$5M - $10M">$5M - $10M</option>
                    <option value="$10M+">$10M+ (Top Producer)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  What are your top business goals for the coming year?
                </label>
                <textarea
                  rows={3}
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  placeholder="Tell us what you want to achieve or questions you have about LPT Realty..."
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#12284C] hover:bg-[#1A335E] text-white py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5 text-[#C8A24A]" />
                <span>Submit Confidential Agent Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
