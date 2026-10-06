import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import { SEO } from '../seo/SEO';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { Button } from '../components/common/Button';
import { CTASection } from '../components/common/CTASection';
import { IEEDocumentPreview } from '../components/previews/IEEDocumentPreview';
import { ResearchPaperMockup } from '../components/previews/ResearchPaperMockup';
import { ProjectReportPreview } from '../components/previews/ProjectReportPreview';
import { ResumePreview } from '../components/previews/ResumePreview';
import { portfolioData } from '../data/portfolioData';
import { siteConfig } from '../config/siteConfig';

export const PortfolioPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const breadcrumbs = [{ label: 'Sample Work' }];

  const filteredItems = selectedFilter === 'all'
    ? portfolioData
    : portfolioData.filter((item) => item.category.toLowerCase().includes(selectedFilter));

  const renderSamplePreview = (type: string) => {
    switch (type) {
      case 'ieee':
        return <IEEDocumentPreview />;
      case 'research':
        return <ResearchPaperMockup />;
      case 'project':
        return <ProjectReportPreview />;
      case 'resume':
        return <ResumePreview />;
      default:
        return <IEEDocumentPreview />;
    }
  };

  return (
    <div className="w-full flex flex-col">
      <SEO
        title="Sample Work Portfolio & Illustrative Documents | PaperWorks"
        description="Inspect our illustrative samples demonstrating IEEE two-column formatting, capstone project reports, SRS documentation, and ATS-friendly resumes. Clearly labeled demos."
        canonical={`${siteConfig.siteUrl}/portfolio`}
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
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#3157D5] bg-[#3157D5]/10 px-3 py-1 rounded-md">
            <Sparkles className="w-3.5 h-3.5 text-[#3157D5]" />
            <span>Illustrative Samples & Structural Demos</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
            Sample Work Portfolio
          </h1>

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl mx-auto">
            Inspect our structural demonstrations showcasing manuscript formatting, engineering thesis architectures, requirement specifications, and ATS resume layouts.
          </p>

          {/* Ethical Disclaimer */}
          <div className="pt-2">
            <div className="inline-flex items-center gap-2 p-3 bg-white rounded-xl border border-[#E5E7EB] text-xs text-[#6B7280] max-w-xl mx-auto shadow-2xs">
              <ShieldAlert className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <span>All items below are mock structural samples and demonstrations created to illustrate layout standards. We strictly protect client confidentiality.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pt-10 pb-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all', label: 'All Samples' },
            { id: 'research', label: 'Research & IEEE' },
            { id: 'project', label: 'Capstone Projects' },
            { id: 'career', label: 'Career Resumes' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                selectedFilter === tab.id
                  ? 'bg-[#111827] text-white shadow-xs'
                  : 'bg-white text-[#4B5563] border border-[#E5E7EB] hover:bg-[#F9FAFB]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Items Showcase */}
      <section className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-16">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 bg-white rounded-3xl border border-[#E5E7EB] shadow-xs ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Left Column: Sample Description */}
              <div className={`lg:col-span-6 space-y-4 ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#3157D5] bg-[#3157D5]/10 px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#111827] leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-[#4B5563] leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-bold text-[#111827] uppercase tracking-wider">
                    Demonstrated Standards:
                  </div>
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-[#374151]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3157D5] flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {item.slugLink && (
                  <div className="pt-4 flex items-center gap-3">
                    <Button
                      to={item.slugLink}
                      variant="primary"
                      size="sm"
                      icon={<ArrowRight className="w-3.5 h-3.5" />}
                      iconPosition="right"
                    >
                      View Service Details
                    </Button>
                  </div>
                )}
              </div>

              {/* Right Column: Live Interactive Mockup */}
              <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative">
                  {renderSamplePreview(item.sampleType)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <CTASection
          title="Need documents crafted to this standard?"
          copy="Discuss your paper or project report requirements directly with our team."
        />
      </section>
    </div>
  );
};
