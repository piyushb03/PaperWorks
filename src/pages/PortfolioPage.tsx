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
