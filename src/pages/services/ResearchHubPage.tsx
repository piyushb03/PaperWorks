import React from 'react';
import { MessageSquare, Mail } from 'lucide-react';
import { SEO } from '../../seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { Button } from '../../components/common/Button';
import { ServiceCard } from '../../components/services/ServiceCard';
import { CTASection } from '../../components/common/CTASection';
import { IEEDocumentPreview } from '../../components/previews/IEEDocumentPreview';
import { getServicesByCategory } from '../../data/servicesData';
import { siteConfig, getTelegramLinkWithService, getMailtoLink } from '../../config/siteConfig';

export const ResearchHubPage: React.FC = () => {
  const researchServices = getServicesByCategory('research');

  const breadcrumbs = [
    { label: 'Services', href: '/#services-section' },
    { label: 'Research & Papers' },
  ];

  return (
    <div className="w-full flex flex-col">
      <SEO
        title="Research Paper & Academic Publishing Support | PaperWorks"
        description="Comprehensive support for research papers, systematic review surveys, IEEE formatting, literature reviews, and academic editing. Meticulous peer-review readiness."
        canonical={`${siteConfig.siteUrl}/research`}
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#3157D5] bg-[#3157D5]/10 px-2.5 py-1 rounded-md">
                Scholarly Publishing Support
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
                Research & Academic Papers
              </h1>
              <p className="text-lg text-[#3157D5] font-medium">
                From initial draft structuring to IEEE two-column compliance and peer-review readiness.
              </p>
              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-2xl">
                We assist authors, postgraduates, and doctoral scholars in communicating complex technical insights with mathematical clarity, structured experimental sections, and verified bibliographic references.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Button
                  href={getTelegramLinkWithService('Research Services Hub')}
                  variant="telegram"
                  size="lg"
                  icon={<MessageSquare className="w-4 h-4" />}
                >
                  Message on Telegram
                </Button>
                <Button
                  href={getMailtoLink('Research Paper Inquiries', 'Hi PaperWorks,\n\nI would like to discuss support for my research manuscript:')}
                  variant="secondary"
                  size="lg"
                  icon={<Mail className="w-4 h-4" />}
                >
                  Send an Email
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <IEEDocumentPreview />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111827]">
            Specialized Research Services
          </h2>
          <p className="text-sm text-[#4B5563] mt-2">
            Select a service below to review deliverables, timelines, and sample structures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchServices.map((svc) => (
            <ServiceCard key={svc.slug} service={svc} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <CTASection
          title="Have a research draft you want reviewed?"
          copy="Reach out directly on Telegram or Email with your draft or target conference template."
          contextService="Research Services"
        />
      </section>
    </div>
  );
};
