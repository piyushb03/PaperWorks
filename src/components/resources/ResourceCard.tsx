import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import type { ResourceItem } from '../../types';

interface ResourceCardProps {
  resource: ResourceItem;
  className?: string;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ resource, className = '' }) => {
  return (
    <div
      className={`group flex flex-col justify-between p-6 bg-white rounded-xl border border-[#E5E7EB] hover:border-[#3157D5]/40 hover:shadow-md transition-all duration-200 ${className}`}
    >
      <div>
        {/* Category & Read Time */}
        <div className="flex items-center justify-between text-xs text-[#6B7280] mb-3">
          <span className="font-semibold text-[#3157D5] bg-[#3157D5]/8 px-2.5 py-0.5 rounded-full text-[11px] uppercase tracking-wide">
            {resource.category}
          </span>
          <div className="flex items-center gap-1 font-medium text-[11px]">
            <Clock className="w-3 h-3 text-[#9CA3AF]" />
            <span>{resource.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-[#111827] group-hover:text-[#3157D5] transition-colors leading-snug">
          <Link to={resource.route}>{resource.title}</Link>
        </h3>

        {/* Description */}
        <p className="mt-2.5 text-xs sm:text-sm text-[#4B5563] leading-relaxed line-clamp-3">
          {resource.description}
        </p>
      </div>

      {/* Footer Link */}
      <div className="mt-6 pt-4 border-t border-[#F3F4F6] flex items-center justify-between">
        <Link
          to={resource.route}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111827] group-hover:text-[#3157D5] transition-colors"
        >
          <BookOpen className="w-3.5 h-3.5 text-[#3157D5]" />
          <span>Read Practical Guide</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
