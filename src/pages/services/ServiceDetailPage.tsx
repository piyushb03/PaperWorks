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
