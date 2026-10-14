import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BUSINESS_INFO } from '../data/mockData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-16">
      <Breadcrumbs items={[{ label: 'Contact Us' }]} />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24A]">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-[#12284C] mt-2 leading-tight">
            Contact the USA Real Estate Team
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-light">
            We are here to help you navigate buying, selling, and investing across Long Island. Call us, send an email, or visit our central Nassau County office.
          </p>
        </div>
      </section>

      {/* Main Grid: Info Cards + Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left 1 Col: Office Info & Hours */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-xl font-serif font-bold text-[#12284C]">
              Office Information
            </h3>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-slate-50 rounded-lg text-[#C8A24A] shrink-0 border border-slate-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                    Office Address
                  </div>
                  <div className="text-slate-600 mt-0.5 leading-relaxed">
                    {BUSINESS_INFO.address}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-slate-50 rounded-lg text-[#C8A24A] shrink-0 border border-slate-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                    Direct Phone Line
                  </div>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    className="text-slate-600 hover:text-[#12284C] font-semibold mt-0.5 block"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-slate-50 rounded-lg text-[#C8A24A] shrink-0 border border-slate-100">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                    Email Inquiries
                  </div>
                  <a
                    href="mailto:info@usarealestateteam.com"
                    className="text-slate-600 hover:text-[#12284C] font-semibold mt-0.5 block"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-slate-50 rounded-lg text-[#C8A24A] shrink-0 border border-slate-100">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                    Office Hours
                  </div>
                  <div className="text-slate-600 mt-0.5 leading-relaxed">
                    {BUSINESS_INFO.hours}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-slate-100">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                Connect on Social Media
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={BUSINESS_INFO.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-[#12284C] hover:text-white text-xs font-bold transition-colors"
                >
                  Facebook
                </a>
                <a
                  href={BUSINESS_INFO.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-[#12284C] hover:text-white text-xs font-bold transition-colors"
                >
                  Instagram
                </a>
                <a
                  href={BUSINESS_INFO.socials.zillow}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-[#12284C] hover:text-white text-xs font-bold transition-colors"
                >
                  Zillow
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right 2 Cols: Interactive Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div>
              <h2 className="text-2xl font-serif font-bold text-[#12284C]">
                Send Us a Message
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Fill out the form below and an advisor from our team will contact you within 2 business hours.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="text-base font-bold text-emerald-900">Thank You, {formData.name}!</h3>
                <p className="text-xs text-emerald-700 max-w-md mx-auto">
                  Your message has been received. Our team will review your details and respond to {formData.email} promptly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 text-xs font-bold text-[#12284C] underline cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Conroy"
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
                      placeholder="sarah@example.com"
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Buying a Long Island Home">Buying a Long Island Home</option>
                      <option value="Selling / Home Valuation">Selling / Home Valuation</option>
                      <option value="Real Estate Investment">Real Estate Investment</option>
                      <option value="Join Our Team / Careers">Join Our Team / Careers</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the property, town, or question you would like assistance with..."
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#12284C] hover:bg-[#1A335E] text-white py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-[#C8A24A]" />
                  <span>Send Message to Team</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Embedded Google Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-serif font-bold text-[#12284C]">
                Office Location Map
              </h3>
              <p className="text-xs text-slate-500">
                Centrally located near Jericho Turnpike and the Long Island Expressway (LIE Exit 40).
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=100+Jericho+Quadrangle+Jericho+NY+11753"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold text-[#12284C] hover:text-[#C8A24A] inline-flex items-center gap-1"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden aspect-[21/9] border border-slate-200 bg-slate-100">
            <iframe
              title="Office Location Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps?q=100+Jericho+Quadrangle+Jericho+NY+11753&output=embed"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
