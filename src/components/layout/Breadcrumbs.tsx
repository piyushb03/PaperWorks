import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import type { BreadcrumbItem } from '../../types';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center text-xs text-[#6B7280] font-medium py-3 overflow-x-auto whitespace-nowrap ${className}`}
    >
      <ol className="flex items-center gap-1.5 list-none p-0 m-0">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 text-[#6B7280] hover:text-[#111827] transition-colors"
            title="Home"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-[#9CA3AF] flex-shrink-0" />
              {isLast || !item.href ? (
                <span
                  className="text-[#111827] font-semibold truncate max-w-[240px] md:max-w-none"
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="hover:text-[#111827] transition-colors truncate max-w-[180px] md:max-w-none"
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
