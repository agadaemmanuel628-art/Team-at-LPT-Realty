import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useRouter, Link } from '../context/RouterContext';
import { SOLD_PROPERTIES, BUSINESS_INFO } from '../data/mockData';
import { Award, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

export const SoldPropertiesPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="space-y-16 pb-16">
      <Breadcrumbs items={[{ label: 'Sold Properties & Results' }]} />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24A]">
            Verified Track Record
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-[#12284C] mt-2 leading-tight">
            Our Recently Sold Properties & Results
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-light">
            Proven execution speaks louder than promises. Browse a curated selection of residential properties successfully marketed and closed by the USA Real Estate Team at LPT Realty across Long Island.
          </p>
        </div>
      </section>

      {/* Results Summary Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#12284C] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[#C8A24A] text-xs font-bold uppercase tracking-widest">
              Performance Metrics
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
              The USA Real Estate Team Selling Advantage
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#C8A24A]">
                19 Days
              </div>
              <div className="text-xs text-slate-300 font-semibold mt-1">
                Average Days on Market
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">MLS avg is 44 days</div>
            </div>

            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-white">
                102.4%
              </div>
              <div className="text-xs text-slate-300 font-semibold mt-1">
                Sale-to-List Ratio
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">Consistently above ask</div>
            </div>

            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-white">
                $480M+
              </div>
              <div className="text-xs text-slate-300 font-semibold mt-1">
                Career Sales Volume
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">Nassau & Suffolk</div>
            </div>

            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#C8A24A]">
                1,250+
              </div>
              <div className="text-xs text-slate-300 font-semibold mt-1">
                Families Represented
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">99.4% Client satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sold Properties Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOLD_PROPERTIES.map((prop) => (
            <div
              key={prop.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={prop.image}
                    alt={prop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-emerald-600 text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow">
                    CLOSED · {prop.soldDate}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2.5 py-0.5 rounded">
                    {prop.town}, NY
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Sold Price</div>
                      <div className="text-2xl font-serif font-bold text-[#12284C]">
                        ${prop.salePrice.toLocaleString()}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[11px] text-slate-400 line-through">
                        List: ${prop.originalPrice.toLocaleString()}
                      </div>
                      <div className="text-xs font-bold text-emerald-600">
                        {prop.daysOnMarket} Days on Mkt
                      </div>
                    </div>
                  </div>

                  <h3 className="text-sm font-serif font-bold text-slate-800 mt-3 line-clamp-1">
                    {prop.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">{prop.address}, {prop.town}</p>

                  <div className="flex items-center gap-3 text-xs text-slate-600 mt-4 pt-3 border-t border-slate-100">
                    <span>{prop.beds} Beds</span>
                    <span>·</span>
                    <span>{prop.baths} Baths</span>
                    <span>·</span>
                    <span>{prop.sqft.toLocaleString()} Sq Ft</span>
                    <span>·</span>
                    <span>{prop.propertyType}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-[#C8A24A] font-semibold">
                  Represented by USA Real Estate
                </span>
                <button
                  onClick={() => navigate('/home-valuation')}
                  className="text-xs font-bold text-[#12284C] hover:text-[#C8A24A] underline cursor-pointer"
                >
                  Value My Similar Home
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white p-10 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-2xl font-serif font-bold text-[#12284C]">
          Ready to Add Your Property to Our Success Stories?
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-2">
          Contact our listing directors for an upfront, candid analysis of what your Long Island home can fetch in today’s active market.
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
            Schedule Seller Consultation
          </button>
        </div>
      </section>
    </div>
  );
};
