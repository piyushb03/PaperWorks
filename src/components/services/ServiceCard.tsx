import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import type { ServiceItem } from '../../types';

interface ServiceCardProps {
  service: ServiceItem;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, className = '' }) => {
  return (
    <div
      className={`group flex flex-col justify-between p-6 bg-white rounded-xl border border-[#E5E7EB] hover:border-[#3157D5]/40 hover:shadow-md transition-all duration-200 ${className}`}
    >
      <div>
        {/* Category tag */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-bold tracking-wider uppercase text-[#3157D5] bg-[#3157D5]/8 px-2.5 py-0.5 rounded-full">
            {service.categoryLabel}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-[#111827] group-hover:text-[#3157D5] transition-colors leading-snug">
          <Link to={service.route}>{service.title}</Link>
        </h3>

        {/* Short description */}
        <p className="mt-2.5 text-sm text-[#4B5563] leading-relaxed">
          {service.shortDescription}
        </p>

        {/* Key scope points */}
        <ul className="mt-4 space-y-2 list-none p-0">
          {service.scopePoints.slice(0, 3).map((point, index) => (
            <li key={index} className="flex items-start gap-2 text-xs text-[#374151]">
              <Check className="w-3.5 h-3.5 text-[#3157D5] flex-shrink-0 mt-0.5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Action Link */}
      <div className="mt-6 pt-4 border-t border-[#F3F4F6] flex items-center justify-between">
        <Link
          to={service.route}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111827] group-hover:text-[#3157D5] transition-colors"
        >
          <span>View Details & Deliverables</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
