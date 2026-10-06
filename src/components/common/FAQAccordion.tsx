import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '../../types';

interface FAQAccordionProps {
  items: FAQItem[] | { question: string; answer: string; id?: string }[];
  className?: string;
  defaultOpenIndex?: number;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  className = '',
  defaultOpenIndex,
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>(
    defaultOpenIndex !== undefined ? [defaultOpenIndex] : []
  );

  const toggleItem = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        const itemKey = 'id' in item && item.id ? item.id : `faq-${index}`;
        const contentId = `faq-content-${itemKey}`;
        const buttonId = `faq-btn-${itemKey}`;

        return (
          <div
            key={itemKey}
            className="border border-[#E5E7EB] rounded-xl bg-white transition-colors duration-150 overflow-hidden"
          >
            <button
              id={buttonId}
              type="button"
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              aria-controls={contentId}
              className="w-full py-4.5 px-5 sm:px-6 flex items-center justify-between text-left gap-4 focus:outline-none focus-visible:bg-[#F9FAFB] hover:bg-[#F9FAFB]/70 transition-colors"
            >
              <span className="font-semibold text-sm sm:text-base text-[#111827] pr-2">
                {item.question}
              </span>
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 bg-[#F3F4F6] text-[#4B5563] transition-transform duration-200 ${
                  isOpen ? 'rotate-180 bg-[#3157D5]/10 text-[#3157D5]' : ''
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div
                id={contentId}
                role="region"
                aria-labelledby={buttonId}
                className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-[#4B5563] leading-relaxed border-t border-[#F3F4F6]"
              >
                <p className="m-0">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
