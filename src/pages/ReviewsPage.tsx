import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useRouter } from '../context/RouterContext';
import { REVIEWS } from '../data/mockData';
import { Star, CheckCircle2, Play, ExternalLink, ArrowRight } from 'lucide-react';

export const ReviewsPage: React.FC = () => {
  const { navigate } = useRouter();
  const [filterRole, setFilterRole] = useState<string>('all');

  const filteredReviews = REVIEWS.filter((r) => {
    if (filterRole === 'all') return true;
    return r.role.toLowerCase().includes(filterRole.toLowerCase());
  });

  return (
    <div className="space-y-16 pb-16">
      <Breadcrumbs items={[{ label: 'Client Reviews & Testimonials' }]} />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24A]">
              Reputation & Trust
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-black text-[#12284C] mt-2 leading-tight">
              Client Testimonials & Verified Reviews
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed font-light">
              Over 1,250 Long Island families and investors have trusted the USA Real Estate Team at LPT Realty with their most significant financial transactions.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm shrink-0 flex items-center gap-4">
            <div className="text-center">
              <div className="text-3xl font-serif font-black text-[#12284C]">5.0</div>
              <div className="flex items-center gap-0.5 text-[#C8A24A] my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <div className="text-[10px] text-slate-400 font-bold uppercase">Google & Zillow</div>
            </div>

            <div className="h-10 w-[1px] bg-slate-200" />

            <div>
              <a
                href="https://google.com/search?q=USA+Real+Estate+Team+LPT+Realty+reviews"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-[#12284C] text-white rounded-lg text-xs font-bold hover:bg-[#1A335E] transition-colors inline-flex items-center gap-1.5"
              >
                <span>Leave a Google Review</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials Showcase Placeholder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#12284C] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-white/10">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[#C8A24A] text-xs font-bold uppercase tracking-widest">
              Video Stories
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mt-1 text-white">
              Hear Directly from Our Clients
            </h2>
            <p className="text-xs text-slate-300 mt-1 font-light">
              Watch how our staging, marketing, and negotiation strategy delivered exceptional results for Long Island families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Video Placeholder 1 */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-slate-900 border border-white/10 group shadow-md">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                alt="The Miller Family Video Testimonial"
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#C8A24A] text-[#12284C] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform cursor-pointer">
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-sm font-serif font-bold">
                  The Miller Family: Selling in Garden City for $50K Over Ask
                </div>
                <div className="text-xs text-slate-300 mt-0.5">
                  Closed with Anthony Russo in 7 Days
                </div>
              </div>
            </div>

            {/* Video Placeholder 2 */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-slate-900 border border-white/10 group shadow-md">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
                alt="David & Kimberly Zhang Video Testimonial"
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#C8A24A] text-[#12284C] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform cursor-pointer">
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-sm font-serif font-bold">
                  David & Kimberly: NYC to Syosset Relocation Success
                </div>
                <div className="text-xs text-slate-300 mt-0.5">
                  Guided by Marcus Chen to an Off-Market Colonial
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Filters & Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilterRole('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                filterRole === 'all'
                  ? 'bg-[#12284C] text-white'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              All Reviews
            </button>
            <button
              onClick={() => setFilterRole('Seller')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                filterRole === 'Seller'
                  ? 'bg-[#12284C] text-white'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              Home Sellers
            </button>
            <button
              onClick={() => setFilterRole('Buyer')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                filterRole === 'Buyer'
                  ? 'bg-[#12284C] text-white'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              Home Buyers
            </button>
          </div>

          <span className="text-xs text-slate-500">
            Showing {filteredReviews.length} Verified Testimonials
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1 text-[#C8A24A]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">{rev.date}</span>
                </div>

                <p className="text-xs text-slate-700 italic leading-relaxed">
                  "{rev.reviewText}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-[#12284C]">{rev.clientName}</div>
                  <div className="text-[11px] text-slate-500">
                    {rev.role} · {rev.location}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-[#C8A24A] font-bold block uppercase tracking-wider">
                    Verified
                  </span>
                  <span className="text-[10px] text-slate-400">Agent: {rev.agentName.split(' ')[0]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white p-10 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-2xl font-serif font-bold text-[#12284C]">
          Experience the Difference of True Fiduciary Representation
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-2">
          Contact our team today to discuss your buying or selling goals.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={() => navigate('/home-valuation')}
            className="bg-[#12284C] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#1A335E] transition-colors cursor-pointer"
          >
            Get Free Valuation
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="border border-slate-300 text-slate-700 px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider hover:border-[#12284C] transition-colors cursor-pointer"
          >
            Schedule Consultation
          </button>
        </div>
      </section>
    </div>
  );
};
