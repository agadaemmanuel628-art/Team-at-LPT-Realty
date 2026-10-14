import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useRouter, Link } from '../context/RouterContext';
import { useFavorites } from '../context/FavoritesContext';
import { AREAS, PROPERTIES } from '../data/mockData';
import {
  MapPin,
  School,
  Train,
  DollarSign,
  Clock,
  Heart,
  Bed,
  Bath,
  Maximize2,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';

export const AreaDetailPage: React.FC = () => {
  const { params, navigate } = useRouter();
  const { isFavorite, toggleFavorite } = useFavorites();
  const townSlug = params.town || 'garden-city';

  const area = AREAS.find((a) => a.slug === townSlug) || AREAS[0];
  const townProperties = PROPERTIES.filter(
    (p) => p.town.toLowerCase() === area.name.toLowerCase() || p.county === area.county
  );

  return (
    <div className="space-y-16 pb-16">
      <Breadcrumbs
        items={[
          { label: 'Areas We Serve', href: '/areas' },
          { label: area.name },
        ]}
      />

      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white min-h-[380px] flex items-end p-8 sm:p-12 shadow-xl">
          <img
            src={area.image}
            alt={area.name}
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="text-[#C8A24A] text-xs font-bold uppercase tracking-widest">
              {area.county} County · Long Island Community Profile
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-black text-white leading-tight">
              {area.name}, NY Real Estate
            </h1>
            <p className="text-sm sm:text-base text-slate-200 font-light">
              {area.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Market Snapshot Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
          <div>
            <div className="text-xs uppercase tracking-wider text-slate-400 font-bold">Median Home Price</div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-[#12284C] mt-1">
              ${area.medianPrice.toLocaleString()}
            </div>
            <div className="text-[11px] text-emerald-600 font-semibold mt-0.5">Resilient Demand</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-slate-400 font-bold">Avg Days on Market</div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-[#12284C] mt-1">
              {area.averageDaysOnMarket} Days
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">Fast absorption rate</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-slate-400 font-bold">School District Rating</div>
            <div className="text-xl sm:text-2xl font-serif font-bold text-[#C8A24A] mt-1">
              {area.schoolRating}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">Top Tier NYS Ranking</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-slate-400 font-bold">NYC Commute Time</div>
            <div className="text-xl sm:text-2xl font-serif font-bold text-[#12284C] mt-1">
              {area.commuteToPennStation.split(' ')[0]} {area.commuteToPennStation.split(' ')[1]}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">LIRR Direct Rail</div>
          </div>
        </div>
      </section>

      {/* Local Overview & Lifestyle */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-2xl font-serif font-bold text-[#12284C]">
              Living in {area.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
              {area.overview}
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-xl font-serif font-bold text-[#12284C]">
              Lifestyle & Community Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {area.lifestyle.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#C8A24A] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Town Highlights Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
            <h3 className="text-base font-serif font-bold text-[#12284C]">
              Key Town Takeaways
            </h3>
            <ul className="space-y-3 text-xs text-slate-600">
              {area.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#C8A24A] font-bold">•</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-slate-200">
              <button
                onClick={() => navigate('/home-valuation')}
                className="w-full bg-[#12284C] text-white py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#1A335E] transition-colors cursor-pointer"
              >
                Get {area.name} Valuation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Homes for Sale in This Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24A]">
              Active Listings
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#12284C] mt-1">
              Properties Available in & around {area.name}
            </h2>
          </div>
          <Link
            href="/listings"
            className="text-xs font-bold text-[#12284C] hover:text-[#C8A24A]"
          >
            All Listings &rarr;
          </Link>
        </div>

        {townProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {townProperties.map((prop) => (
              <div
                key={prop.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={prop.images[0]}
                      alt={prop.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-[#12284C] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      {prop.status}
                    </div>
                    <button
                      onClick={() => toggleFavorite(prop.id)}
                      className="absolute top-3 right-3 p-2 rounded-full bg-white/80 text-slate-700 hover:bg-white"
                    >
                      <Heart className={`w-4 h-4 ${isFavorite(prop.id) ? 'fill-red-500 text-red-500' : ''}`} />
                    </button>
                  </div>
                  <div className="p-5">
                    <div className="text-xl font-serif font-bold text-[#12284C]">
                      ${prop.price.toLocaleString()}
                    </div>
                    <h3 className="text-sm font-semibold text-slate-800 line-clamp-1 mt-0.5">
                      {prop.title}
                    </h3>
                    <p className="text-xs text-slate-500">{prop.address}, {prop.town}</p>
                    <div className="flex items-center gap-4 text-xs text-slate-600 mt-4 pt-3 border-t border-slate-100">
                      <span>{prop.beds} Beds</span>
                      <span>·</span>
                      <span>{prop.baths} Baths</span>
                      <span>·</span>
                      <span>{prop.sqft.toLocaleString()} Sq Ft</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-mono">MLS #{prop.mlsNumber}</span>
                  <Link
                    href={`/listings/${prop.id}`}
                    className="text-xs font-bold text-[#12284C] hover:text-[#C8A24A]"
                  >
                    View Details &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-10 bg-white border border-slate-200 rounded-2xl text-center">
            <p className="text-xs text-slate-600">
              No public listings in {area.name} today. Contact us for private off-market listings in {area.name}.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};
