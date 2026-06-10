import React from 'react';
import { BookOpen } from 'lucide-react';
import { SEO } from '../../seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { ResourceCard } from '../../components/resources/ResourceCard';
import { CTASection } from '../../components/common/CTASection';
import { resourcesData } from '../../data/resourcesData';
import { siteConfig } from '../../config/siteConfig';

export const ResourcesHubPage: React.FC = () => {
  const breadcrumbs = [
    { label: 'Resources' },
  ];

  return (
    <div className="w-full flex flex-col">
      <SEO
        title="Student & Engineering Resources, Checklists & Guides | PaperWorks"
        description="Comprehensive free guides on writing research papers, IEEE formatting specifications, literature synthesis, final-year project reports, and ATS resume engineering."
        canonical={`${siteConfig.siteUrl}/resources`}
        breadcrumbs={breadcrumbs}
      />

      <div className="w-full bg-white border-b border-[#E5E7EB] py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 sm:py-16 bg-[#F7F7F5] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3157D5] bg-[#3157D5]/10 px-3 py-1 rounded-md">
              <BookOpen className="w-3.5 h-3.5 text-[#3157D5]" />
              <span>Knowledge Base & Practical Checklists</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
              Free Guides for Students & Researchers
            </h1>
            <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
              Actionable engineering guides designed to help you write better research papers, satisfy strict formatting rubrics, structure capstone reports, and beat ATS resume screeners.
            </p>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resourcesData.map((res) => (
            <ResourceCard key={res.slug} resource={res} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <CTASection
          title="Need hands-on assistance applying these guides?"
          copy="Connect with us directly on Telegram or Email to discuss your manuscript or project."
        />
      </section>
    </div>
  );
};
