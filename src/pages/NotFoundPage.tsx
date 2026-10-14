import React from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { Home, Search, Compass, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

export const NotFoundPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto text-center space-y-6 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
        <div className="w-16 h-16 rounded-full bg-slate-100 text-[#C8A24A] flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24A]">
            Page Not Found · 404
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-black text-[#12284C]">
            We Couldn't Find That Address
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
            Just like a house that was recently sold and off the market, this page may have been moved or renamed. Let's get you back on track to exploring Long Island real estate.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => navigate('/')}
            className="w-full sm:w-auto bg-[#12284C] hover:bg-[#1A335E] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Home className="w-4 h-4 text-[#C8A24A]" />
            <span>Return to Home</span>
          </button>
          <button
            onClick={() => navigate('/listings')}
            className="w-full sm:w-auto border border-slate-300 hover:border-[#12284C] text-slate-700 hover:text-[#12284C] px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Search className="w-4 h-4" />
            <span>Search Active Listings</span>
          </button>
        </div>

        <div className="pt-6 border-t border-slate-100 text-xs text-slate-500">
          Need immediate assistance? Call us directly at{' '}
          <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="font-bold text-[#12284C] hover:underline">
            {BUSINESS_INFO.phone}
          </a>
        </div>
      </div>
    </div>
  );
};
