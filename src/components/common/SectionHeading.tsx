import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  badge?: string;
  className?: string;
  serifAccent?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  badge,
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-10 md:mb-14 ${isCenter ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'} ${className}`}>
      {(eyebrow || badge) && (
        <div className={`flex items-center gap-2 mb-3.5 ${isCenter ? 'justify-center' : 'justify-start'}`}>
          {eyebrow && (
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#3157D5] bg-[#3157D5]/10 px-2.5 py-1 rounded-md">
              {eyebrow}
            </span>
          )}
          {badge && (
            <span className="text-[11px] font-semibold tracking-wider uppercase text-[#4B5563] bg-[#E5E7EB] px-2 py-0.5 rounded">
              {badge}
            </span>
          )}
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#111827] leading-[1.2]">
        {title}
      </h2>

      {description && (
        <p className="mt-3.5 text-base sm:text-lg text-[#4B5563] leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
};
