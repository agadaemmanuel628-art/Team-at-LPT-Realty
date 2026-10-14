import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useRouter, Link } from '../context/RouterContext';
import { AREAS } from '../data/mockData';
import { MapPin, ArrowRight, School, Train, DollarSign, Clock } from 'lucide-react';

export const AreasPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="space-y-16 pb-16">
      <Breadcrumbs items={[{ label: 'Areas We Serve' }]} />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24A]">
            Neighborhood Guides
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-[#12284C] mt-2 leading-tight">
            Long Island Neighborhoods & Communities
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-light">
            Every Long Island town offers a distinctive character—from the historic, tree-lined streets of Garden City to the Gold Coast waterfronts of Great Neck, vibrant village life in Huntington, and oceanfront sanctuaries in the Hamptons. Explore our in-depth community profiles.
          </p>
        </div>
      </section>

      {/* Towns Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AREAS.map((town) => (
            <div
              key={town.slug}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-slate-900 relative">
                  <img
                    src={town.image}
                    alt={town.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#12284C] text-white text-[11px] font-bold px-2.5 py-1 rounded">
                    {town.county} County
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-serif font-bold text-[#12284C] group-hover:text-[#C8A24A] transition-colors">
                    <Link href={`/areas/${town.slug}`}>{town.name}</Link>
                  </h2>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {town.tagline}
                  </p>

                  {/* Market Snapshot Matrix */}
                  <div className="mt-5 grid grid-cols-2 gap-2 text-xs pt-4 border-t border-slate-100">
                    <div className="p-2.5 bg-slate-50 rounded-lg">
                      <div className="text-[10px] text-slate-400 font-bold uppercase">Median Price</div>
                      <div className="font-serif font-bold text-[#12284C] mt-0.5">
                        ${town.medianPrice.toLocaleString()}
                      </div>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-lg">
                      <div className="text-[10px] text-slate-400 font-bold uppercase">Avg Days on Mkt</div>
                      <div className="font-serif font-bold text-[#12284C] mt-0.5">
                        {town.averageDaysOnMarket} Days
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 space-y-1.5 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <School className="w-3.5 h-3.5 text-[#C8A24A] shrink-0" />
                      <span className="truncate">{town.schoolRating}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Train className="w-3.5 h-3.5 text-[#C8A24A] shrink-0" />
                      <span className="truncate">{town.commuteToPennStation}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/listings?town=${encodeURIComponent(town.name)}`}
                  className="text-xs text-slate-500 hover:text-[#12284C] underline"
                >
                  View Homes for Sale
                </Link>
                <Link
                  href={`/areas/${town.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#12284C] hover:text-[#C8A24A]"
                >
                  <span>Explore Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Relocation Consultation CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#12284C] text-white p-8 sm:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
          <div>
            <span className="text-[#C8A24A] text-xs font-bold uppercase tracking-widest">
              Unsure Which Town Is Right For You?
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold mt-1 text-white">
              Schedule a Custom Long Island Neighborhood Tour
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Tell us your commute requirements, budget, and school priorities, and our advisors will build a personalized community roadmap.
            </p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="bg-[#C8A24A] hover:bg-[#B68E37] text-[#12284C] px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap"
          >
            Request Town Tour
          </button>
        </div>
      </section>
    </div>
  );
};
