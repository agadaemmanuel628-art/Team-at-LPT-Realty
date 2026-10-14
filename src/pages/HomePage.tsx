import React, { useState } from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { useFavorites } from '../context/FavoritesContext';
import { BUSINESS_INFO, PROPERTIES, AGENTS, AREAS, BLOG_POSTS, REVIEWS } from '../data/mockData';
import {
  Search,
  Bed,
  Bath,
  Maximize2,
  Heart,
  ArrowRight,
  ShieldCheck,
  Award,
  TrendingUp,
  Users,
  Star,
  CheckCircle2,
  Calendar,
  Send,
  Sparkles,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate } = useRouter();
  const { isFavorite, toggleFavorite } = useFavorites();

  // Search State for Hero
  const [searchLocation, setSearchLocation] = useState('');
  const [searchPrice, setSearchPrice] = useState('');
  const [searchBeds, setSearchBeds] = useState('');
  const [searchType, setSearchType] = useState('');

  // Contact form state
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Buying',
    message: '',
  });

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to listings with search parameters
    navigate(`/listings?town=${encodeURIComponent(searchLocation)}&beds=${searchBeds}&type=${encodeURIComponent(searchType)}`);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email) return;
    setContactSubmitted(true);
  };

  const featuredProperties = PROPERTIES.slice(0, 3);
  const featuredTowns = AREAS.slice(0, 4);
  const latestPosts = BLOG_POSTS.slice(0, 3);

  return (
    <div className="space-y-20 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center justify-center bg-slate-900 text-white overflow-hidden">
        {/* Cinematic Background Image with Dark Vignette Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
            alt="Luxury Long Island Home"
            className="w-full h-full object-cover object-center scale-105 animate-[zoomIn_12s_ease-out_forwards]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1629] via-[#12284C]/80 to-[#12284C]/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#C8A24A] text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Long Island, New York · LPT Realty</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-white max-w-4xl mx-auto leading-tight text-balance">
            Find Your Home on Long Island and Beyond
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl mx-auto font-sans font-light">
            Guiding families and investors with fiduciary integrity, bespoke marketing, and unmatched local intelligence across Nassau, Suffolk, and the Hamptons.
          </p>

          {/* Search Bar Form */}
          <div className="mt-10 bg-white rounded-2xl shadow-2xl p-4 sm:p-5 text-slate-800 text-left border border-slate-100 max-w-4xl mx-auto">
            <form onSubmit={handleHeroSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Location / Town
                </label>
                <select
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                >
                  <option value="">All Long Island Towns</option>
                  <option value="Garden City">Garden City</option>
                  <option value="Great Neck">Great Neck</option>
                  <option value="Huntington">Huntington</option>
                  <option value="Long Beach">Long Beach</option>
                  <option value="Syosset">Syosset</option>
                  <option value="Southampton">Southampton & Hamptons</option>
                  <option value="Rockville Centre">Rockville Centre</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Property Type
                </label>
                <select
                  value={searchType}
                  onChange={(e) => setSearchType(e.target.value)}
                  className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                >
                  <option value="">All Property Types</option>
                  <option value="Single Family">Single Family</option>
                  <option value="Luxury Estate">Luxury Estate</option>
                  <option value="Waterfront">Waterfront</option>
                  <option value="Townhouse">Townhouse / Condo</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Bedrooms
                </label>
                <select
                  value={searchBeds}
                  onChange={(e) => setSearchBeds(e.target.value)}
                  className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                >
                  <option value="">Any Bedrooms</option>
                  <option value="3">3+ Bedrooms</option>
                  <option value="4">4+ Bedrooms</option>
                  <option value="5">5+ Bedrooms</option>
                </select>
              </div>

              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full bg-[#12284C] hover:bg-[#1A335E] text-white py-2.5 px-4 rounded-lg font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer h-[42px]"
                >
                  <Search className="w-4 h-4 text-[#C8A24A]" />
                  <span>Search Homes</span>
                </button>
              </div>
            </form>
          </div>

          {/* Quick link tags */}
          <div className="mt-6 flex items-center justify-center flex-wrap gap-2 text-xs text-slate-300">
            <span className="text-slate-400">Popular Searches:</span>
            <button
              onClick={() => navigate('/listings?type=Waterfront')}
              className="hover:text-[#C8A24A] underline underline-offset-4 cursor-pointer"
            >
              Waterfront Homes
            </button>
            <span>·</span>
            <button
              onClick={() => navigate('/listings?town=Garden City')}
              className="hover:text-[#C8A24A] underline underline-offset-4 cursor-pointer"
            >
              Garden City Colonials
            </button>
            <span>·</span>
            <button
              onClick={() => navigate('/home-valuation')}
              className="text-[#C8A24A] font-semibold hover:underline cursor-pointer"
            >
              What is my home worth?
            </button>
          </div>
        </div>
      </section>

      {/* 2. STATS & WHY CHOOSE US STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-serif font-black text-[#12284C]">
              {BUSINESS_INFO.stats.volume}
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-500 font-bold mt-1">
              Career Sales Volume
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif font-black text-[#12284C]">
              {BUSINESS_INFO.stats.homesSold}
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-500 font-bold mt-1">
              Long Island Homes Sold
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif font-black text-[#C8A24A]">
              {BUSINESS_INFO.stats.avgDaysOnMarket}
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-500 font-bold mt-1">
              Average Days on Market
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif font-black text-[#12284C]">
              {BUSINESS_INFO.stats.clientSatisfaction}
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-500 font-bold mt-1">
              Client Satisfaction
            </div>
          </div>
        </div>

        {/* Why Choose Us 3-pillar banner */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-[#12284C]/30 transition-all">
            <div className="w-12 h-12 rounded-lg bg-[#12284C]/5 flex items-center justify-center text-[#12284C] mb-4">
              <ShieldCheck className="w-6 h-6 text-[#C8A24A]" />
            </div>
            <h3 className="text-lg font-serif font-bold text-[#12284C] mb-2">
              Deep Long Island Roots
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We live, raise families, and invest in the communities we serve. From Nassau’s Gold Coast to the Hamptons, our micro-market data gives you a distinct advantage.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-[#12284C]/30 transition-all">
            <div className="w-12 h-12 rounded-lg bg-[#12284C]/5 flex items-center justify-center text-[#12284C] mb-4">
              <TrendingUp className="w-6 h-6 text-[#C8A24A]" />
            </div>
            <h3 className="text-lg font-serif font-bold text-[#12284C] mb-2">
              LPT Realty Tech Engine
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Operating under LPT Realty, we deploy high-velocity cloud syndication, 4K digital staging, and targeted geo-fencing campaigns that traditional firms cannot match.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-[#12284C]/30 transition-all">
            <div className="w-12 h-12 rounded-lg bg-[#12284C]/5 flex items-center justify-center text-[#12284C] mb-4">
              <Award className="w-6 h-6 text-[#C8A24A]" />
            </div>
            <h3 className="text-lg font-serif font-bold text-[#12284C] mb-2">
              Fiduciary Representation
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your financial and family interests come first. We negotiate aggressively, clarify complex New York disclosures, and protect your equity from contract to closing.
            </p>
          </div>
        </div>
      </section>

      {/* 3. FEATURED LISTINGS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#C8A24A]">
              Exclusive Properties
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#12284C] mt-1">
              Featured Long Island Listings
            </h2>
          </div>
          <Link
            href="/listings"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#12284C] hover:text-[#C8A24A] transition-colors"
          >
            <span>View All Listings ({PROPERTIES.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((prop) => (
            <div
              key={prop.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all group flex flex-col"
            >
              {/* Image & Status Tag */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={prop.images[0]}
                  alt={prop.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#12284C] text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  {prop.status}
                </div>
                <button
                  onClick={() => toggleFavorite(prop.id)}
                  aria-label="Save to favorites"
                  className={`absolute top-3 right-3 p-2 rounded-full transition-colors ${
                    isFavorite(prop.id)
                      ? 'bg-red-500 text-white shadow'
                      : 'bg-white/80 hover:bg-white text-slate-700'
                  }`}
                >
                  <Heart className="w-4 h-4 fill-current" />
                </button>
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2.5 py-0.5 rounded">
                  {prop.town}, NY
                </div>
              </div>

              {/* Card Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xl font-serif font-bold text-[#12284C]">
                    ${prop.price.toLocaleString()}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-800 mt-1 line-clamp-1">
                    {prop.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">{prop.address}, {prop.town}, NY {prop.zip}</p>

                  <div className="flex items-center gap-4 text-xs text-slate-600 mt-4 pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4 text-[#C8A24A]" />
                      <span>{prop.beds} Beds</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4 text-[#C8A24A]" />
                      <span>{prop.baths} Baths</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Maximize2 className="w-4 h-4 text-[#C8A24A]" />
                      <span>{prop.sqft.toLocaleString()} Sq Ft</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    MLS #{prop.mlsNumber}
                  </span>
                  <Link
                    href={`/listings/${prop.id}`}
                    className="text-xs font-bold text-[#12284C] hover:text-[#C8A24A] inline-flex items-center gap-1"
                  >
                    <span>View Property</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. HOME VALUATION CTA STRIP */}
      <section className="bg-gradient-to-r from-[#12284C] to-[#1A335E] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-[#C8A24A] text-xs font-bold uppercase tracking-widest">
              Thinking of Selling on Long Island?
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-black mt-2 tracking-tight text-white">
              Get Your Free Instant Home Valuation
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 mt-2 leading-relaxed">
              Curious what your Long Island home is worth in today's market? Get a comprehensive comparative market report prepared by our senior valuation specialists. No fees, no obligations.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => navigate('/home-valuation')}
              className="bg-[#C8A24A] hover:bg-[#B68E37] text-[#12284C] px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all cursor-pointer whitespace-nowrap"
            >
              Get Free Valuation Now
            </button>
            <button
              onClick={() => navigate('/sold')}
              className="bg-white/10 hover:bg-white/20 text-white px-5 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap border border-white/20"
            >
              See Sold Results
            </button>
          </div>
        </div>
      </section>

      {/* 5. SERVICES OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-[#C8A24A]">
            Comprehensive Advisory
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#12284C] mt-1">
            Tailored Real Estate Solutions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Whether you are buying your first suburban home, selling an estate, or expanding an investment portfolio, our team provides full-spectrum fiduciary guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-[#12284C] transition-all flex flex-col justify-between">
            <div>
              <div className="text-2xl font-serif font-bold text-[#C8A24A] mb-3">01</div>
              <h3 className="text-base font-serif font-bold text-[#12284C] mb-2">
                Home Buying
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Personalized MLS search alerts, off-market opportunities, school district evaluations, and expert offer negotiation.
              </p>
            </div>
            <Link
              href="/buy"
              className="mt-6 inline-flex items-center gap-1 text-xs font-bold text-[#12284C] hover:text-[#C8A24A]"
            >
              <span>Buyer Guide & Process</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-[#12284C] transition-all flex flex-col justify-between">
            <div>
              <div className="text-2xl font-serif font-bold text-[#C8A24A] mb-3">02</div>
              <h3 className="text-base font-serif font-bold text-[#12284C] mb-2">
                Home Selling & Staging
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Strategic pricing, certified home staging, 4K architectural video, and multi-channel LPT syndication to net top dollar.
              </p>
            </div>
            <Link
              href="/sell"
              className="mt-6 inline-flex items-center gap-1 text-xs font-bold text-[#12284C] hover:text-[#C8A24A]"
            >
              <span>Seller Marketing Plan</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-[#12284C] transition-all flex flex-col justify-between">
            <div>
              <div className="text-2xl font-serif font-bold text-[#C8A24A] mb-3">03</div>
              <h3 className="text-base font-serif font-bold text-[#12284C] mb-2">
                Real Estate Investors
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Cap rate modeling, multi-family acquisition, 1031 tax-deferred exchanges, and high-yield Hamptons seasonal rentals.
              </p>
            </div>
            <Link
              href="/investors"
              className="mt-6 inline-flex items-center gap-1 text-xs font-bold text-[#12284C] hover:text-[#C8A24A]"
            >
              <span>Investor Opportunities</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-[#12284C] transition-all flex flex-col justify-between">
            <div>
              <div className="text-2xl font-serif font-bold text-[#C8A24A] mb-3">04</div>
              <h3 className="text-base font-serif font-bold text-[#12284C] mb-2">
                NYC to Long Island Relocation
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specialized transition advisory for Manhattan and Brooklyn residents moving to Long Island suburbs. Commute & tax analysis.
              </p>
            </div>
            <Link
              href="/services"
              className="mt-6 inline-flex items-center gap-1 text-xs font-bold text-[#12284C] hover:text-[#C8A24A]"
            >
              <span>View All Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. NEIGHBORHOODS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#C8A24A]">
              Communities
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#12284C] mt-1">
              Explore Long Island Enclaves
            </h2>
          </div>
          <Link
            href="/areas"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#12284C] hover:text-[#C8A24A] transition-colors"
          >
            <span>All Areas We Serve</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTowns.map((town) => (
            <Link
              key={town.slug}
              href={`/areas/${town.slug}`}
              className="group relative rounded-xl overflow-hidden aspect-[4/5] bg-slate-900 shadow border border-slate-200 block"
            >
              <img
                src={town.image}
                alt={town.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C8A24A]">
                  {town.county} County
                </span>
                <h3 className="text-lg font-serif font-bold text-white mt-1">
                  {town.name}
                </h3>
                <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                  Median: ${town.medianPrice.toLocaleString()}
                </p>
                <div className="mt-2 text-[10px] text-[#C8A24A] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Explore Town & Homes</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. MEET THE TEAM PREVIEW */}
      <section className="bg-slate-100 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#C8A24A]">
                Experienced Advisors
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#12284C] mt-1">
                Meet the USA Real Estate Team
              </h2>
            </div>
            <Link
              href="/team"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#12284C] hover:text-[#C8A24A] transition-colors"
            >
              <span>View All Agents</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AGENTS.map((agent) => (
              <div
                key={agent.id}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-[4/5] overflow-hidden bg-slate-200">
                    <img
                      src={agent.photo}
                      alt={agent.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-serif font-bold text-[#12284C]">
                      {agent.name}
                    </h3>
                    <p className="text-xs text-[#C8A24A] font-semibold mt-0.5">
                      {agent.title}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-2 line-clamp-2">
                      {agent.bio}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-mono">
                    {agent.licenseNumber}
                  </span>
                  <Link
                    href={`/team/${agent.id}`}
                    className="text-xs font-bold text-[#12284C] hover:text-[#C8A24A] inline-flex items-center gap-1"
                  >
                    <span>Profile</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS SLIDER / GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-[#C8A24A]">
            Verified Client Reviews
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#12284C] mt-1">
            Trusted by Long Island Families
          </h2>
          <div className="flex items-center justify-center gap-1 mt-2 text-[#C8A24A]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
            <span className="text-xs font-bold text-slate-700 ml-2">
              5.0 Star Average on Google & Zillow
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.slice(0, 3).map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[#C8A24A] mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-slate-700 italic leading-relaxed">
                  "{rev.reviewText}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-[#12284C]">{rev.clientName}</div>
                  <div className="text-[11px] text-slate-500">{rev.role} · {rev.location}</div>
                </div>
                <div className="text-[10px] font-bold text-[#C8A24A] uppercase tracking-wider">
                  Verified
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#12284C] hover:text-[#C8A24A]"
          >
            <span>Read All Verified Reviews ({REVIEWS.length}+)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 9. LATEST BLOG POSTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#C8A24A]">
              Long Island Market Reports
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#12284C] mt-1">
              Latest Insights & Real Estate News
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#12284C] hover:text-[#C8A24A] transition-colors"
          >
            <span>All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-2">
                    <span className="font-bold text-[#C8A24A] uppercase tracking-wider">{post.category}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-base font-serif font-bold text-[#12284C] group-hover:text-[#C8A24A] transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>By {post.author}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-bold text-[#12284C] hover:text-[#C8A24A]"
                >
                  Read &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 10. FINAL CONTACT & ADVISORY CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24A]">
              Connect With Us Today
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-black text-[#12284C] mt-2">
              Ready to Make Your Move on Long Island?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
              Whether you are preparing to list your current home or searching for an off-market opportunity, Anthony Russo and the team are available 7 days a week for a confidential consultation.
            </p>

            <div className="mt-6 space-y-3 text-xs text-slate-700">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C8A24A]" />
                <span>Zero obligation, complimentary home equity & market review</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C8A24A]" />
                <span>Direct access to off-market and pre-MLS Long Island listings</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C8A24A]" />
                <span>Backed by LPT Realty’s national marketing distribution</span>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="px-5 py-3 rounded-lg bg-[#12284C] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1A335E] transition-colors"
              >
                Call {BUSINESS_INFO.phone}
              </a>
              <Link
                href="/contact"
                className="px-5 py-3 rounded-lg border border-slate-300 text-slate-700 hover:text-[#12284C] text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Office Location & Hours
              </Link>
            </div>
          </div>

          {/* Inline Form */}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
            {contactSubmitted ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-[#12284C]">
                  Thank You for Reaching Out
                </h3>
                <p className="text-xs text-slate-600 mt-2 max-w-sm mx-auto">
                  An agent from the USA Real Estate Team at LPT Realty will contact you within 2 business hours.
                </p>
                <button
                  onClick={() => setContactSubmitted(false)}
                  className="mt-4 text-xs font-bold text-[#12284C] underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <h3 className="text-lg font-serif font-bold text-[#12284C]">
                  Schedule a Consultation
                </h3>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    placeholder="e.g. Michael Smith"
                    className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="e.g. michael@example.com"
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      placeholder="e.g. (516) 555-0199"
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    I am interested in
                  </label>
                  <select
                    value={contactForm.interest}
                    onChange={(e) => setContactForm({ ...contactForm, interest: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                  >
                    <option value="Buying">Buying a Long Island Home</option>
                    <option value="Selling">Selling My Property</option>
                    <option value="Home Valuation">Free Home Valuation</option>
                    <option value="Investing">Real Estate Investment</option>
                    <option value="Relocating">Relocating from NYC</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    How can we help?
                  </label>
                  <textarea
                    rows={3}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Tell us about your timeline, ideal town, or current property..."
                    className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#12284C] hover:bg-[#1A335E] text-white py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-[#C8A24A]" />
                  <span>Request Confidential Consultation</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
