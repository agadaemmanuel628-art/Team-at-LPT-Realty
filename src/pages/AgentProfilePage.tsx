import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useRouter, Link } from '../context/RouterContext';
import { AGENTS, PROPERTIES, REVIEWS, SOLD_PROPERTIES } from '../data/mockData';
import {
  Phone,
  Mail,
  MapPin,
  Award,
  Star,
  CheckCircle2,
  Send,
  Calendar,
  ArrowRight,
  Bed,
  Bath,
} from 'lucide-react';

export const AgentProfilePage: React.FC = () => {
  const { params, navigate } = useRouter();
  const agentId = params.agentId || 'anthony-russo';

  const agent = AGENTS.find((a) => a.id === agentId) || AGENTS[0];
  const agentListings = PROPERTIES.filter((p) => p.agentId === agent.id);
  const agentReviews = REVIEWS.filter((r) => r.agentName.toLowerCase().includes(agent.name.split(' ')[0].toLowerCase()));

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    timeframe: 'Immediate',
    message: `Hello ${agent.name}, I would like to consult with you regarding Long Island real estate.`,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-16">
      <Breadcrumbs
        items={[
          { label: 'Our Team', href: '/team' },
          { label: agent.name },
        ]}
      />

      {/* Agent Header Profile Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm flex flex-col lg:flex-row gap-10 items-start">
          {/* Photo */}
          <div className="w-full sm:w-72 lg:w-80 shrink-0 aspect-[4/5] rounded-2xl overflow-hidden shadow-md bg-slate-100 relative">
            <img
              src={agent.photo}
              alt={agent.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-3 left-3 bg-[#12284C] text-white text-[11px] font-bold px-2.5 py-1 rounded">
              {agent.experienceYears} Years Licensed
            </div>
          </div>

          {/* Bio & Details */}
          <div className="flex-1 space-y-5">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400">{agent.licenseNumber}</span>
                <span className="text-slate-300">·</span>
                <div className="flex items-center gap-1 text-[#C8A24A] text-xs font-bold">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{agent.rating} ({agent.reviewCount} Reviews)</span>
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl font-serif font-black text-[#12284C] mt-1">
                {agent.name}
              </h1>
              <p className="text-sm font-semibold text-[#C8A24A] mt-0.5">
                {agent.title} · USA Real Estate Team at LPT Realty
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
              {agent.bio}
            </p>

            {/* Specialties & Areas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Specialties
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {agent.specialties.map((spec, i) => (
                    <span
                      key={i}
                      className="text-xs bg-white border border-slate-200 text-slate-800 px-2.5 py-1 rounded-md font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Key Areas Served
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {agent.areasServed.map((area, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[#12284C]/5 text-[#12284C] px-2.5 py-1 rounded-md font-semibold"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Contact Bar */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs">
              <a
                href={`tel:${agent.phone.replace(/\D/g, '')}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#12284C] text-white rounded-lg font-bold hover:bg-[#1A335E] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C8A24A]" />
                <span>Call {agent.phone}</span>
              </a>
              <a
                href={`mailto:${agent.email}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-slate-200 text-slate-700 rounded-lg font-bold hover:border-[#12284C] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#C8A24A]" />
                <span>Email {agent.email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid: Agent Listings, Recent Sales & Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left 2 Cols: Active Listings & Recent Track Record */}
        <div className="lg:col-span-2 space-y-12">
          {/* Active Listings */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-serif font-bold text-[#12284C]">
                Active Listings by {agent.name.split(' ')[0]}
              </h2>
              <span className="text-xs text-slate-500">
                {agentListings.length} {agentListings.length === 1 ? 'Property' : 'Properties'}
              </span>
            </div>

            {agentListings.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {agentListings.map((prop) => (
                  <div
                    key={prop.id}
                    className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow group"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                      <img
                        src={prop.images[0]}
                        alt={prop.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-2 left-2 bg-[#12284C] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                        {prop.status}
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="text-lg font-serif font-bold text-[#12284C]">
                        ${prop.price.toLocaleString()}
                      </div>
                      <h4 className="text-xs font-bold text-slate-800 line-clamp-1 mt-0.5">
                        {prop.title}
                      </h4>
                      <p className="text-[11px] text-slate-500">{prop.address}, {prop.town}</p>

                      <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                        <span className="text-slate-600">{prop.beds}b / {prop.baths}ba</span>
                        <Link
                          href={`/listings/${prop.id}`}
                          className="font-bold text-[#12284C] hover:text-[#C8A24A]"
                        >
                          View Details &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 bg-slate-50 rounded-xl border border-slate-200 text-center">
                <p className="text-xs text-slate-600">
                  {agent.name} currently has off-market listings in preparation. Contact {agent.name.split(' ')[0]} directly for confidential private preview tours.
                </p>
              </div>
            )}
          </div>

          {/* Recent Sales by Agent */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-[#12284C] mb-6">
              Representative Past Closings
            </h2>
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden divide-y divide-slate-100">
              {SOLD_PROPERTIES.slice(0, 3).map((sold) => (
                <div key={sold.id} className="p-4 sm:p-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={sold.image}
                      alt={sold.title}
                      className="w-16 h-16 rounded-lg object-cover shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="font-bold text-xs sm:text-sm text-[#12284C]">
                        {sold.title}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {sold.address}, {sold.town} · Closed {sold.soldDate}
                      </div>
                      <div className="text-[11px] text-slate-600 mt-1">
                        {sold.beds} Beds · {sold.baths} Baths · {sold.sqft.toLocaleString()} Sq Ft
                      </div>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="font-serif font-bold text-sm sm:text-base text-[#12284C]">
                      ${sold.salePrice.toLocaleString()}
                    </div>
                    <div className="text-[10px] text-emerald-600 font-bold">
                      Sold in {sold.daysOnMarket} Days
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Client Reviews for Agent */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-[#12284C] mb-6">
              Client Testimonials
            </h2>
            <div className="space-y-4">
              {(agentReviews.length > 0 ? agentReviews : REVIEWS.slice(0, 2)).map((rev) => (
                <div
                  key={rev.id}
                  className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#C8A24A]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-400">{rev.date}</span>
                  </div>
                  <p className="text-xs text-slate-700 italic mt-3 leading-relaxed">
                    "{rev.reviewText}"
                  </p>
                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-bold text-[#12284C]">{rev.clientName}</span>
                    <span className="text-slate-500 text-[11px]">{rev.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: Direct Contact [Agent] Form */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md">
            <h3 className="text-xl font-serif font-bold text-[#12284C]">
              Contact {agent.name.split(' ')[0]} Directly
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Have questions about buying or selling on Long Island? Send a direct message.
            </p>

            {formSubmitted ? (
              <div className="mt-6 p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <h4 className="text-sm font-bold text-emerald-900">Message Delivered</h4>
                <p className="text-xs text-emerald-700 mt-1">
                  {agent.name.split(' ')[0]} has received your request and will follow up shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 text-xs font-bold text-[#12284C] underline cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full name"
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
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
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Timeline
                  </label>
                  <select
                    value={formData.timeframe}
                    onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                  >
                    <option value="Immediate">Immediate (0 - 30 days)</option>
                    <option value="1-3 Months">1 - 3 Months</option>
                    <option value="3-6 Months">3 - 6 Months</option>
                    <option value="Just Researching">Just Researching / Planning</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#12284C] hover:bg-[#1A335E] text-white py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-[#C8A24A]" />
                  <span>Send to {agent.name.split(' ')[0]}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
