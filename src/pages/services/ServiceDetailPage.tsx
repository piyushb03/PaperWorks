import React from 'react';
import { Navigate } from 'react-router-dom';
import {
  CheckCircle2,
  PackageCheck,
  Users,
  Layers,
  ArrowRight,
  MessageSquare,
  Mail,
  Sparkles,
} from 'lucide-react';
import { SEO } from '../../seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { Button } from '../../components/common/Button';
import { FAQAccordion } from '../../components/common/FAQAccordion';
import { CTASection } from '../../components/common/CTASection';
import { IEEDocumentPreview } from '../../components/previews/IEEDocumentPreview';
import { ResearchPaperMockup } from '../../components/previews/ResearchPaperMockup';
import { ProjectReportPreview } from '../../components/previews/ProjectReportPreview';
import { ResumePreview } from '../../components/previews/ResumePreview';
import { ServiceCard } from '../../components/services/ServiceCard';
import { ResourceCard } from '../../components/resources/ResourceCard';
import { getServiceBySlug, servicesData } from '../../data/servicesData';
import { getResourceBySlug } from '../../data/resourcesData';
import { siteConfig, getTelegramLinkWithService, getMailtoLink } from '../../config/siteConfig';

interface ServiceDetailPageProps {
  slug: string;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug }) => {
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  // Related services
  const relatedServices = service.relatedServices
    .map((sSlug) => servicesData.find((s) => s.slug === sSlug))
    .filter((s): s is typeof servicesData[0] => !!s);

  // Related resources
  const relatedResources = service.relatedResources
    .map((rSlug) => getResourceBySlug(rSlug))
    .filter((r): r is NonNullable<ReturnType<typeof getResourceBySlug>> => !!r);

  const breadcrumbs = [
    { label: service.categoryLabel, href: `/${service.category}` },
    { label: service.shortTitle },
  ];

  const renderVisual = () => {
    switch (service.sampleVisualType) {
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
        title={service.seoTitle}
        description={service.seoDescription}
        canonical={`${siteConfig.siteUrl}${service.route}`}
        breadcrumbs={breadcrumbs}
      />

      {/* Top Breadcrumb Bar */}
      <div className="w-full bg-white border-b border-[#E5E7EB] py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="py-12 sm:py-16 bg-[#F7F7F5] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3157D5] bg-[#3157D5]/10 px-3 py-1 rounded-md">
                <Sparkles className="w-3.5 h-3.5 text-[#3157D5]" />
                <span>{service.categoryLabel}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
                {service.title}
              </h1>

              <p className="text-lg text-[#3157D5] font-medium">
                {service.tagline}
              </p>

              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-2xl font-normal">
                {service.description}
              </p>

              {/* Conversion Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Button
                  href={getTelegramLinkWithService(service.title)}
                  variant="telegram"
                  size="lg"
                  icon={<MessageSquare className="w-4 h-4" />}
                  analyticsEvent="telegram_click"
                  analyticsData={{ service: service.slug }}
                >
                  Message on Telegram
                </Button>

                <Button
                  href={getMailtoLink(
                    `Inquiry: ${service.title}`,
                    `Hi PaperWorks,\n\nI would like to inquire about ${service.title}.\n- Target Date:\n- Current Status of Document:\n- Specific Requirements:`
                  )}
                  variant="secondary"
                  size="lg"
                  icon={<Mail className="w-4 h-4" />}
                  analyticsEvent="email_click"
                  analyticsData={{ service: service.slug }}
                >
                  Send an Email
                </Button>

                <Button
                  to="/contact"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                >
                  Discuss Requirement
                </Button>
              </div>

              <div className="text-xs text-[#6B7280] pt-2">
                Direct scope evaluation • Response usually within 1–3 hours during working hours
              </div>
            </div>

            {/* Right Visual Sample Mockup */}
            <div className="lg:col-span-5 relative">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#3157D5]/10 to-transparent rounded-2xl -z-10 blur-xs" />
                {renderVisual()}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SCOPE & WHO IT IS FOR ================= */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Who it is for */}
          <div className="p-7 sm:p-8 bg-white rounded-2xl border border-[#E5E7EB] shadow-xs">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#3157D5]/10 text-[#3157D5] flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#111827]">
                  Who This Service Is For
                </h3>
                <p className="text-xs text-[#6B7280]">Tailored for researchers & engineers</p>
              </div>
            </div>

            <ul className="space-y-3 list-none p-0 m-0">
              {service.audience.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#374151]">
                  <CheckCircle2 className="w-4 h-4 text-[#3157D5] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What is included */}
          <div className="p-7 sm:p-8 bg-white rounded-2xl border border-[#E5E7EB] shadow-xs">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#111827]">
                  What Is Included
                </h3>
                <p className="text-xs text-[#6B7280]">Core technical scope & checks</p>
              </div>
            </div>

            <ul className="space-y-3 list-none p-0 m-0">
              {service.scopePoints.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#374151]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= STEP-BY-STEP PROCESS ================= */}
      <section className="py-14 sm:py-20 bg-white border-y border-[#E5E7EB] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#3157D5] bg-[#3157D5]/10 px-2.5 py-1 rounded-md">
              Working Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mt-3">
              How We Execute This Service
            </h2>
            <p className="text-sm text-[#4B5563] mt-2">
              Structured collaboration from requirement intake to final delivery and review.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {service.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-[#E5E7EB] bg-[#F7F7F5] relative flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-[#3157D5] bg-[#3157D5]/10 px-2 py-0.5 rounded">
                    0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-[#111827] mt-3 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DELIVERABLES LIST ================= */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="p-8 sm:p-10 bg-[#111827] text-white rounded-3xl relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#3157D5] text-white flex items-center justify-center">
              <PackageCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Final Deliverables
              </h3>
              <p className="text-xs text-gray-400">Everything you receive upon completion</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.deliverables.map((deliv, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-gray-800/70 border border-gray-700/80 flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-[#3157D5] flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                  {deliv}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICE SPECIFIC FAQS ================= */}
      <section className="py-14 sm:py-20 bg-white border-y border-[#E5E7EB] w-full">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#3157D5] bg-[#3157D5]/10 px-2.5 py-1 rounded-md">
              Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mt-3">
              Frequently Asked Questions: {service.shortTitle}
            </h2>
          </div>

          <FAQAccordion items={service.faqs} defaultOpenIndex={0} />
        </div>
      </section>

      {/* ================= RELATED SERVICES & GUIDES ================= */}
      {(relatedServices.length > 0 || relatedResources.length > 0) && (
        <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12">
          {/* Related Services */}
          {relatedServices.length > 0 && (
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#111827] mb-6">
                Related Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedServices.map((relSvc) => (
                  <ServiceCard key={relSvc.slug} service={relSvc} />
                ))}
              </div>
            </div>
          )}

          {/* Related Resources */}
          {relatedResources.length > 0 && (
            <div className="pt-6 border-t border-[#E5E7EB]">
              <h3 className="text-xl sm:text-2xl font-bold text-[#111827] mb-6">
                Helpful Guides & Checklists
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedResources.map((relRes) => (
                  <ResourceCard key={relRes.slug} resource={relRes} />
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* ================= FINAL CTA ================= */}
      <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <CTASection
          title={`Need professional support for ${service.shortTitle}?`}
          copy="Send us your requirements or draft materials. We will review scope and outline exact turnaround and delivery details."
          contextService={service.title}
        />
      </section>
    </div>
  );
};
