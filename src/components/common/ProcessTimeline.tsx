import React from 'react';
import { MessageCircle, FileSearch, Receipt, PenTool, CheckCircle2 } from 'lucide-react';

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export const ProcessTimeline: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      step: '01',
      title: 'Tell Us',
      desc: 'Share your requirements, drafts, or guidelines directly through Telegram or email.',
      icon: <MessageCircle className="w-5 h-5 text-[#3157D5]" />,
    },
    {
      step: '02',
      title: 'We Review',
      desc: 'We examine your project scope, university ordinances, or publication venue standards.',
      icon: <FileSearch className="w-5 h-5 text-[#3157D5]" />,
    },
    {
      step: '03',
      title: 'Get a Quote',
      desc: 'Receive transparent pricing, defined milestones, and an estimated delivery timeline.',
      icon: <Receipt className="w-5 h-5 text-[#3157D5]" />,
    },
    {
      step: '04',
      title: 'We Work',
      desc: 'Work begins with meticulous structuring, formatting, and technical precision.',
      icon: <PenTool className="w-5 h-5 text-[#3157D5]" />,
    },
    {
      step: '05',
      title: 'Review & Delivery',
      desc: 'Inspect the completed work and request permitted revisions within the agreed scope.',
      icon: <CheckCircle2 className="w-5 h-5 text-[#3157D5]" />,
    },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
        {steps.map((item, index) => (
          <div
            key={index}
            className="group relative flex flex-col p-5 bg-white rounded-xl border border-[#E5E7EB] hover:border-[#3157D5]/40 hover:shadow-xs transition-all duration-200"
          >
            {/* Step Header */}
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs font-bold tracking-widest text-[#3157D5] bg-[#3157D5]/10 px-2 py-0.5 rounded">
                {item.step}
              </span>
              <div className="w-8 h-8 rounded-lg bg-[#F7F7F5] flex items-center justify-center group-hover:bg-[#3157D5]/10 transition-colors">
                {item.icon}
              </div>
            </div>

            {/* Title & Desc */}
            <h3 className="text-base font-bold text-[#111827] mb-1.5">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
