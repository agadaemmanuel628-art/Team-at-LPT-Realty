import React from 'react';
import { useRouter } from '../context/RouterContext';
import { Logo } from './Logo';

export const PageTransition: React.FC = () => {
  const { isLoading } = useRouter();

  if (!isLoading) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/95 backdrop-blur-md transition-opacity duration-300 pointer-events-none"
      role="status"
      aria-live="polite"
      aria-label="Loading page content"
    >
      {/* Top Gold Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-100 overflow-hidden z-50">
        <div className="h-full bg-gradient-to-r from-[#12284C] via-[#C8A24A] to-[#12284C] w-full animate-[progress_0.4s_ease-in-out_infinite]" />
      </div>

      {/* Centered Logo with subtle fade and breathing animation */}
      <div className="flex flex-col items-center gap-4 animate-[fadeIn_0.2s_ease-out]">
        <Logo size="lg" />
        <div className="flex items-center gap-2 mt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#C8A24A] animate-ping" />
          <span className="text-xs font-semibold tracking-widest text-[#12284C] uppercase font-sans">
            Long Island · LPT Realty
          </span>
        </div>
      </div>
    </div>
  );
};
