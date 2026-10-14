import React from 'react';
import { BUSINESS_INFO } from '../data/mockData';
import { Phone, MessageSquare } from 'lucide-react';

export const FloatingMobileActions: React.FC = () => {
  return (
    <aside
      aria-label="Quick contact actions"
      className="md:hidden fixed bottom-3 inset-x-3 z-30 flex items-center gap-2 pointer-events-auto"
    >
      {/* Floating Call Button */}
      <a
        href={`tel:${BUSINESS_INFO.phoneClean}`}
        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#12284C] text-white shadow-lg text-xs font-bold uppercase tracking-wider active:scale-95 transition-transform border border-white/20"
      >
        <Phone className="w-4 h-4 text-[#C8A24A]" />
        <span>Call Now</span>
      </a>

      {/* Floating WhatsApp / Text Button */}
      <a
        href={`sms:${BUSINESS_INFO.phoneClean}?&body=Hello%20USA%20Real%20Estate%20Team,%20I%20am%20interested%20in%20Long%20Island%20real%20estate.`}
        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#25D366] text-slate-900 shadow-lg text-xs font-bold uppercase tracking-wider active:scale-95 transition-transform border border-emerald-600/30"
      >
        <MessageSquare className="w-4 h-4 text-slate-900" />
        <span>Text / SMS</span>
      </a>
    </aside>
  );
};
