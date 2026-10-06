import React from 'react';
import { BookOpen, FileCheck2, Code2, FileText, MessageSquare } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: <BookOpen className="w-4 h-4 text-[#3157D5]" />,
      label: 'Research Support',
      desc: 'Methodology & editing',
    },
    {
      icon: <FileCheck2 className="w-4 h-4 text-[#3157D5]" />,
      label: 'IEEE Formatting',
      desc: 'Standards compliance',
    },
    {
      icon: <Code2 className="w-4 h-4 text-[#3157D5]" />,
      label: 'Project Documentation',
      desc: 'SRS, architecture & reports',
    },
    {
      icon: <FileText className="w-4 h-4 text-[#3157D5]" />,
      label: 'ATS Resumes',
      desc: 'Single-column parseability',
    },
    {
      icon: <MessageSquare className="w-4 h-4 text-[#3157D5]" />,
      label: 'Direct Communication',
      desc: 'Telegram & email review',
    },
  ];

  return (
    <div className="w-full border-y border-[#E5E7EB] bg-white/70 backdrop-blur-xs py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {trustItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-black/[0.02] transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-[#3157D5]/10 flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs sm:text-sm font-semibold text-[#111827] truncate">
                  {item.label}
                </span>
                <span className="text-[11px] text-[#6B7280] truncate">
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
