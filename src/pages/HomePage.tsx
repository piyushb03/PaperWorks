import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  FileCheck2,
  Code2,
  Briefcase,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import { SEO } from '../seo/SEO';
import { Button } from '../components/common/Button';
import { TrustStrip } from '../components/common/TrustStrip';
import { ProcessTimeline } from '../components/common/ProcessTimeline';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { CTASection } from '../components/common/CTASection';
import { SectionHeading } from '../components/common/SectionHeading';
import { IEEDocumentPreview } from '../components/previews/IEEDocumentPreview';
import { ServiceEditorialBlock } from '../components/services/ServiceEditorialBlock';
import { ResourceCard } from '../components/resources/ResourceCard';
import { resourcesData } from '../data/resourcesData';
import { faqsData } from '../data/faqsData';
import { siteConfig } from '../config/siteConfig';

export const HomePage: React.FC = () => {
  const topFaqs = faqsData.slice(0, 6);
  const featuredResources = resourcesData.slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      <SEO
        title="PaperWorks — Research, Project & Professional Document Support"
        description="Professional support for research papers, review papers, IEEE formatting, major engineering projects, thesis documentation, and ATS-friendly resumes."
        canonical={`${siteConfig.siteUrl}/`}
      />

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 overflow-hidden bg-grid-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827]/5 border border-[#111827]/10 text-[#111827] text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-[#3157D5]" />
                <span>RESEARCH • PROJECTS • PROFESSIONAL DOCUMENTS</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight leading-[1.1]">
                Your academic work,{' '}
                <span className="relative inline-block text-[#3157D5]">
                  professionally prepared.
                  <span className="absolute left-0 bottom-1 w-full h-[3px] bg-[#3157D5]/20 rounded-full" />
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-xl font-normal">
                Professional support for research papers, review papers, IEEE formatting, major engineering capstone projects, technical thesis documentation, and career-ready ATS resumes.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Button
                  to="/contact"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                >
                  Discuss Your Requirement
                </Button>

                <Button
                  href="#services-section"
                  variant="secondary"
                  size="lg"
                >
                  Explore Services
                </Button>

                <Button
                  href={siteConfig.telegramUrl}
                  variant="telegram"
                  size="lg"
                  icon={<MessageSquare className="w-4 h-4" />}
                  analyticsEvent="telegram_click"
