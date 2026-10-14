import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useRouter, Link } from '../context/RouterContext';
import { useFavorites } from '../context/FavoritesContext';
import { PROPERTIES, AGENTS } from '../data/mockData';
import { Property } from '../types';
import {
  Heart,
  Share2,
  Printer,
  Bed,
  Bath,
  Maximize2,
  Calendar,
  DollarSign,
  MapPin,
  CheckCircle2,
  Phone,
  Mail,
  Calculator,
  ChevronLeft,
  ChevronRight,
  X,
  Send,
  Building,
  ShieldAlert,
} from 'lucide-react';

export const ListingDetailPage: React.FC = () => {
  const { params, navigate } = useRouter();
  const { isFavorite, toggleFavorite } = useFavorites();
  const propertyId = params.propertyId || 'prop-1';

  const property = PROPERTIES.find((p) => p.id === propertyId) || PROPERTIES[0];
  const agent = AGENTS.find((a) => a.id === property.agentId) || AGENTS[0];
  const similarProperties = PROPERTIES.filter((p) => p.id !== property.id && (p.town === property.town || p.county === property.county)).slice(0, 3);

  // Lightbox State
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Mortgage Calculator State
  const [homePrice, setHomePrice] = useState(property.price);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTermYears, setLoanTermYears] = useState(30);

  // Schedule Tour Form State
  const [tourType, setTourType] = useState<'in-person' | 'video'>('in-person');
  const [tourDate, setTourDate] = useState('Tomorrow');
  const [tourTime, setTourTime] = useState('Morning (10:00 AM - 12:00 PM)');
  const [tourSubmitted, setTourSubmitted] = useState(false);
  const [tourData, setTourData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  // Mortgage math
  const downPaymentAmount = (homePrice * downPaymentPercent) / 100;
  const principal = homePrice - downPaymentAmount;
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTermYears * 12;
  const monthlyPrincipalInterest =
    monthlyRate > 0
      ? (principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
      : principal / numberOfPayments;
  const monthlyPropertyTaxes = property.taxes / 12;
  const monthlyInsurance = 220; // Average Long Island homeowner hazard insurance estimate
  const totalMonthlyPayment = Math.round(monthlyPrincipalInterest + monthlyPropertyTaxes + monthlyInsurance + (property.hoa || 0));

  const handleTourSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tourData.name || !tourData.email) return;
    setTourSubmitted(true);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: `Check out ${property.title} in ${property.town}, NY`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="space-y-12 pb-16">
      <Breadcrumbs
        items={[
          { label: 'Properties', href: '/listings' },
          { label: property.town, href: `/areas/${property.town.toLowerCase().replace(/\s+/g, '-')}` },
          { label: property.title },
        ]}
      />

      {/* Main Listing Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider bg-[#12284C] text-white px-2.5 py-0.5 rounded">
                {property.status}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                MLS #{property.mlsNumber} · {property.county} County
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-serif font-black text-[#12284C]">
              {property.title}
            </h1>
            <p className="text-sm text-slate-600 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#C8A24A]" />
              <span>{property.address}, {property.town}, NY {property.zip}</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between lg:justify-end gap-4">
            <div className="text-left sm:text-right">
              <div className="text-xs uppercase tracking-wider text-slate-500 font-bold">
                Offered At
              </div>
              <div className="text-3xl sm:text-4xl font-serif font-black text-[#12284C]">
                ${property.price.toLocaleString()}
              </div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">
                Est. ${totalMonthlyPayment.toLocaleString()}/mo with 20% down
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleFavorite(property.id)}
                className={`p-2.5 rounded-xl border transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-bold ${
                  isFavorite(property.id)
                    ? 'bg-red-50 text-red-600 border-red-200'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
                title="Save Property"
              >
                <Heart className={`w-4 h-4 ${isFavorite(property.id) ? 'fill-current' : ''}`} />
                <span>{isFavorite(property.id) ? 'Saved' : 'Save'}</span>
              </button>

              <button
                onClick={handleShare}
                className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                title="Share Property"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>

              <button
                onClick={() => window.print()}
                className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 text-xs font-bold flex items-center gap-1.5 cursor-pointer no-print"
                title="Print Flyer"
              >
                <Printer className="w-4 h-4" />
                <span>Print</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery with Lightbox */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 rounded-2xl overflow-hidden aspect-[16/9] max-h-[540px]">
          {/* Main Large Hero Image */}
          <div
            onClick={() => {
              setActiveImageIndex(0);
              setLightboxOpen(true);
            }}
            className="md:col-span-2 relative h-full overflow-hidden bg-slate-900 cursor-pointer group"
          >
            <img
              src={property.images[0]}
              alt={`${property.title} view 1`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            <span className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded font-medium">
              Click to view fullscreen ({property.images.length} Photos)
            </span>
          </div>

          {/* Secondary Thumbnails Column */}
          <div className="hidden md:grid md:col-span-2 grid-cols-2 gap-3 h-full">
            {property.images.slice(1, 5).map((img, i) => (
              <div
                key={i}
                onClick={() => {
                  setActiveImageIndex(i + 1);
                  setLightboxOpen(true);
                }}
                className="relative h-full overflow-hidden bg-slate-900 cursor-pointer group rounded-lg"
              >
                <img
                  src={img}
                  alt={`${property.title} view ${i + 2}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-between p-4 sm:p-8 animate-[fadeIn_0.2s_ease-out]">
            <div className="w-full flex items-center justify-between text-white text-xs">
              <span className="font-semibold">
                Photo {activeImageIndex + 1} of {property.images.length} — {property.title}
              </span>
              <button
                onClick={() => setLightboxOpen(false)}
                className="p-2 text-white hover:text-[#C8A24A] cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="relative max-w-5xl max-h-[75vh] flex items-center justify-center">
              <img
                src={property.images[activeImageIndex]}
                alt="Enlarged view"
                className="max-h-[75vh] max-w-full object-contain rounded shadow-2xl"
                referrerPolicy="no-referrer"
              />

              <button
                onClick={() =>
                  setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : property.images.length - 1))
                }
                className="absolute left-2 p-3 rounded-full bg-black/50 text-white hover:bg-[#12284C] cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={() =>
                  setActiveImageIndex((prev) => (prev < property.images.length - 1 ? prev + 1 : 0))
                }
                className="absolute right-2 p-3 rounded-full bg-black/50 text-white hover:bg-[#12284C] cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Thumbnail selector row in lightbox */}
            <div className="flex items-center gap-2 overflow-x-auto max-w-xl py-2">
              {property.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImageIndex(i)}
                  className={`w-16 h-12 rounded overflow-hidden border-2 cursor-pointer shrink-0 ${
                    activeImageIndex === i ? 'border-[#C8A24A]' : 'border-transparent opacity-60'
                  }`}
                >
                  <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Main Content Layout: Left Details, Right Tour & Agent Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left 2 Cols: Key Facts, Description, Amenities, Map, Calculator */}
        <div className="lg:col-span-2 space-y-10">
          {/* Key Facts Strip */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <div className="flex items-center justify-center gap-1 text-[#C8A24A] mb-1">
                <Bed className="w-5 h-5" />
              </div>
              <div className="text-xl font-serif font-bold text-[#12284C]">{property.beds}</div>
              <div className="text-xs text-slate-500 font-semibold">Bedrooms</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1 text-[#C8A24A] mb-1">
                <Bath className="w-5 h-5" />
              </div>
              <div className="text-xl font-serif font-bold text-[#12284C]">{property.baths}</div>
              <div className="text-xs text-slate-500 font-semibold">Bathrooms</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1 text-[#C8A24A] mb-1">
                <Maximize2 className="w-5 h-5" />
              </div>
              <div className="text-xl font-serif font-bold text-[#12284C]">{property.sqft.toLocaleString()}</div>
              <div className="text-xs text-slate-500 font-semibold">Living Sq Ft</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1 text-[#C8A24A] mb-1">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="text-xl font-serif font-bold text-[#12284C]">{property.yearBuilt}</div>
              <div className="text-xs text-slate-500 font-semibold">Year Built</div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-serif font-bold text-[#12284C]">
              About This Long Island Residence
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
              {property.description}
            </p>
          </div>

          {/* Detailed Specifications Table */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-serif font-bold text-[#12284C]">
              Property Specifications & Tax Assessment
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-xs">
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Property Type</span>
                <span className="font-bold text-slate-900">{property.propertyType}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Lot Size</span>
                <span className="font-bold text-slate-900">{property.lotSize}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Annual Property Taxes</span>
                <span className="font-bold text-slate-900">${property.taxes.toLocaleString()} / year</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Garage Capacity</span>
                <span className="font-bold text-slate-900">{property.garage} Car Attached</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500 font-medium">HOA / Maintenance</span>
                <span className="font-bold text-slate-900">{property.hoa ? `$${property.hoa}/mo` : 'None / $0'}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500 font-medium">County / School District</span>
                <span className="font-bold text-slate-900">{property.county} County / {property.town} Schools</span>
              </div>
            </div>
          </div>

          {/* Features and Amenities */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-serif font-bold text-[#12284C]">
              Features & Premium Amenities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {property.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#C8A24A] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map Embed / Location */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-serif font-bold text-[#12284C]">
                Neighborhood Map & Transit
              </h2>
              <span className="text-xs text-slate-500">{property.town}, NY</span>
            </div>

            <div className="rounded-xl overflow-hidden aspect-[16/9] border border-slate-200 bg-slate-100 relative">
              <iframe
                title="Property Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps?q=${encodeURIComponent(`${property.address}, ${property.town}, NY ${property.zip}`)}&output=embed`}
              />
            </div>
            <p className="text-[11px] text-slate-500 italic">
              Located in {property.town}, within walking distance to local parks, recreation, and rapid LIRR transit into Grand Central Madison and Penn Station.
            </p>
          </div>

          {/* Interactive Mortgage Calculator */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-[#C8A24A]" />
              <h2 className="text-xl font-serif font-bold text-[#12284C]">
                Payment & Mortgage Estimator
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
              <div>
                <div className="text-xs text-slate-500 font-semibold">Principal & Interest</div>
                <div className="text-lg font-serif font-bold text-[#12284C]">
                  ${Math.round(monthlyPrincipalInterest).toLocaleString()}/mo
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500 font-semibold">Taxes & Insurance</div>
                <div className="text-lg font-serif font-bold text-[#12284C]">
                  ${Math.round(monthlyPropertyTaxes + monthlyInsurance).toLocaleString()}/mo
                </div>
              </div>
              <div>
                <div className="text-xs text-[#C8A24A] font-bold uppercase tracking-wider">Total Est. Monthly</div>
                <div className="text-2xl font-serif font-bold text-[#12284C]">
                  ${totalMonthlyPayment.toLocaleString()}/mo
                </div>
              </div>
            </div>

            {/* Sliders */}
            <div className="space-y-4 text-xs">
              <div>
                <div className="flex justify-between font-semibold mb-1">
                  <span>Down Payment ({downPaymentPercent}%): ${downPaymentAmount.toLocaleString()}</span>
                  <span className="text-slate-500">Loan: ${principal.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={50}
                  step={5}
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full accent-[#12284C] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between font-semibold mb-1">
                  <span>Interest Rate: {interestRate}%</span>
                  <span className="text-slate-500">Fixed Rate</span>
                </div>
                <input
                  type="range"
                  min={4.0}
                  max={9.0}
                  step={0.125}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full accent-[#12284C] cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right 1 Col: Schedule a Tour & Listing Agent Card */}
        <div className="lg:col-span-1 space-y-6">
          {/* Schedule Tour Form Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md sticky top-24 space-y-5">
            <h3 className="text-lg font-serif font-bold text-[#12284C]">
              Schedule a Private Tour
            </h3>

            {/* Tour Type Selector */}
            <div className="flex rounded-lg bg-slate-100 p-1">
              <button
                type="button"
                onClick={() => setTourType('in-person')}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  tourType === 'in-person' ? 'bg-white shadow text-[#12284C]' : 'text-slate-600'
                }`}
              >
                In-Person Tour
              </button>
              <button
                type="button"
                onClick={() => setTourType('video')}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  tourType === 'video' ? 'bg-white shadow text-[#12284C]' : 'text-slate-600'
                }`}
              >
                Live Video Walkthrough
              </button>
            </div>

            {tourSubmitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="text-sm font-bold text-emerald-900">Tour Requested!</h4>
                <p className="text-xs text-emerald-700">
                  {agent.name.split(' ')[0]} will confirm your {tourType} appointment for {tourDate} {tourTime}.
                </p>
                <button
                  onClick={() => setTourSubmitted(false)}
                  className="mt-3 text-xs font-bold text-[#12284C] underline cursor-pointer"
                >
                  Change booking
                </button>
              </div>
            ) : (
              <form onSubmit={handleTourSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Preferred Day
                  </label>
                  <select
                    value={tourDate}
                    onChange={(e) => setTourDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none"
                  >
                    <option value="Today">Today (Same-day priority)</option>
                    <option value="Tomorrow">Tomorrow</option>
                    <option value="This Saturday">This Saturday</option>
                    <option value="This Sunday">This Sunday</option>
                    <option value="Next Week">Next Week</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Time of Day
                  </label>
                  <select
                    value={tourTime}
                    onChange={(e) => setTourTime(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none"
                  >
                    <option value="Morning (10:00 AM - 12:00 PM)">Morning (10:00 AM - 12:00 PM)</option>
                    <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                    <option value="Evening (5:00 PM - 7:00 PM)">Evening (5:00 PM - 7:00 PM)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={tourData.name}
                    onChange={(e) => setTourData({ ...tourData, name: e.target.value })}
                    placeholder="Full Name"
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
                    value={tourData.email}
                    onChange={(e) => setTourData({ ...tourData, email: e.target.value })}
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
                    value={tourData.phone}
                    onChange={(e) => setTourData({ ...tourData, phone: e.target.value })}
                    placeholder="(516) 000-0000"
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#12284C]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#12284C] hover:bg-[#1A335E] text-white py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#C8A24A]" />
                  <span>Request Appointment</span>
                </button>
              </form>
            )}

            {/* Listing Agent Contact Mini Card */}
            <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
              <img
                src={agent.photo}
                alt={agent.name}
                className="w-12 h-12 rounded-full object-cover shrink-0 border border-slate-200"
                referrerPolicy="no-referrer"
              />
              <div className="flex-1 min-w-0">
                <div className="font-bold text-xs text-[#12284C] truncate">{agent.name}</div>
                <div className="text-[11px] text-slate-500 truncate">{agent.title}</div>
                <a
                  href={`tel:${agent.phone.replace(/\D/g, '')}`}
                  className="text-[11px] text-[#C8A24A] font-semibold hover:underline block truncate mt-0.5"
                >
                  {agent.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Properties Section */}
      {similarProperties.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-serif font-bold text-[#12284C]">
              Similar Properties in {property.town} & {property.county}
            </h2>
            <Link
              href="/listings"
              className="text-xs font-bold text-[#12284C] hover:text-[#C8A24A]"
            >
              View All &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarProperties.map((sim) => (
              <div
                key={sim.id}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow group flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                    <img
                      src={sim.images[0]}
                      alt={sim.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 left-2 bg-[#12284C] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      {sim.status}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-lg font-serif font-bold text-[#12284C]">
                      ${sim.price.toLocaleString()}
                    </div>
                    <h4 className="text-xs font-bold text-slate-800 line-clamp-1 mt-0.5">
                      {sim.title}
                    </h4>
                    <p className="text-[11px] text-slate-500">{sim.address}, {sim.town}</p>
                    <div className="mt-3 flex items-center gap-3 text-xs text-slate-600">
                      <span>{sim.beds} Beds</span>
                      <span>·</span>
                      <span>{sim.baths} Baths</span>
                      <span>·</span>
                      <span>{sim.sqft.toLocaleString()} Sq Ft</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0 border-t border-slate-100 flex items-center justify-end">
                  <Link
                    href={`/listings/${sim.id}`}
                    className="text-xs font-bold text-[#12284C] hover:text-[#C8A24A]"
                  >
                    View Property &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
