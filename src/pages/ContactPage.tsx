import React from 'react';
import { ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { SEO } from '../seo/SEO';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { ContactCard } from '../components/common/ContactCard';
import { siteConfig } from '../config/siteConfig';

export const ContactPage: React.FC = () => {
  const breadcrumbs = [{ label: 'Contact' }];

  return (
    <div className="w-full flex flex-col">
      <SEO
        title="Contact PaperWorks | Telegram & Email Document Support"
        description="Connect directly with PaperWorks for research paper reviews, IEEE formatting, and engineering capstone documentation. Message us on Telegram or Email."
        canonical={`${siteConfig.siteUrl}/contact`}
        breadcrumbs={breadcrumbs}
      />

      <div className="w-full bg-white border-b border-[#E5E7EB] py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 sm:py-16 bg-[#F7F7F5] border-b border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#3157D5] bg-[#3157D5]/10 px-2.5 py-1 rounded-md">
            Direct Communication
          </span>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
            Discuss Your Requirement
          </h1>

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl mx-auto">
            Tell us about your research manuscript, major capstone project, or resume. We review materials directly through Telegram and Email.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-[#6B7280]">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#3157D5]" />
              <span>{siteConfig.hours}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{siteConfig.responseTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <ContactCard />
      </section>

      {/* Confidentiality & Ethics Reminder */}
      <section className="pb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="p-6 bg-white rounded-2xl border border-[#E5E7EB] text-xs text-[#6B7280] space-y-2">
          <div className="flex items-center gap-2 text-sm font-bold text-[#111827]">
            <ShieldCheck className="w-4 h-4 text-[#3157D5]" />
            <span>Document Confidentiality & Ethical Standards</span>
          </div>
          <p className="leading-relaxed">
            All files, drafts, datasets, and codebases shared with PaperWorks remain strictly confidential and your exclusive intellectual property. We do not publish, archive, or share client drafts under any circumstances.
          </p>
        </div>
      </section>
    </div>
  );
};
