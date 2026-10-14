import React from 'react';
import { Link } from '../context/RouterContext';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <ol className="flex items-center flex-wrap gap-1.5 text-xs text-slate-500 font-medium">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1 hover:text-[#12284C] transition-colors"
          >
            <Home className="w-3.5 h-3.5 text-slate-400" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="inline-flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
              {isLast || !item.href ? (
                <span className="text-[#12284C] font-semibold truncate max-w-[220px] sm:max-w-none">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-[#12284C] transition-colors truncate max-w-[180px] sm:max-w-none"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
