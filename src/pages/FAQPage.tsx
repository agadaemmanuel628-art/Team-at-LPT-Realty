import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useRouter } from '../context/RouterContext';
import { FAQS } from '../data/mockData';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

export const FAQPage: React.FC = () => {
  const { navigate } = useRouter();
  const [activeGroup, setActiveGroup] = useState<string>('Buying');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const currentFaqGroup = FAQS.find((f) => f.category === activeGroup) || FAQS[0];

  return (
    <div className="space-y-16 pb-16">
      <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} />

      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24A]">
          Help & Answers
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-black text-[#12284C] mt-2 leading-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed font-light">
          Have questions about buying, selling, property taxes, or working with the USA Real Estate Team at LPT Realty? Find clear, straightforward answers below.
        </p>
      </section>

      {/* Category Pills / Buttons */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {FAQS.map((group) => (
            <button
              key={group.category}
              onClick={() => {
                setActiveGroup(group.category);
                setOpenIndex(0);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeGroup === group.category
                  ? 'bg-[#12284C] text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {group.category} FAQs
            </button>
          ))}
        </div>
      </section>

      {/* Accordion List */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3">
          {currentFaqGroup.questions.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-[#12284C] hover:bg-slate-50/80 transition-colors cursor-pointer"
                >
                  <span className="font-serif font-bold text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform shrink-0 ${
                      isOpen ? 'rotate-180 text-[#12284C]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
        <HelpCircle className="w-10 h-10 text-[#C8A24A] mx-auto mb-3" />
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#12284C]">
          Have a Question Not Listed Here?
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-2">
          Anthony Russo and our senior advisors are always available to discuss your specific property scenario.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={() => navigate('/contact')}
            className="bg-[#12284C] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#1A335E] transition-colors cursor-pointer"
          >
            Contact Our Office
          </button>
        </div>
      </section>
    </div>
  );
};
