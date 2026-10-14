import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useRouter, Link } from '../context/RouterContext';
import { AGENTS, BUSINESS_INFO } from '../data/mockData';
import { Phone, Mail, Award, MapPin, ArrowRight, Star } from 'lucide-react';

export const TeamPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="space-y-16 pb-16">
      <Breadcrumbs items={[{ label: 'Our Team' }]} />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24A]">
            Real Estate Professionals
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-[#12284C] mt-2 leading-tight">
            Meet the USA Real Estate Team
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-light">
            Each advisor on our team brings deep specialized knowledge—from luxury Gold Coast estates and waterfront properties to first-time homebuyer representation and investment modeling across Long Island.
          </p>
        </div>
      </section>

      {/* Team Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {AGENTS.map((agent) => (
            <div
              key={agent.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row group"
            >
              {/* Photo */}
              <div className="sm:w-2/5 aspect-[4/5] sm:aspect-auto overflow-hidden bg-slate-100 relative">
                <img
                  src={agent.photo}
                  alt={agent.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#12284C]/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  {agent.experienceYears} Years Exp.
                </div>
              </div>

              {/* Details */}
              <div className="sm:w-3/5 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono text-slate-400">
                      {agent.licenseNumber}
                    </span>
                    <div className="flex items-center gap-1 text-[#C8A24A] text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{agent.rating} ({agent.reviewCount})</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-serif font-bold text-[#12284C] mt-1 group-hover:text-[#C8A24A] transition-colors">
                    <Link href={`/team/${agent.id}`}>{agent.name}</Link>
                  </h2>
                  <p className="text-xs font-semibold text-[#C8A24A] mt-0.5">{agent.title}</p>

                  <p className="text-xs text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    {agent.bio}
                  </p>

                  {/* Specialties tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {agent.specialties.slice(0, 2).map((spec, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Contact items */}
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                    <a
                      href={`tel:${agent.phone.replace(/\D/g, '')}`}
                      className="flex items-center gap-2 hover:text-[#12284C] transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#C8A24A] shrink-0" />
                      <span>{agent.phone}</span>
                    </a>
                    <a
                      href={`mailto:${agent.email}`}
                      className="flex items-center gap-2 hover:text-[#12284C] transition-colors truncate"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#C8A24A] shrink-0" />
                      <span className="truncate">{agent.email}</span>
                    </a>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-[11px] text-slate-500">
                    <span className="font-bold text-[#12284C]">{agent.recentSalesCount}</span> recent sales
                  </div>
                  <Link
                    href={`/team/${agent.id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#12284C] hover:text-[#C8A24A]"
                  >
                    <span>View Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Careers CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#12284C] text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
          <div>
            <span className="text-[#C8A24A] text-xs font-bold uppercase tracking-widest">
              Join LPT Realty & USA Real Estate Team
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold mt-1 text-white">
              Are You a Licensed New York Real Estate Agent?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Elevate your business with 100% commission options, revenue share, stock equity, and high-impact marketing tech.
            </p>
          </div>
          <button
            onClick={() => navigate('/join-us')}
            className="bg-[#C8A24A] hover:bg-[#B68E37] text-[#12284C] px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap"
          >
            Explore Agent Careers
          </button>
        </div>
      </section>
    </div>
  );
};
