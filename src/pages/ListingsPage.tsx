import React, { useState, useMemo } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useRouter, Link } from '../context/RouterContext';
import { useFavorites } from '../context/FavoritesContext';
import { PROPERTIES } from '../data/mockData';
import { Property } from '../types';
import {
  Search,
  SlidersHorizontal,
  LayoutGrid,
  List,
  Heart,
  Bed,
  Bath,
  Maximize2,
  ArrowRight,
  RotateCcw,
} from 'lucide-react';

export const ListingsPage: React.FC = () => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Filter States
  const [selectedTown, setSelectedTown] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedPriceMax, setSelectedPriceMax] = useState<number>(6000000);
  const [selectedBeds, setSelectedBeds] = useState<string>('all');
  const [selectedBaths, setSelectedBaths] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;

  // Filter Logic
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((prop) => {
      if (selectedTown !== 'all' && prop.town.toLowerCase() !== selectedTown.toLowerCase()) {
        return false;
      }
      if (selectedType !== 'all' && prop.propertyType !== selectedType) {
        return false;
      }
      if (prop.price > selectedPriceMax) {
        return false;
      }
      if (selectedBeds !== 'all' && prop.beds < parseInt(selectedBeds, 10)) {
        return false;
      }
      if (selectedBaths !== 'all' && prop.baths < parseFloat(selectedBaths)) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchTitle = prop.title.toLowerCase().includes(q);
        const matchTown = prop.town.toLowerCase().includes(q);
        const matchAddress = prop.address.toLowerCase().includes(q);
        const matchMls = prop.mlsNumber.toLowerCase().includes(q);
        if (!matchTitle && !matchTown && !matchAddress && !matchMls) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'beds') return b.beds - a.beds;
      if (sortBy === 'sqft') return b.sqft - a.sqft;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedTown, selectedType, selectedPriceMax, selectedBeds, selectedBaths, searchQuery, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage) || 1;
  const paginatedProperties = filteredProperties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const resetFilters = () => {
    setSelectedTown('all');
    setSelectedType('all');
    setSelectedPriceMax(6000000);
    setSelectedBeds('all');
    setSelectedBaths('all');
    setSearchQuery('');
    setSortBy('featured');
    setCurrentPage(1);
  };

  return (
    <div className="space-y-12 pb-16">
      <Breadcrumbs items={[{ label: 'Property Listings' }]} />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24A]">
              Exclusive Inventory
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif font-black text-[#12284C] mt-1">
              Long Island Homes for Sale
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Explore active listings across Garden City, Great Neck, Huntington, Long Beach, Syosset, and the Hamptons.
            </p>
          </div>

          {/* Search bar inside header */}
          <div className="w-full md:w-80">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search town, address, MLS #..."
                className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Toolbar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {/* Town Selector */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                Town / Enclave
              </label>
              <select
                value={selectedTown}
                onChange={(e) => {
                  setSelectedTown(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-2.5 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none"
              >
                <option value="all">All Locations</option>
                <option value="Garden City">Garden City</option>
                <option value="Great Neck">Great Neck</option>
                <option value="Huntington">Huntington</option>
                <option value="Long Beach">Long Beach</option>
                <option value="Rockville Centre">Rockville Centre</option>
                <option value="Syosset">Syosset</option>
                <option value="Southampton">Southampton</option>
                <option value="Port Washington">Port Washington</option>
              </select>
            </div>

            {/* Property Type */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                Property Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => {
                  setSelectedType(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-2.5 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none"
              >
                <option value="all">All Types</option>
                <option value="Single Family">Single Family</option>
                <option value="Luxury Estate">Luxury Estate</option>
                <option value="Waterfront">Waterfront</option>
                <option value="Townhouse">Townhouse</option>
              </select>
            </div>

            {/* Price Max */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                Max Price: ${(selectedPriceMax / 1000000).toFixed(1)}M
              </label>
              <input
                type="range"
                min={750000}
                max={6000000}
                step={250000}
                value={selectedPriceMax}
                onChange={(e) => {
                  setSelectedPriceMax(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="w-full accent-[#12284C] cursor-pointer mt-1"
              />
            </div>

            {/* Bedrooms */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                Bedrooms
              </label>
              <select
                value={selectedBeds}
                onChange={(e) => {
                  setSelectedBeds(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-2.5 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none"
              >
                <option value="all">Any Beds</option>
                <option value="3">3+ Beds</option>
                <option value="4">4+ Beds</option>
                <option value="5">5+ Beds</option>
              </select>
            </div>

            {/* Bathrooms */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                Bathrooms
              </label>
              <select
                value={selectedBaths}
                onChange={(e) => {
                  setSelectedBaths(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-2.5 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none"
              >
                <option value="all">Any Baths</option>
                <option value="2">2+ Baths</option>
                <option value="3">3+ Baths</option>
                <option value="4">4+ Baths</option>
              </select>
            </div>

            {/* Sort Order */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-2.5 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="beds">Most Bedrooms</option>
                <option value="sqft">Largest Sq Ft</option>
              </select>
            </div>
          </div>

          {/* Sub bar: Active counts, Clear filters & View Mode Toggle */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <div className="flex items-center gap-3">
              <span className="font-bold text-[#12284C]">
                Showing {filteredProperties.length} Properties
              </span>
              {(selectedTown !== 'all' || selectedType !== 'all' || selectedPriceMax < 6000000 || selectedBeds !== 'all' || searchQuery !== '') && (
                <button
                  onClick={resetFilters}
                  className="text-slate-500 hover:text-[#12284C] inline-flex items-center gap-1 underline cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset Filters</span>
                </button>
              )}
            </div>

            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-md cursor-pointer transition-colors ${
                  viewMode === 'grid' ? 'bg-white shadow text-[#12284C]' : 'text-slate-500 hover:text-slate-800'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-md cursor-pointer transition-colors ${
                  viewMode === 'list' ? 'bg-white shadow text-[#12284C]' : 'text-slate-500 hover:text-slate-800'
                }`}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Property Results */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {paginatedProperties.length === 0 ? (
          <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center space-y-4">
            <h3 className="text-xl font-serif font-bold text-[#12284C]">
              No Properties Found Matching Your Criteria
            </h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto">
              Try adjusting your price range or clearing specific town filters. Our team also has off-market listings available upon request.
            </p>
            <button
              onClick={resetFilters}
              className="bg-[#12284C] text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#1A335E] transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          /* Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedProperties.map((prop) => (
              <div
                key={prop.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all group flex flex-col"
              >
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
                    className={`absolute top-3 right-3 p-2 rounded-full transition-colors cursor-pointer ${
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
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="space-y-4">
            {paginatedProperties.map((prop) => (
              <div
                key={prop.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow flex flex-col sm:flex-row group"
              >
                <div className="sm:w-72 lg:w-80 aspect-[16/10] sm:aspect-auto overflow-hidden bg-slate-100 relative shrink-0">
                  <img
                    src={prop.images[0]}
                    alt={prop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2 bg-[#12284C] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {prop.status}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-2xl font-serif font-bold text-[#12284C]">
                          ${prop.price.toLocaleString()}
                        </div>
                        <h3 className="text-base font-semibold text-slate-800 mt-1">
                          {prop.title}
                        </h3>
                        <p className="text-xs text-slate-500">{prop.address}, {prop.town}, NY {prop.zip}</p>
                      </div>

                      <button
                        onClick={() => toggleFavorite(prop.id)}
                        className={`p-2 rounded-full cursor-pointer ${
                          isFavorite(prop.id)
                            ? 'text-red-500 bg-red-50'
                            : 'text-slate-400 hover:text-slate-600'
                        }`}
                      >
                        <Heart className="w-5 h-5 fill-current" />
                      </button>
                    </div>

                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {prop.description}
                    </p>

                    <div className="flex items-center gap-6 text-xs text-slate-600 mt-3 pt-3 border-t border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <Bed className="w-4 h-4 text-[#C8A24A]" />
                        <span>{prop.beds} Bedrooms</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Bath className="w-4 h-4 text-[#C8A24A]" />
                        <span>{prop.baths} Bathrooms</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Maximize2 className="w-4 h-4 text-[#C8A24A]" />
                        <span>{prop.sqft.toLocaleString()} Sq Ft</span>
                      </div>
                      <div className="hidden md:block text-slate-400">
                        Built {prop.yearBuilt}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400">
                      MLS #{prop.mlsNumber} · {prop.county} County
                    </span>
                    <Link
                      href={`/listings/${prop.id}`}
                      className="px-4 py-2 bg-[#12284C] text-white rounded-lg text-xs font-bold hover:bg-[#1A335E] transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>View Full Property</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            {[...Array(totalPages)].map((_, i) => {
              const pageNum = i + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => {
                    setCurrentPage(pageNum);
                    window.scrollTo({ top: 200, behavior: 'smooth' });
                  }}
                  className={`w-9 h-9 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    currentPage === pageNum
                      ? 'bg-[#12284C] text-white'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};
