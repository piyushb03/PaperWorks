import React from 'react';
import { Link } from 'react-router-dom';

interface BrandLogoProps {
  className?: string;
  showTagline?: boolean;
  inverted?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  showTagline = false,
  inverted = false,
}) => {
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-3 group focus:outline-none transition-opacity hover:opacity-90 ${className}`}
      aria-label="PaperWorks Homepage"
    >
      {/* Brand Geometric Mark */}
      <div className="relative w-8 h-8 rounded-lg overflow-hidden flex-shrink-0 bg-[#111827] shadow-sm border border-black/10 flex items-center justify-center">
        {/* Subtle geometric document fold */}
        <div className="w-5 h-5 bg-[#F7F7F5] rounded-[2px] relative flex flex-col justify-center px-1">
          {/* Fold notch */}
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#3157D5] rounded-bl-[2px]" />
          {/* Editorial manuscript lines */}
          <div className="w-2.5 h-[2px] bg-[#111827] rounded-full mb-[2px]" />
          <div className="w-3 h-[2px] bg-[#4B5563] rounded-full mb-[2px]" />
          <div className="w-2 h-[2px] bg-[#3157D5] rounded-full" />
        </div>
      </div>

      <div className="flex flex-col">
        <span
          className={`font-semibold text-lg tracking-tight leading-none ${
            inverted ? 'text-white' : 'text-[#111827]'
          }`}
        >
          Paper<span className="text-[#3157D5]">Works</span>
        </span>
        {showTagline && (
          <span
            className={`text-[10px] tracking-wider uppercase mt-1 font-medium ${
              inverted ? 'text-gray-400' : 'text-[#6B7280]'
            }`}
          >
            Research • Projects • Documents
          </span>
        )}
      </div>
    </Link>
  );
};
