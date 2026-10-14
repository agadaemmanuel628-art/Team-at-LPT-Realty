import React, { useState, useEffect } from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { useFavorites } from '../context/FavoritesContext';
import { Logo } from './Logo';
import { BUSINESS_INFO } from '../data/mockData';
import { Phone, Heart, Menu, X, ChevronDown } from 'lucide-react';

export const Header: React.FC = () => {
  const { currentPath, navigate } = useRouter();
  const { favoritesCount } = useFavorites();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when path changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(null);
  }, [currentPath]);

  const navLinks = [
    { label: 'Home', href: '/' },
    {
      label: 'Buy',
      href: '/buy',
      subLinks: [
        { label: 'Buying Process & Guide', href: '/buy' },
        { label: 'Search All Listings', href: '/listings' },
        { label: 'Mortgage Calculator', href: '/resources' },
      ],
    },
    {
      label: 'Sell',
      href: '/sell',
      subLinks: [
        { label: 'Selling Strategy & Staging', href: '/sell' },
        { label: 'Free Home Valuation', href: '/home-valuation' },
        { label: 'Recently Sold Results', href: '/sold' },
      ],
    },
    { label: 'Properties', href: '/listings' },
    { label: 'Neighborhoods', href: '/areas' },
    { label: 'Our Team', href: '/team' },
    {
      label: 'About',
      href: '/about',
      subLinks: [
        { label: 'Our Story & Mission', href: '/about' },
        { label: 'Client Reviews', href: '/reviews' },
        { label: 'Services Overview', href: '/services' },
        { label: 'Real Estate Investors', href: '/investors' },
        { label: 'Join Our Team / Careers', href: '/join-us' },
        { label: 'Market Reports & Blog', href: '/blog' },
        { label: 'FAQ', href: '/faq' },
      ],
    },
    { label: 'Contact', href: '/contact' },
  ];

  const isLinkActive = (href: string) => {
    if (href === '/') return currentPath === '/';
    return currentPath === href || currentPath.startsWith(href + '/');
  };

  return (
    <>
      {/* Top micro bar for high-touch luxury touchpoint */}
      <div className="bg-[#12284C] text-white text-xs py-1.5 px-4 sm:px-8 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-sans">
          <div className="flex items-center gap-6">
            <span className="text-slate-300">
              Long Island, NY · Nassau & Suffolk Counties
            </span>
            <span className="text-[#C8A24A] font-medium">
              Affiliated with LPT Realty
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="inline-flex items-center gap-1.5 text-slate-200 hover:text-[#C8A24A] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C8A24A]" />
              <span className="font-semibold">{BUSINESS_INFO.phone}</span>
            </a>
            <span className="text-slate-400">{BUSINESS_INFO.hoursShort}</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80'
            : 'bg-white py-4 border-b border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          {/* Zone 1: Logo matching brand asset exactly */}
          <Link
            href="/"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#12284C] rounded-sm shrink-0"
            aria-label="USA Real Estate Team at LPT Realty Home"
          >
            <Logo size={scrolled ? 'sm' : 'md'} />
          </Link>

          {/* Zone 2: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((item) => {
              const active = isLinkActive(item.href);
              const hasSub = item.subLinks && item.subLinks.length > 0;

              return (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => hasSub && setDropdownOpen(item.label)}
                  onMouseLeave={() => hasSub && setDropdownOpen(null)}
                >
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-semibold tracking-normal rounded-md transition-all whitespace-nowrap ${
                      active
                        ? 'text-[#12284C] bg-slate-100 font-bold'
                        : 'text-slate-700 hover:text-[#12284C] hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    {hasSub && (
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#12284C] transition-transform duration-200 group-hover:rotate-180" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {hasSub && dropdownOpen === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-56 rounded-xl bg-white shadow-xl border border-slate-100 py-2 z-50 animate-[fadeIn_0.15s_ease-out]">
                      {item.subLinks!.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#12284C] transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Zone 3: Direct Actions (Favorites, Phone, Valuation CTA) */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            {/* Saved Favorites Link */}
            <Link
              href="/listings"
              className="relative p-2 text-slate-600 hover:text-[#12284C] transition-colors rounded-full hover:bg-slate-100"
              title="Saved Properties"
              aria-label={`Saved properties: ${favoritesCount}`}
            >
              <Heart className="w-5 h-5" />
              {favoritesCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#C8A24A] text-[10px] font-bold text-white shadow">
                  {favoritesCount}
                </span>
              )}
            </Link>

            {/* Direct Phone Call for Desktop */}
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="hidden xl:inline-flex items-center gap-2 px-3 py-2 text-xs font-bold text-[#12284C] hover:text-[#C8A24A] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C8A24A]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            {/* Primary Action Button: "Get a Free Home Valuation" */}
            <button
              onClick={() => navigate('/home-valuation')}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#12284C] text-white hover:bg-[#1A335E] shadow-sm hover:shadow transition-all whitespace-nowrap cursor-pointer border border-[#12284C]"
            >
              Free Valuation
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-[#12284C] focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Navigation' : 'Open Navigation'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-slate-200 shadow-2xl max-h-[85vh] overflow-y-auto px-6 py-6 animate-[fadeIn_0.15s_ease-out]">
            <div className="flex flex-col gap-1 pb-4 border-b border-slate-100">
              {navLinks.map((item) => (
                <div key={item.label} className="py-1">
                  <Link
                    href={item.href}
                    className={`block py-2 text-base font-semibold ${
                      isLinkActive(item.href)
                        ? 'text-[#12284C] font-bold'
                        : 'text-slate-700 hover:text-[#12284C]'
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.subLinks && (
                    <div className="pl-4 border-l border-slate-200 my-1 space-y-1">
                      {item.subLinks.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block py-1.5 text-xs text-slate-600 hover:text-[#12284C]"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="flex items-center justify-center gap-2 py-3 w-full rounded-lg bg-slate-100 text-[#12284C] font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-[#C8A24A]" />
                Call {BUSINESS_INFO.phone}
              </a>
              <button
                onClick={() => navigate('/home-valuation')}
                className="w-full py-3 rounded-lg bg-[#12284C] text-white font-bold text-sm tracking-wider uppercase shadow text-center"
              >
                Get a Free Home Valuation
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
