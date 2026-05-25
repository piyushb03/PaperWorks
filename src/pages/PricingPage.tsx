import React from 'react';
import {
  Receipt,
  FileCheck2,
  Code2,
  Briefcase,
  GraduationCap,
  ArrowRight,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';
import { SEO } from '../seo/SEO';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { Button } from '../components/common/Button';
import { SectionHeading } from '../components/common/SectionHeading';
import { CTASection } from '../components/common/CTASection';
import { siteConfig, getTelegramLinkWithService } from '../config/siteConfig';

export const PricingPage: React.FC = () => {
  const breadcrumbs = [{ label: 'Pricing' }];

  const categories = [
    {
      title: 'Research & Papers Support',
      icon: <FileCheck2 className="w-5 h-5 text-[#3157D5]" />,
      tagline: 'Research papers, review surveys & IEEE formatting',
      factors: [
        'Current manuscript status (raw draft vs. initial revision)',
        'Target venue guidelines (IEEE, Springer, ACM, Elsevier)',
        'Page or word count (e.g. 6-page conference vs. 15-page journal)',
        'Citation depth & mathematical complexity',
      ],
      deliverable: 'Fully formatted, reviewed manuscript (.docx / LaTeX) with citation hygiene',
      serviceQuery: 'Research Paper Support',
    },
    {
      title: 'Major & Final-Year Projects',
      icon: <Code2 className="w-5 h-5 text-purple-600" />,
      tagline: 'Capstone reports, synopses, SRS & viva preparation',
      factors: [
        'Project tier: Minor (30-40 pages) vs. Major Capstone (80-120+ pages)',
        'Department template & university ordinance requirements',
        'Architecture complexity & number of UML/DFD diagrams',
        'Testing depth (unit, integration test matrices)',
      ],
      deliverable: 'Complete project report, IEEE 830 SRS, UML diagrams, presentation & viva guide',
      serviceQuery: 'Major Project Support',
    },
    {
      title: 'Career & ATS Resumes',
      icon: <Briefcase className="w-5 h-5 text-emerald-600" />,
      tagline: 'ATS-parseable resumes & scholarly CVs',
      factors: [
        'Document type: 1-Page ATS Fresher Resume vs. Comprehensive Academic CV',
        'Number of technical projects and internships to quantify',
        'Target role domain (SWE, Data Science, Cloud, Graduate School)',
      ],
      deliverable: 'Editable .docx + vector PDF + plain text with live clickable links',
      serviceQuery: 'ATS-Friendly Resume Support',
    },
    {
      title: 'Academic & Technical Documents',
      icon: <GraduationCap className="w-5 h-5 text-amber-700" />,
      tagline: 'Technical seminar reports & defense presentations',
      factors: [
        'Report length and departmental formatting specifications',
        'Presentation slide count (standard 10-12 slides vs. detailed defense)',
        'Incorporation of custom vector architecture graphics',
      ],
      deliverable: 'Print-ready technical report & high-contrast PowerPoint slide deck with speaker notes',
      serviceQuery: 'Academic Documents Support',
    },
  ];

  return (
    <div className="w-full flex flex-col">
      <SEO
        title="Transparent Pricing & Custom Quotes | PaperWorks"
        description="Learn how pricing is determined at PaperWorks. Requirement-first quotes based on scope, document length, deadline, and technical depth. No hidden fees."
        canonical={`${siteConfig.siteUrl}/pricing`}
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
            <Receipt className="w-3.5 h-3.5 text-[#3157D5]" />
            <span>Transparent, Requirement-First Scoping</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
            Clear Pricing. Definitive Quotes.
          </h1>

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl mx-auto">
            Because technical documents vary significantly in length, mathematical depth, and university formatting rubrics, we provide customized quotes after examining your specific requirements.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Get a Quote
            </Button>
            <Button
              href={siteConfig.telegramUrl}
              variant="telegram"
              size="lg"
              icon={<MessageSquare className="w-4 h-4" />}
            >
              Ask on Telegram
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Determinants Breakdown */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeading
          eyebrow="Estimation Criteria"
          title="How Your Quote Is Decided"
          description="We review your files or project description and calculate an all-inclusive, fixed quote based on these five objective criteria."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
