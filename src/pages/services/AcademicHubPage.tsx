import React from 'react';
import { MessageSquare, Mail } from 'lucide-react';
import { SEO } from '../../seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { Button } from '../../components/common/Button';
import { ServiceCard } from '../../components/services/ServiceCard';
import { CTASection } from '../../components/common/CTASection';
import { getServicesByCategory } from '../../data/servicesData';
import { siteConfig, getTelegramLinkWithService, getMailtoLink } from '../../config/siteConfig';

export const AcademicHubPage: React.FC = () => {
  const academicServices = getServicesByCategory('academic');

  const breadcrumbs = [
    { label: 'Services', href: '/#services-section' },
    { label: 'Academic Documents' },
  ];

  return (
    <div className="w-full flex flex-col">
      <SEO
        title="Academic Documents & Technical Presentations Support | PaperWorks"
        description="Professional support for technical seminar reports, internship summaries, lab manuals, and high-impact presentation slide decks for university defenses."
        canonical={`${siteConfig.siteUrl}/academic`}
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
          <div className="max-w-3xl space-y-5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md">
              Departmental Documentation & Presentations
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
              Academic Documents & Presentations
            </h1>
            <p className="text-lg text-[#3157D5] font-medium">
              High-contrast slide decks and university-compliant technical reports.
            </p>
            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
              We assist students in formatting seminar reports, internship documentation, and creating clean, legible defense presentations that communicate architectural concepts clearly to examiners.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Button
                href={getTelegramLinkWithService('Academic Documents Hub')}
                variant="telegram"
                size="lg"
                icon={<MessageSquare className="w-4 h-4" />}
              >
                Message on Telegram
              </Button>
              <Button
                href={getMailtoLink('Academic Support Inquiry', 'Hi PaperWorks,\n\nI need support with an academic document/presentation:')}
                variant="secondary"
                size="lg"
                icon={<Mail className="w-4 h-4" />}
              >
                Send an Email
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111827]">
            Academic & Coursework Services
          </h2>
          <p className="text-sm text-[#4B5563] mt-2">
            Structured for semester milestones, seminar evaluations, and defense presentations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {academicServices.map((svc) => (
            <ServiceCard key={svc.slug} service={svc} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <CTASection
          title="Need technical slides or a seminar report?"
          copy="Reach out directly with your allocated duration and guidelines."
          contextService="Academic Documents"
        />
      </section>
    </div>
  );
};
